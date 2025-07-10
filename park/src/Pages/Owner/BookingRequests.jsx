import React from "react";

export default function BookingRequests() {
  const requests = [
    { id: 1, user: "Alice", date: "2025-07-10", status: "Pending" },
    { id: 2, user: "Bob", date: "2025-07-12", status: "Approved" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 mb-8 text-center">
          📩 Booking Requests
        </h2>

        {requests.length === 0 ? (
          <p className="text-gray-600 text-center">No booking requests available.</p>
        ) : (
          <div className="space-y-6">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-purple-700">
                    Request from {req.user}
                  </h3>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      req.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
                <p className="text-gray-600">
                  <strong>Date:</strong> {req.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
