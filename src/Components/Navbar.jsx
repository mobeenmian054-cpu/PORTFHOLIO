import React, { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="h-16 flex items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        
        {/* Logo */}
        <p className="font-extrabold text-yellow-400 flex-shrink-0 text-lg md:text-xl">
          Mobeen Shahid
        </p>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-10 flex-1 text-white">
          <a href="#Hero" className="hover:text-yellow-300">Hero</a>
          <a href="#Skills" className="hover:text-yellow-300">Skills</a>
          <a href="#Education" className="hover:text-yellow-300">Education</a>
          <a href="#Project" className="hover:text-yellow-300">Project</a>
          <a href="#Contact" className="hover:text-yellow-300">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden bg-gray-900 overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col px-4 gap-4">
          <a href="#Hero" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Hero</a>
          <a href="#Skills" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Skills</a>
          <a href="#Education" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Education</a>
          <a href="#Project" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Project</a>
          <a href="#Contact" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};
