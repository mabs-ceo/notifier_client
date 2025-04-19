import React from 'react'

export default function AccessRestricted() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-700 p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Access Restricted to ummahnotify.com</h1>
      <p className="text-lg max-w-md">
        Unfortunately, this application is not available in your region at this time.
      </p>
    </div>
  )
}
