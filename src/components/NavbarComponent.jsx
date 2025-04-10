import React from 'react';
import { Link, Outlet } from 'react-router';

export default function NavbarComponent() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-green-600 text-white shadow-md">
        <Link to="/" className="text-xl font-bold tracking-wide">
         URS
        </Link>
        <nav className="space-x-6 text-base font-medium">
          <Link to="/" className="hover:text-green-200 transition">
            Home
          </Link>
         
          <Link to="/notification" className="hover:text-green-200 transition">
            Notification
          </Link>
        </nav>
      </header>

      <Outlet />

      <footer
            id="footer"
            className="bg-green-500 h-[60px] flex items-center justify-center text-white text-sm"
          >
            © 2025 — Created by MABS
          </footer>
    </>
  );
}
