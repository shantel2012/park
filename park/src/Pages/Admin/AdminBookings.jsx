import React, { useState } from "react";

const initialBookings = [
  {
    id: 1,
    user: "Tinomudaishe Kutama",
    parkingSpot: "Downtown Garage",
    date: "2025-07-08",
    time: "9 AM - 5 PM",
    status: "Confirmed",
  },
  {
    id: 2,
    user: "Sarah Moyo",
    parkingSpot: "Airport Parking Lot",
    date: "2025-07-10",
    time: "6 AM - 11 AM",
    status: "Pending",
  },
];

export default function AdminBookings() {
  const [bookings, setBookings] = useState(initialBookings);

  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-blue-100 px-6 py-12 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white bg-opacity-90 rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center drop-shadow-md">
          Manage Bookings
        </h1>

        {bookings.length === 0 ? (
          <p className="text-center text-blue-700 text-lg">No bookings found.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full table-auto border-separate border-spacing-y-3">
              <thead className="bg-gradient-to-r from-blue-200 to-purple-200 text-blue-900 uppercase text-sm font-semibold tracking-wide">
                <tr>
                  <th className="px-8 py-4 rounded-tl-xl text-left">User</th>
                  <th className="px-8 py-4 text-left">Parking Spot</th>
                  <th className="px-8 py-4 text-left">Date</th>
                  <th className="px-8 py-4 text-left">Time</th>
                  <th className="px-8 py-4 text-left">Status</th>
                  <th className="px-8 py-4 text-center rounded-tr-xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(({ id, user, parkingSpot, date, time, status }) => (
                  <tr
                    key={id}
                    className="bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition cursor-default"
                  >
                    <td className="px-8 py-5 font-semibold text-blue-800">{user}</td>
                    <td className="px-8 py-5 text-blue-700">{parkingSpot}</td>
                    <td className="px-8 py-5 text-blue-700">{date}</td>
                    <td className="px-8 py-5 text-blue-700">{time}</td>
                    <td className="px-8 py-5">
                      <span
                        className={`inline-block px-4 py-1 rounded-full font-semibold text-sm ${
                          status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-center space-x-3">
                      {status !== "Confirmed" && (
                        <button
                          onClick={() => updateStatus(id, "Confirmed")}
                          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition"
                        >
                          Confirm
                        </button>
                      )}
                      {status !== "Rejected" && (
                        <button
                          onClick={() => updateStatus(id, "Rejected")}
                          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition"
                        >
                          Reject
                        </button>
                      )}
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
