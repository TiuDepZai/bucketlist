// src/components/Navbar.js
import React from 'react';
import GlassyButton from './GlassyButton';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="w-full bg-white/30 backdrop-blur-md border-b border-white/30 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={"/logo192.svg"} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold text-gray-700">Bucket List</span>
        </div>

        {/* Logout button */}
        <GlassyButton color="red" onClick={onLogout}>
          Logout
        </GlassyButton>
      </div>
    </nav>
  );
};

export default Navbar;