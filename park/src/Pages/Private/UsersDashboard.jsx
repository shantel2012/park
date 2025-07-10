import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-10">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-2">
          Welcome back, User!
        </h1>
        <p className="text-indigo-700 text-lg max-w-xl">
          Manage your bookings, saved parking spots, and update your profile all in one place.
        </p>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Bookings Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Your Bookings</h2>
          <p className="text-indigo-600">
            View and manage your upcoming and past parking bookings.
          </p>
          <button
            onClick={() => navigate("/dashboard/bookings")}
            className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Go to Bookings
          </button>
        </div>

        {/* Favorites Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Saved Spots</h2>
          <p className="text-indigo-600">
            Quickly access your favorite parking spots.
          </p>
          <button
            onClick={() => navigate("/favorites")}
            className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            View Favorites
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Profile Info</h2>
          <p className="text-indigo-600">
            Update your personal details and payment information.
          </p>
          <button
            onClick={() => navigate("/dashboard/profile")}
            className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Edit Profile
          </button>
        </div>
      </section>
    </div>
  );
}
