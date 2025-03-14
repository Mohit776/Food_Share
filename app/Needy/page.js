"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function FoodAssistanceForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    people: "",
    requirements: "",
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


  };
  const [donates, setDonates] = useState([]);
  const [loading, setLoading] = useState(false);

  


  useEffect(() => {
    fetch('/api/Donate')
      .then(response => response.json())
      .then(data => setDonates(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section id="needy" className="py-8 bg-white">

      <div className=' justify-center w-8/12  h-[60%] '>
        <h1 className='font-bold text-3xl underline relative left-[28%]'>Available Food Points</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 w-fit ml-8 bg-slate-100 m-4 h-3/4 overflow-y-auto rounded-lg">

          { donates.map((Donate) => (
            <div key={Donate._id} className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold" >Name : {Donate.name}</h2>
              <p className="text-gray-600" >Food Type: {Donate.foodType}</p>
              <div className="text-gray-600" >Address: {Donate.address}</div>

            </div>
          ))}
        </div>

      </div>

      <div className="container  px-4 border-black border-2 rounded-lg w-[30%] left-[65%] relative bg-slate-200 p-6  -top-80">
        <h2 className="text-3xl font-bold text-center mb-8">Get Food Assistance</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 ">Your Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700 ">Delivery Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} className="w-full p-3 border rounded-lg" rows="1" required></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Number of People</label>
            <input type="number" name="people" value={formData.people} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700 ">Special Requirements</label>
            <textarea name="requirements" value={formData.requirements} onChange={handleChange} className="w-full p-3 border rounded-lg" rows="1" placeholder="e.g., dietary restrictions, allergies"></textarea>
          </div>
          <button type="submit" className="w-full border-2  p-2 rounded-lg bg-blue-400 hover:bg-blue-500 hover:border-black">
            Register for Food Assistance
          </button>
        </form>
      </div>
    </section>
  );
}
