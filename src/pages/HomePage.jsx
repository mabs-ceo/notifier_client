import React from 'react'
import { requestPermission } from '../../firebase';




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
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-700">
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

    <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
      Subscribe to our Janazah Notification Service
    </h2>
    <p className="text-slate-700 mb-6">
      Get notified when there is a Janazah prayer .
    </p>

    <button
      onClick={handleSubscribe}
      className="px-6 py-3 text-xl md:text-2xl tracking-wide uppercase bg-green-500 text-slate-700 cursor-pointer rounded-full hover:bg-green-600 transition"
    >
      Subscribe
    </button>
    <button
      onClick={handleUnsubscribe}
      className="mt-4 px-6 py-3 text-md  tracking-wide uppercase bg-transparent   text-slate-600 border cursor-pointer  border-slate-700 hover:text-slate-50 rounded-full hover:bg-slate-600 transition"
    >
      Unsubscribe
    </button>
  </section>
        </main>
      );
}
