import React, { useState } from "react";

const initialParkingSpots = [
  {
    id: 1,
    title: "Downtown Garage",
    owner: "Samuel Chikomba",
    price: 5,
    availability: "8 AM - 8 PM",
  },
  {
    id: 2,
    title: "Airport Parking Lot",
    owner: "Grace Dube",
    price: 7,
    availability: "24/7",
  },
];

export default function AdminParking() {
  const [spots, setSpots] = useState(initialParkingSpots);

  const removeSpot = (id) => {
    if (window.confirm("Are you sure you want to remove this parking spot?")) {
      setSpots((prev) => prev.filter((spot) => spot.id !== id));
    }
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 px-6 py-12
    flex flex-col justify-center items-center"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-10 flex items-center gap-3">
          🅿️ Manage Parking Spots
        </h1>

        {spots.length === 0 ? (
          <p className="text-center text-blue-700 text-lg">No parking spots found.</p>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
            <table className="min-w-full table-auto border-separate border-spacing-y-3">
              <thead>
                <tr className="bg-gradient-to-r from-blue-300 to-blue-400 text-blue-900 uppercase text-sm font-semibold tracking-wide">
                  <th className="px-8 py-4 text-left rounded-tl-xl">Title</th>
                  <th className="px-8 py-4 text-left">Owner</th>
                  <th className="px-8 py-4 text-left">Price (USD)</th>
                  <th className="px-8 py-4 text-left">Availability</th>
                  <th className="px-8 py-4 text-center rounded-tr-xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {spots.map(({ id, title, owner, price, availability }) => (
                  <tr
                    key={id}
                    className="bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition cursor-default"
                  >
                    <td className="px-8 py-5 font-medium text-blue-800">{title}</td>
                    <td className="px-8 py-5 text-blue-700">{owner}</td>
                    <td className="px-8 py-5 text-blue-700 font-semibold">${price}</td>
                    <td className="px-8 py-5 text-blue-700">{availability}</td>
                    <td className="px-8 py-5 text-center flex justify-center items-end">
                      <button
                        onClick={() => removeSpot(id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition"
                        aria-label={`Remove parking spot ${title}`}
                      >
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
