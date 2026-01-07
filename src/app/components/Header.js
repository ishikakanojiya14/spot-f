"use client";
import React from 'react'

const Header = () => {
  return (
    <div>
    <header className="flex justify-between items-center m-4">
      <div className="flex items-center gap-2">
        <button className="bg-black rounded-full p-1">
          <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button className="bg-black rounded-full p-1">
          <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:scale-105 transition-transform">
          Explore Premium
        </button>
        <button className="bg-black text-white font-semibold py-2 px-4 rounded-full hover:scale-105 transition-transform">
          Install App
        </button>
        <button className="bg-gray-800 rounded-full p-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15h14a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
        </button>
        <button>
          <img 
            src="https://placehold.co/32x32/777777/FFFFFF?text=U" 
            alt="User" 
            className="rounded-full"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/32x32/777777/FFFFFF?text=U'; }}
          />
        </button>
      </div>
    </header>

    </div>
  )
}

export default Header