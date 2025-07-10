import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddParking() {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ location, price, description });
    alert("✅ Parking spot submitted successfully!");
    setLocation("");
    setPrice("");
    setDescription("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-white px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-indigo-800">🚗 Add New Parking Spot</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-6 space-y-5"
        >
          <input
            type="text"
            placeholder="Location"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price per hour (USD)"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="w-full border border-gray-300 rounded px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold transition"
          >
            Submit Parking Spot
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => navigate("/dashboard/requests")}
            className="cursor-pointer bg-gradient-to-r from-indigo-100 to-indigo-200 hover:from-indigo-200 hover:to-indigo-300 shadow-md p-6 rounded-lg transition"
          >
            <h3 className="text-lg font-semibold text-indigo-800">📬 Booking Requests</h3>
            <p className="text-sm text-indigo-700">View all incoming booking requests</p>
          </div>

          <div
            onClick={() => navigate("/dashboard/earnings")}
            className="cursor-pointer bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 shadow-md p-6 rounded-lg transition"
          >
            <h3 className="text-lg font-semibold text-green-800">💰 Earnings</h3>
            <p className="text-sm text-green-700">Check your total and recent earnings</p>
          </div>
        </div>
      </div>
    </main>
  );
}
