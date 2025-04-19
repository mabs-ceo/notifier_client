import React, { useState } from 'react'
import { Bell, Calendar, Clock, Map, Book, Users, Menu, X, Search, ChevronDown, User, LogOut, MessageSquare, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-slate-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center">
              <div className=' font-black'>UN</div> logo
            </div> */}
            <Link to='/'>
            <h1 className="text-xl font-bold">UmmahNotify</h1>
            </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
            <Link to='/' className="hover:text-slate-400 transition">Home</Link>
            {/* <Link href="#" className="hover:text-slate-400 transition">Events</Link>
            <Link href="#" className="hover:text-slate-400 transition">Prayer Times</Link>
            <Link href="#" className="hover:text-slate-400 transition">Masjids</Link> */}
            <Link to='/notifications' className="hover:text-slate-400 transition">Notification</Link>
      
          </nav>
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
        </div>
       {/* Mobile Navigation */}
       {mobileMenuOpen && (
          <nav className="md:hidden bg-slate-700 px-4 py-2">
            <div className="flex flex-col space-y-3">
              <Link to='/' className="text-white hover:text-slate-400 py-2">Home</Link>
              {/* <a href="#" className="text-white hover:text-slate-400 py-2">Events</a>
              <a href="#" className="text-white hover:text-slate-400 py-2">Prayer Times</a>
              <a href="#" className="text-white hover:text-slate-400 py-2">Masjids</a>
              <a href="#" className="text-white hover:text-slate-400 py-2">Directory</a> */}
              <Link to='/notifications' className="text-white hover:text-slate-400 py-2">Notifications</Link>
            </div>
          </nav>
        )}
    </header>
  )
}
