import React from 'react'
import { requestPermission } from '../../firebase';
import GetNotifiedInfoPage from '../components/getNotifiedPage';




export default function HomePage() {
   
    async function handleSubscribe(e){
        e.preventDefault()
      const response= await  requestPermission({unsubscribe:false})
 console.log(response)  
    }

    async function handleUnsubscribe(e){
        e.preventDefault()
        const response= await  requestPermission({unsubscribe:true})
        console.log(response)
     
    }
    return (
        <main>
        
    
        <section
    id="services"
    className=" flex flex-col items-center  px-4 text-center"
  >
    <h1 className="text-3xl mt-20 md:mt-2 transition-all ease-in-out md:text-4xl font-bold mb-4 text-slate-700">
      Welcome to ummah notify
    </h1>
    <blockquote  className="text-xl italic font-semibold text-slate-900 dark:text-white">
      "Indeed, to Allah we belong and to Him we shall return." (Qur’an 2:156)
    </blockquote>
    <p className="text-md md:text-lg text-slate-700 max-w-2xl mb-6">
      This is the beginning of our humble effort to serve the Muslim community in Singapore.
      By subscribing, you’ll receive timely notifications about upcoming Janazah (funeral) prayers 
      so you can fulfill the communal obligation and support fellow Muslims during times of loss.
    </p>
 
{/* <GetNotifiedInfoPage handleSubscribe={handleSubscribe} handleUnsubscribe={handleUnsubscribe}/> */}
   
 
  </section>
        </main>
      );
}
