import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router';


import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import { checkLocation } from '../functions';
import AccessRestricted from './AccessRestricted';

export default function Layout() {
  const [allowed, setAllowed] = useState(null);
  // const [location, setLocation] = useState(null);
  useEffect(() => {
   const getLocation = async ()=>{
   const status= await checkLocation()
 setAllowed(status.allowed)
    
   }
   getLocation()
  }, []);
 

  return (
    <div className="flex  flex-col  bg-green-50 ">
   {!allowed ? <AccessRestricted/> : <><Header/>
    {/* Main Content */}
    <Outlet />

    {/* Footer */}
    <Footer/></> }

    
  </div>
 
  );
}
