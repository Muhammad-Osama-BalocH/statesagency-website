"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-teal-700 to-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">Status Real Estate</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            {['Home', 'Services', 'Listings', 'About Us', 'Contact'].map((item) => (
              <Link href={`#${item.replace(/\s+/g, '').toLowerCase()}`} key={item} className="hover:text-yellow-400 transition ease-in-out duration-300">
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-800 text-white font-medium space-y-2 py-4">
          {['Home', 'Services', 'Listings', 'About Us', 'Contact'].map((item) => (
            <Link href={`#${item.replace(/\s+/g, '').toLowerCase()}`} key={item} className="block px-4 py-2 hover:bg-green-700 transition ease-in-out duration-300" onClick={toggleMenu}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
