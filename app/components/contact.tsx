"use client";
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Specify the type for e as a ChangeEvent for input/textarea elements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Specify the type for e as a FormEvent for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    if (formData.name && formData.email && formData.message) {
      alert("Your message has been sent!");
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-8" id="contact">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Have any questions? We would love to hear from you!
        </p>
        
        <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-100 text-gray-700 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-100 text-gray-700 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-4 bg-gray-100 text-gray-700 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  rows={6}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Our Contact Information</h3>
            <p className="text-lg text-gray-600 mb-4">Feel free to reach us at:</p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">Phone</h4>
              <p className="text-gray-600">+92 300 1234567</p> {/* Pakistani phone number format */}
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">Email</h4>
              <p className="text-gray-600">info@statusagency.com</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">Office Location</h4>
              <p className="text-gray-600">1234 Real Estate Blvd, Suite 567, City, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
