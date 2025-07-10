import React from "react";
import { useNavigate } from "react-router-dom";

export default function OwnerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 p-6 sm:p-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-4">
          Welcome, Parking Owner
        </h1>
        <p className="text-indigo-700 text-lg max-w-2xl mx-auto">
          Manage your listings, track earnings, and handle booking requests with ease.
        </p>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Manage Listings */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-indigo-800 mb-2">Manage Listings</h2>
          <p className="text-indigo-600 mb-4">
            Edit, delete or update your current parking spaces.
          </p>
          <button
            onClick={() => navigate("/owner/manage-listings")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Go to Listings
          </button>
        </div>

        {/* Booking Requests */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-indigo-800 mb-2">Booking Requests</h2>
          <p className="text-indigo-600 mb-4">
            View and accept or decline incoming bookings.
          </p>
          <button
            onClick={() => navigate("/owner/requests")}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            View Requests
          </button>
        </div>

        {/* Earnings */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-indigo-800 mb-2">Earnings</h2>
          <p className="text-indigo-600 mb-4">
            Track your income and monitor financial performance.
          </p>
          <button
            onClick={() => navigate("/owner/earnings")}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            View Earnings
          </button>
        </div>
      </section>
    </div>
  );
}
