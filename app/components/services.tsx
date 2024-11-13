import React from 'react';
import { FaHome, FaBuilding, FaChartLine, FaHandshake } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaHome className="text-green-600 h-12 w-12" />,
      title: "Residential Sales",
      description: "Helping you find the perfect home with personalized real estate guidance and support.",
    },
    {
      icon: <FaBuilding className="text-green-600 h-12 w-12" />,
      title: "Commercial Leasing",
      description: "Providing commercial property solutions for businesses of all sizes, from startups to corporations.",
    },
    {
      icon: <FaChartLine className="text-green-600 h-12 w-12" />,
      title: "Market Analysis",
      description: "In-depth market insights to help you make informed investment decisions in real estate.",
    },
    {
      icon: <FaHandshake className="text-green-600 h-12 w-12" />,
      title: "Property Management",
      description: "Efficient and reliable property management services to maximize your property’s potential.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-8" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          Comprehensive real estate services to meet all your property needs.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-left">
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <button className="mt-4 text-green-600 font-medium hover:text-green-800 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
