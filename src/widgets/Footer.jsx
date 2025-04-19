import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router'
import { Mail } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">UmmahNotify</h3>
          <p className="text-slate-100 text-sm">Connecting Muslims across Singapore through community, events, and shared values.</p>
        </div>
        {/* <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-100">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Events</a></li>
            <li><a href="#" className="hover:text-white transition">Prayer Times</a></li>
            <li><a href="#" className="hover:text-white transition">Halal Directory</a></li>
          </ul>
        </div> */}
        <div>
          <h3 className="text-lg font-bold mb-4">Community</h3>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li><a href="#aboutus" className="hover:text-white transition">About Us</a></li>
            {/* <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li> */}
          <div className="max-w-3xl mx-auto">
        <h2 className=" hover:text-white transition mb-4">Contact Us</h2>
        <p className=" text-gray-600 mb-6">
          Feel free to reach out with questions, ideas, or collaboration opportunities.
        </p>
        <div className="inline-flex items-center justify-center gap-2 text-blue-600 font-medium ">
          <Mail className="w-5 h-5" />
          <a href="mailto:info@ummahnotify.com" className="hover:underline">
            info@ummahnotify.com
          </a>
        </div>
      </div>
          </ul>
        </div>
        <div className=' hidden'>
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-slate-100 text-sm mb-3">Get updates on community events and announcements.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-slate-50 px-3 py-2 rounded-l-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <button className="bg-slate-600 text-white px-4 py-2 rounded-r-md hover:bg-slate-700 transition">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-100">
        <p>© 2025 UmmahNotify SG. Created by MABS. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  )
}
