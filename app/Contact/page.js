'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic (e.g., API call)
  };

  return (
    <section id="contact" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Have questions or want to get involved? Reach out to us!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">📞</span>
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">📧</span>
                <span>info@foodshare.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">📍</span>
                <span>123 Food Street, City, Country</span>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                rows="2"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
