import { Link } from 'react-router'
import React from 'react'

export default function Hero({ msg,handleSubscribe }) {
  return (
    <section className="relative bg-slate-900 text-white ">
    <div className="absolute inset-0 bg-opacity-70 z-0">
      <div className="h-full w-full flex items-center justify-center opacity-10">
        {/* SVG representation of Kaaba */}
       <img src="https://images.pexels.com/photos/2895295/pexels-photo-2895295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
      </div>
    </div>
    <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <div className="max-w-2xl mx-auto ">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ummah <span className='font-mono '>Notify</span></h1>
        <blockquote className="text-sm md:text-lg italic font-semibold text-slate-50 dark:text-white mb-4">
    "Indeed, to Allah we belong and to Him we shall return." (Qur’an 2:156)
  </blockquote>
        <p className=" mb-8 ">This is the beginning of our humble effort to serve the Muslim community in Singapore. By subscribing, you’ll receive timely notifications about upcoming Janazah (funeral) prayers so you can fulfill the communal obligation and support fellow Muslims during times of loss.</p>
        {/* <p className="text-lg mb-8">Join UmmahNotify SG to stay updated on prayer times, community events, and halal happenings across Singapore.</p> */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={handleSubscribe} className="w-full cursor-pointer bg-white text-slate-800 px-6 py-3 rounded-md font-medium hover:bg-slate-100 transition">
           {msg ?msg: "Get Notified"}
          </button>
          <Link  className=" h-full cursor-pointer border   border-white text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition w-full flex justify-center items-center">
           LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}
