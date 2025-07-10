import React, { useState } from "react";

const initialUser = {
  name: "Tinomudaishe Kutama",
  email: "tinomudaishe@example.com",
  phone: "+263 77 123 4567",
};

const bookingHistory = [
  {
    id: 1,
    location: "Downtown Garage, Harare",
    date: "2025-07-08",
    status: "Completed",
  },
  {
    id: 2,
    location: "Airport Parking Lot",
    date: "2025-07-01",
    status: "Completed",
  },
];

export default function Profile() {
  const [user, setUser] = useState(initialUser);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(formData);
    setEditMode(false);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-indigo-900 mb-8">
        My Profile
      </h1>

      {!editMode ? (
        <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <div className="space-y-4 text-indigo-800">
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
          </div>
          <button
            onClick={() => setEditMode(true)}
            className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold px-6 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSave}
          className="bg-white shadow-lg rounded-xl p-8 mb-12 space-y-6"
        >
          {["name", "email", "phone"].map((field) => (
            <label key={field} className="block">
              <span className="text-indigo-700 font-semibold capitalize">
                {field}
              </span>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 text-indigo-900 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </label>
          ))}

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold px-6 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setEditMode(false);
                setFormData(user);
              }}
              className="bg-gray-300 hover:bg-gray-400 transition-colors text-gray-700 font-semibold px-6 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <section>
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">
          Booking History
        </h2>

        {bookingHistory.length === 0 ? (
          <p className="text-gray-500">No bookings yet.</p>
        ) : (
          <ul className="space-y-4">
            {bookingHistory.map(({ id, location, date, status }) => (
              <li
                key={id}
                className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-lg transition-shadow"
              >
                <div>
                  <p className="text-indigo-800 font-semibold text-lg">{location}</p>
                  <p className="text-sm text-indigo-600">{new Date(date).toLocaleDateString()}</p>
                </div>
                <span
                  className={`px-4 py-1 rounded-full font-semibold text-sm ${
                    status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
