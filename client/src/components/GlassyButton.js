// src/components/GlassyButton.js
import React from 'react';

const colorMap = {
  red: {
    bg: 'bg-red-500/40',
    border: 'border-red-500/50',
    text: 'text-red-600',
    hoverBg: 'hover:bg-red-500/60',
    hoverBorder: 'hover:border-red-500/70',
  },
  blue: {
    bg: 'bg-blue-500/40',
    border: 'border-blue-500/50',
    text: 'text-blue-600',
    hoverBg: 'hover:bg-blue-500/60',
    hoverBorder: 'hover:border-blue-500/70',
  },
  white: {
    bg: 'bg-white/40',
    border: 'border-white/50',
    text: 'text-white',
    hoverBg: 'hover:bg-white/60',
    hoverBorder: 'hover:border-white/70',
  },
  black: {
    bg: 'bg-black/40',
    border: 'border-black/50',
    text: 'text-black/90',
    hoverBg: 'hover:bg-black/60',
    hoverBorder: 'hover:border-black/70',
  },
  green: {
    bg: 'bg-green-500/40',
    border: 'border-green-500/50',
    text: 'text-green-600',
    hoverBg: 'hover:bg-green-500/60',
    hoverBorder: 'hover:border-green-500/70',
  }
};

const GlassyButton = ({ children, color = 'white', className = '', ...props }) => {
  const c = colorMap[color] || colorMap.white;

  return (
    <button
      {...props}
      className={`
        px-4 py-2 rounded-lg font-semibold
        ${c.bg} backdrop-blur-md ${c.border}
        ${c.text} ${c.hoverBg} ${c.hoverBorder}
        transition-all duration-300 shadow-md hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GlassyButton;