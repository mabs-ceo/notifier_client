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
            className="bg-green-300 h-svh  flex flex-col items-center justify-center px-4 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold max-w-2xl mb-6">
              Subscribe to our Janaza Notification service to get notified about Janaza in your area.
            </h2>
            <button onClick={handleSubscribe} className="px-6 py-3 text-xl md:text-2xl tracking-wide uppercase bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              Subscribe
            </button>
            <button onClick={handleUnsubscribe} className="mt-4 px-6 py-3 text-xl md:text-2xl tracking-wide uppercase bg-transparent text-white rounded-full hover:bg-red-600 transition">
              Unsubscribe
            </button>

          </section>
    
        
      
        </main>
      );
}
