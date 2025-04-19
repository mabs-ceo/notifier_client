import React from 'react';
import { Link, Outlet } from 'react-router';


import Header from '../widgets/Header';
import Footer from '../widgets/Footer';

export default function Layout() {
 

  return (
    <div className="flex  flex-col  bg-green-50 ">
   
<Header/>
    {/* Main Content */}
    <Outlet />

    {/* Footer */}
    <Footer/>
    
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
