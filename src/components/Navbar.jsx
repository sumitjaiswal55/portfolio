import React from 'react';

const Navbar = () => {
  return (
    <header className="absolute  top-0 left-0 w-full z-10 p-8">
      <nav className="flex items-center justify-between mx-auto px-8 py-3">
        {/* Left Side: Logo and Email */}
        <div className="flex items-center gap-4">
          <div className="bg-purple-600 text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-full">
            G {/* Aapka Initial */}
          </div>
          <a href="mailto:mail@gerolddesign.com" className="text-gray-800 font-medium">
            mail@yourdomain.com
          </a>
        </div>

        {/* Center: Navigation Links (for larger screens) */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#services" className="font-medium hover:text-purple-600">Services</a></li>
          <li><a href="#works" className="font-medium hover:text-purple-600">Works</a></li>
          <li><a href="#resume" className="font-medium hover:text-purple-600">Resume</a></li>
          <li><a href="#skills" className="font-medium hover:text-purple-600">Skills</a></li>
          <li><a href="#contact" className="font-medium hover:text-purple-600">Contact</a></li>
        </ul>

        {/* Right Side: Hire Me Button */}
        <div>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
            Hire me!
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;