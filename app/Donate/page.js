'use client';
import { useState } from 'react';

const DonateFood = () => {
  const [formData, setFormData] = useState({
    name: '',
    foodType: 'Fresh Produce',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/Donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert("Thanks For Helping Needy");
      setFormData({
        name: '',
        foodType: 'Fresh Produce',
        address: '',
      });
      return result;
    } catch (error) {
      console.error('Error adding volunteer:', error);
      alert("Thanks For Helping Needy");
      return { success: false, message: error.message };
    }
  };

  return (
    <section id="donate" className="py-8 bg-slate-50">
      <div className="container mx-auto px-4 max-w-2xl border-2 border-black p-4 rounded-xl bg-slate-200 w-2/6">
        <h2 className="text-3xl font-bold text-center mb-8">Donate Food</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 ">Your Name</label>
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
            <label className="block text-gray-700 ">Food Type</label>
            <select
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option>Fresh Produce</option>
              <option>Packaged Goods</option>
              <option>Prepared Meals</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 ">Pickup Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows="1"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-secondary w-full border-2  p-2 rounded-lg bg-blue-400 hover:bg-blue-500 hover:border-black">
            Submit Donation
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonateFood;
