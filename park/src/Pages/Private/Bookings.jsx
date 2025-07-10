import React from "react";

const bookings = [
  {
    id: 1,
    location: "Downtown Garage, Harare",
    date: "2025-07-08",
    time: "9:00 AM - 5:00 PM",
    status: "Confirmed",
  },
  {
    id: 2,
    location: "Airport Parking Lot",
    date: "2025-07-01",
    time: "6:00 AM - 11:00 AM",
    status: "Completed",
  },
];

export default function Bookings() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-indigo-900 mb-8">My Bookings</h1>

      <div className="bg-white shadow-lg rounded-xl overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-indigo-50">
            <tr>
              {["Location", "Date", "Time", "Status"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.map(({ id, location, date, time, status }) => (
              <tr key={id} className="border-t border-indigo-100 hover:bg-indigo-50 transition-colors">
                <td className="px-6 py-4 text-indigo-800 font-medium">{location}</td>
                <td className="px-6 py-4 text-indigo-700">{new Date(date).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-indigo-700">{time}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      status === "Confirmed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
