import React from 'react';
import { FaBed, FaBath, FaHome } from 'react-icons/fa';

function Listings() {
  const listings = [
    {
      image: '/images.jpg', // Replace with actual image URLs
      title: "Modern Family Home",
      price: "$450,000",
      location: "Los Angeles, CA",
      bedrooms: 4,
      bathrooms: 3,
      area: "2500 sqft",
    },
    {
      image: '/LuxuryCondo.jpg',
      title: "Luxury Condo",
      price: "$850,000",
      location: "New York, NY",
      bedrooms: 2,
      bathrooms: 2,
      area: "1500 sqft",
    },
    {
      image: '/CountryHouse.jpg',
      title: "Spacious Country House",
      price: "$1,200,000",
      location: "Austin, TX",
      bedrooms: 5,
      bathrooms: 4,
      area: "4000 sqft",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-8" id="listings">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Featured Listings</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover our latest properties available for sale.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src={listing.image} 
                alt={listing.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-700">{listing.title}</h3>
                <p className="text-xl font-bold text-green-600 mt-2">{listing.price}</p>
                <p className="text-gray-600 mt-1">{listing.location}</p>
                
                <div className="flex items-center text-gray-500 text-sm mt-4">
                  <FaBed className="mr-2" /> {listing.bedrooms} Beds
                  <FaBath className="ml-4 mr-2" /> {listing.bathrooms} Baths
                  <FaHome className="ml-4 mr-2" /> {listing.area}
                </div>
                
                <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Listings;
