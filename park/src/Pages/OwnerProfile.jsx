import React, { useEffect, useState } from "react";

export default function ManageListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const added = JSON.parse(localStorage.getItem("ownerListings")) || [];
    setListings(added);
  }, []);

  const handleDelete = (id) => {
    const updated = listings.filter((l) => l.id !== id);
    setListings(updated);
    localStorage.setItem("ownerListings", JSON.stringify(updated));
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">My Parking Listings</h1>
      {listings.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {listings.map((l) => (
            <div key={l.id} className="bg-white shadow p-4 rounded-lg">
              <img
                src={l.image || "https://via.placeholder.com/400x200"}
                alt={l.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-lg font-bold mt-2">{l.title}</h2>
              <p className="text-slate-600">{l.address}</p>
              <p className="text-blue-600 font-bold">${l.price}/hr</p>
              <button
                onClick={() => handleDelete(l.id)}
                className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
