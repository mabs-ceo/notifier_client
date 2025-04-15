import React from 'react';
import { BellRing } from 'lucide-react';
import ComingSoon from '../pages/CommingSoon';

export default function GetNotifiedInfoPage({handleSubscribe ,handleUnsubscribe}) {
  return (
  
      <div className="max-w-xl bg-green-100 shadow-lg rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4 text-blue-600">
          <BellRing className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Get Notified Instantly to our Janazah Notification Service</h1>
        <p className="text-gray-600 mb-6">
          Stay updated on upcoming Janazah (funeral) prayers. Simply subscribe to receive
          real-time push notifications directly to your device.
        </p>
        <div className="text-left bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <h2 className="font-semibold text-blue-700 mb-2">How it works:</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Click the <strong>Subscribe</strong> button below.</li>
            <li>Allow notifications when prompted by your browser.</li>
            <li>That’s it! You’ll be notified when Janazah prayers are announced.</li>
          </ul>
        </div>
       
        {/* <button
          className="bg-green-600 text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={handleSubscribe}
        >
          Subscribe Now
        </button>
        <p className="text-xs text-gray-400 mt-4" >
          You can unsubscribe at any time from your browser settings or by clicking the <span className=' cursor-pointer text-red-500 font-bold' onClick={handleUnsubscribe}>unsubscribe </span>.
        </p> */}
       
      </div>
    
  );
}
