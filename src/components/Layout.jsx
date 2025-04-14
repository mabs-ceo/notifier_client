import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';
import { Menu, X } from "lucide-react";
export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex  flex-col min-h-screen bg-green-50 justify-between">
    {/* Navbar */}
    <nav className="bg-green-500 p-4 shadow-md">
      <div className="mx-auto max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link to="/" className="flex items-center space-x-2">
            <span>Ummah</span>
            <span className="text-green-200">Notify</span>
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-6 font-bold text-xl">
          <Link to="/" className="text-white hover:text-green-200 transition duration-300">
            Home
          </Link>
          <Link to="/privacy" className="text-white hover:text-green-200 transition duration-300">
            Privacy
          </Link>
          <Link to="/notifications" className="text-white hover:text-green-200 transition duration-300">
            Notifications
          </Link>
        </div>
      </div>

      {/* Links - Mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-center font-bold text-xl">
          <Link
            to="/"
            className="text-white hover:text-green-200 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/privacy"
            className="text-white hover:text-green-200 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Privacy
          </Link>
          <Link
            to="/notifications"
            className="text-white hover:text-green-200 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Notifications
          </Link>
        </div>
      )}
    </nav>

    {/* Main Content */}
    <Outlet />

    {/* Footer */}
    <footer id="footer" className="bg-green-500 h-[60px] flex items-center justify-center text-white text-sm">
      © 2025 — Created by MABS
    </footer>
  </div>
    // <>
      
   
    //    <nav className="bg-green-500 p-4 shadow-md">
    //   <div className="max-w-7xl mx-auto flex justify-between items-center">
    //     {/* Logo */}
    //     <div className="text-white font-bold text-2xl">
    //       <Link to="/" className="flex items-center space-x-2">
    //         <span>Ummah</span>
    //         <span className="text-green-200">Notify</span>
    //       </Link>
    //     </div>
        
    //     {/* Navigation Links */}
    //     <div className="space-x-6">
    //       <Link to="/" className="text-white hover:text-green-200 transition duration-300">Home</Link>
    //       <Link to="/notifications" className="text-white hover:text-green-200 transition duration-300">Notifications</Link>
    //     </div>
    //   </div>
    // </nav>
     

    //   <Outlet />

    //   <footer
    //         id="footer"
    //         className="bg-green-500 h-[60px] flex items-center justify-center text-white text-sm"
    //       >
    //         © 2025 — Created by MABS
    //       </footer>
    // </>
  );
}
