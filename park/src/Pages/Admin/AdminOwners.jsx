import React, { useState } from "react";

const initialOwners = [
  { id: 1, name: "Samuel Chikomba", email: "samuel@example.com", parkingCount: 4 },
  { id: 2, name: "Grace Dube", email: "grace@example.com", parkingCount: 2 },
];

export default function AdminOwners() {
  const [owners, setOwners] = useState(initialOwners);

  const removeOwner = (id) => {
    if (window.confirm("Are you sure you want to remove this owner?")) {
      setOwners((prev) => prev.filter((o) => o.id !== id));
    }
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 px-6 py-12
    // flex flex-col justify-center items-center"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-10 flex items-center gap-3">
          <span>👥</span> Manage Owners
        </h1>

        {owners.length === 0 ? (
          <p className="text-center text-blue-700 text-lg">No owners found.</p>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
            <table className="min-w-full table-auto border-separate border-spacing-y-3">
              <thead>
                <tr className="bg-gradient-to-r from-blue-300 to-blue-400 text-blue-900 uppercase text-sm font-semibold tracking-wide">
                  <th className="px-8 py-4 text-left rounded-tl-xl">Name</th>
                  <th className="px-8 py-4 text-left">Email</th>
                  <th className="px-8 py-4 text-center">Parking Spots</th>
                  <th className="px-8 py-4 text-center rounded-tr-xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {owners.map(({ id, name, email, parkingCount }) => (
                  <tr
                    key={id}
                    className="bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition cursor-default"
                  >
                    <td className="px-8 py-5 font-medium text-blue-800">{name}</td>
                    <td className="px-8 py-5 text-blue-700">{email}</td>
                    <td className="px-8 py-5 text-center text-blue-700 font-semibold">{parkingCount}</td>
                    <td className="px-8 py-5 text-center">
                      <button
                        onClick={() => removeOwner(id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition"
                        aria-label={`Remove owner ${name}`}
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
