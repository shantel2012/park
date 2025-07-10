import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// 🔹 Mock Parking Data
const mockParkingSpots = [
  {
    id: 1,
    title: "Downtown Garage - Secure",
    location: "Harare CBD",
    price: 5,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Airport Long-Term Parking",
    location: "Harare International",
    price: 8,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Private Driveway - Milton Park",
    location: "Milton Park",
    price: 3,
    image: "https://images.unsplash.com/photo-1624732259822-f1e6b8a92d2d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const defaultQuery = params.get("query") || "";

  const [query, setQuery] = useState(defaultQuery);

  const filtered = mockParkingSpots.filter((spot) =>
    `${spot.title} ${spot.location}`.toLowerCase().includes(query.toLowerCase())
  );

  const handleSave = (spot) => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    if (saved.some((s) => s.id === spot.id)) {
      alert("Already saved.");
    } else {
      localStorage.setItem("favorites", JSON.stringify([...saved, spot]));
      alert("Saved!");
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-slate-800 mb-8">Search Parking Spots</h1>

      <input
        type="text"
        placeholder="Search by title or location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 mb-8 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500"
      />

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No parking spots found.</p>
      ) : (
        <div className="grid sm:grid-cols-1 gap-6">
          {filtered.map((spot) => (
            <div key={spot.id} className="bg-white rounded-xl shadow-md flex gap-4 p-4">
              <img
                src={spot.image}
                alt={spot.title}
                className="w-36 h-24 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{spot.title}</h3>
                  <p className="text-gray-500">{spot.location}</p>
                  <p className="text-blue-600 font-bold mt-1">${spot.price}/hr</p>
                </div>
                <button
                  onClick={() => handleSave(spot)}
                  className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  ❤️ Save
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
