import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OwnerNavbar({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Reset user role
    navigate("/"); // Redirect to home page
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white px-6 py-4 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/dashboard"
          className="font-extrabold text-2xl tracking-wide hover:text-blue-300 transition"
        >
          Owner Dashboard
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none text-3xl select-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-8 items-center text-lg font-medium">
          <Link
            to="/dashboard/add-parking"
            className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
          >
            Add Parking
          </Link>
          <Link
            to="/dashboard/requests"
            className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
          >
            Booking Requests
          </Link>
          <Link
            to="/dashboard/earnings"
            className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
          >
            Earnings
          </Link>
          <Link
            to="/dashboard/manage-listings"
            className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
          >
            Manage Listings
          </Link>
          <Link
            to="/dashboard/profile"
            className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-700 hover:bg-red-800 px-5 py-2 rounded-md font-semibold shadow-md transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 bg-blue-800 rounded-lg shadow-lg py-6 px-6 max-w-xs mx-auto space-y-5 font-semibold">
          <Link
            to="/dashboard/add-parking"
            className="block text-lg hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Add Parking
          </Link>
          <Link
            to="/dashboard/requests"
            className="block text-lg hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Booking Requests
          </Link>
          <Link
            to="/dashboard/earnings"
            className="block text-lg hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Earnings
          </Link>
          <Link
            to="/dashboard/manage-listings"
            className="block text-lg hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Manage Listings
          </Link>
          <Link
            to="/dashboard/profile"
            className="block text-lg hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="w-full bg-red-700 hover:bg-red-800 px-5 py-2 rounded-md font-semibold shadow-md transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
