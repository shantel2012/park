import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PrivateNavbar({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-4 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/dashboard"
          className="font-extrabold text-2xl tracking-wide hover:text-gray-300 transition"
        >
          User Dashboard
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
        <div className="hidden sm:flex space-x-8 text-lg items-center font-medium">
          <Link
            to="/dashboard/bookings"
            className="hover:text-gray-300 hover:scale-105 transition-transform duration-200"
          >
            My Bookings
          </Link>
          <Link
            to="/dashboard/profile"
            className="hover:text-gray-300 hover:scale-105 transition-transform duration-200"
          >
            Profile
          </Link>
          <Link
            to="/favorites"
            className="hover:text-gray-300 hover:scale-105 transition-transform duration-200"
          >
            Favorites
          </Link>
          <Link
            to="/search"
            className="hover:text-gray-300 hover:scale-105 transition-transform duration-200"
          >
            Search Parking
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md font-semibold shadow-md transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 bg-gray-800 rounded-lg shadow-lg py-6 px-6 max-w-xs mx-auto space-y-5 font-semibold">
          <Link
            to="/dashboard/bookings"
            className="block text-lg hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            My Bookings
          </Link>
          <Link
            to="/dashboard/profile"
            className="block text-lg hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/favorites"
            className="block text-lg hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Favorites
          </Link>
          <Link
            to="/search"
            className="block text-lg hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Search Parking
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="w-full bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md font-semibold shadow-md transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
