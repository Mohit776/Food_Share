"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    

    if (res.ok) {
      router.push("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-5/6  bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg my-24 border-black border-2">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
