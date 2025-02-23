'use client';
import { useEffect, useState } from "react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: 'Weekdays'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch('/api/Volunteer')
      .then(response => response.json())
      .then(data => setVolunteers(data))
      .catch(error => console.error('Error fetching volunteers:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/Volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert("Congrats, Now you are a Volunteer");

      // Reset form fields after successful submission
      setVolunteers([...volunteers, result.Volunteer]);
      setFormData({
        name: '',
        email: '',
        phone: '',
        availability: 'Weekdays'
      });
      return { result };

      // Optionally, update the volunteers list with the new volunteer

    } catch (error) {
      console.error('Error adding volunteer:', error);
      alert('Error adding volunteer: ' + error.message);
    }
  };

  return (
    <section id="volunteer" className="py-8 bg-slate-50">
      <div className="container px-4 flex justify-between ">
        <div className=' justify-center w-8/12 '>
          <h1 className=' relative left-[33%] font-bold text-3xl underline'>Available Volunteers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 bg-slate-200 p-8 overflow-y-auto h-3/4">
            {volunteers?.map((volunteer) => (
              <div key={volunteer?._id} className="bg-white shadow-lg rounded-lg p-4 ">
                <h2 className="text-xl font-bold">Name : {volunteer?.name}</h2>
                <p className="text-gray-600">Email : {volunteer?.email}</p>
                <div className="text-gray-600">Phone no.: {volunteer?.phone}</div>
                <div className="text-gray-600">Availability : {volunteer?.availability}</div>
              </div>
            ))}
          </div>
        </div>

        <div className=' mr-6 border-2 border-black px-10 py-4 rounded-xl bg-slate-200  relative left-10'>
          <h2 className="text-3xl font-bold text-center mb-4 underline">Become a Volunteer</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Your Name</label>
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
              <label className="block text-gray-700">Email Address</label>
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
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Availability</label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Both</option>
              </select>
            </div>
            <button type="submit" className="btn-secondary w-full border-2  p-2 rounded-lg bg-blue-400 hover:bg-blue-500 hover:border-black">
              Register as a Volunteer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
