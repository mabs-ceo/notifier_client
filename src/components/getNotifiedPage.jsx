import React from 'react';
import { BellRing } from 'lucide-react';

export default function GetNotifiedInfoPage({ handleSubscribe, handleUnsubscribe }) {
  return (
    <div className="max-w-xl mx-auto bg-green-100 shadow-xl rounded-3xl p-8 text-center space-y-6">
      
      {/* Icon */}
      <div className="flex justify-center text-blue-600">
        <BellRing className="h-14 w-14" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
        Get Instant Janazah Notifications
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl">
        Stay updated on upcoming Janazah (funeral) prayers. Simply subscribe to receive
        real-time push notifications directly on your device.
      </p>

      {/* Instructions Box */}
      <div className="text-left bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
        <h2 className="font-semibold text-blue-700 text-lg sm:text-xl md:text-2xl mb-2">How it works:</h2>
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-800 space-y-1">
          <li>Click the <strong>Subscribe</strong> button below.</li>
          <li>Allow notifications when prompted by your browser.</li>
          <li>That’s it! You’ll be notified when Janazah prayers are announced.</li>
        </ul>
      </div>

      {/* Subscribe Form */}
      <div className="flex flex-col gap-4">
        <button
          className="bg-green-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-md hover:bg-green-700 transition duration-300"
          onClick={handleSubscribe}
        >
          Get Notified
        </button>

        {/* <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter your email..."
            className="flex-1 py-2.5 px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            className="bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div> */}
      </div>

      {/* Footer Note */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 pt-4">
        You can unsubscribe anytime from your browser settings or click 
        <span 
          className="text-red-500 font-semibold cursor-pointer ml-1 hover:underline"
          onClick={handleUnsubscribe}
        >
          unsubscribe
        </span>.
      </p>
    </div>
  );
}
