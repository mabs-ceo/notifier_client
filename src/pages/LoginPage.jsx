import React from 'react';

export default function LoginPage() {

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google'; 
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-green-100 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Welcome to Ummatti
        </h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition text-lg"
        >
          Sign in with Google
        </button>
      </div>
    </main>
  );
}
