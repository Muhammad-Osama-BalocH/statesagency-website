import React from 'react';

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-green-100 to-teal-200 h-screen flex items-start justify-start text-gray-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url('/imes.jpg')`, // Replace with the actual image URL
        }}
      ></div>
      
      {/* Lighter Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-teal-200 opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl text-left px-8 sm:px-12 lg:px-16 py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md text-teal-900">
          Welcome to Status Agency
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700 drop-shadow-sm">
          Building a sustainable and innovative digital future, one solution at a time.
        </p>
        <div className="mt-8 flex space-x-4">
          <a 
            href="#services" 
            className="px-6 py-3 bg-teal-500 text-lg font-medium rounded-lg shadow-md text-white hover:bg-teal-400 transition duration-300"
          >
            Our Services
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-transparent border-2 border-teal-600 text-lg font-medium rounded-lg text-teal-700 hover:bg-teal-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
