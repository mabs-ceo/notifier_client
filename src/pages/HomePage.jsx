import React, { useEffect, useRef, useState } from 'react'
import { requestPermission } from '../../firebase';
import GetNotifiedInfoPage from '../components/getNotifiedPage';
import Header from '../widgets/Header';
import Hero from '../widgets/Hero';
import PrayerTime from '../widgets/PrayerTime';
import AboutUs from '../widgets/AboutUs';
import QandS from '../widgets/QandS';





export default function HomePage() {
  const [timeSpent, setTimeSpent] = useState(0);
  const [honeypotValue] = useState(''); // stays empty unless bot tampers

  const[loading,setLoading]=useState(false)
  const[msg,setMsg]=useState('')


  
  useEffect(() => {
    const timer = setInterval(() => setTimeSpent(prev => prev + 1), 1000);
    return () => clearInterval(timer); 
  }, []);
    async function handleSubscribe(e){
        e.preventDefault()
        
        setLoading('true')
        

      const response= await  requestPermission({unsubscribe:false,timeSpent,honeypotValue})
if(response===200 ||response===201  ){
setMsg('Thank you, you will be notified!.')
setLoading(false)
}else{
  setMsg('Error, please try again.')
  setLoading(false)
}
setTimeout(()=>{
setMsg('')
},2000)
    
    }

    async function handleUnsubscribe(e){
        e.preventDefault()
        const response= await  requestPermission({unsubscribe:true})
    
     
    }
    return (
        <main >
          <Hero msg={msg} handleSubscribe={handleSubscribe} handleUnsubscribe={handleUnsubscribe}/>
        <AboutUs/>
        <QandS/>
    



{/* <GetNotifiedInfoPage msg={msg} handleSubscribe={handleSubscribe} handleUnsubscribe={handleUnsubscribe} /> */}

        </main>
      );
}
