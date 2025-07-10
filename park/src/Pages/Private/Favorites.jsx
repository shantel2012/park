import React, { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const handleRemove = (id) => {
    const updated = favorites.filter((spot) => spot.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-indigo-900 mb-8">
        Saved Parking Spots
      </h1>

      {favorites.length === 0 ? (
        <p className="text-indigo-600 text-lg">
          You have no saved parking spots yet.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((spot) => (
            <div
              key={spot.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
            >
              <img
                src={spot.image}
                alt={spot.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-indigo-900">
                  {spot.title}
                </h3>
                <p className="text-indigo-600 mt-1">{spot.location}</p>
                <p className="text-indigo-700 font-bold mt-4 text-lg">
                  ${spot.price}/hr
                </p>

                <button
                  onClick={() => handleRemove(spot.id)}
                  className="mt-auto bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={`Remove ${spot.title} from favorites`}
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
