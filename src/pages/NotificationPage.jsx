import React, { useEffect, useState } from 'react';
import { getNotification } from '../functions';
import { Card } from '../components/Cards';
import { RiLoader5Fill } from "react-icons/ri";
import "../app.css"
export default function NotificationPage() {
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(true);

      async function handleSubscribe(e){
          e.preventDefault()
        const response= await  requestPermission({unsubscribe:false})
   console.log(response)  
      }

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await getNotification();
        setNotification(response);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      }
    }

    fetchNotifications();
  },[]);

  
  if (loading) {
    return (
     <diV className="flex items-center justify-center  bg-green-50">

     <RiLoader5Fill className="animate-spin " size={44} />
      <p className="text-green-700 font-medium">Loading...</p>
     </diV>
 
    );
  }
  if (notification.length === 0) {
    return (
      <div className="flex items-center justify-center  bg-green-50">
        <p className="text-green-700 font-medium">No notifications available.</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center     bg-green-50 py-8 px-4 overflow-y-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Notification Page
      </h1>
      <p className="text-xs text-gray-500 italic mt-2">
    Those passed prayer time will not be displayed
  </p>
      <div className='w-full max-w-2xl mx-auto  mb-64'>

      {notification.length && notification?.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          address={item.postal}
          contact={item.contact}
          time={new Date(item.dueDate).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        />
      ))}
          </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleSubscribe} className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-200">
          Subscribe
        </button>
      </div>  
   
    </main>
  );
}
