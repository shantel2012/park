import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbar({ onLogout }) {
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
          to="/admin"
          className="font-extrabold text-2xl tracking-wide hover:text-gray-400 transition"
        >
          Admin Panel
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
            to="/admin/users"
            className="hover:text-gray-400 hover:scale-105 transition-transform duration-200"
          >
            Manage Users
          </Link>
          <Link
            to="/admin/owners"
            className="hover:text-gray-400 hover:scale-105 transition-transform duration-200"
          >
            Manage Owners
          </Link>
          <Link
            to="/admin/parking"
            className="hover:text-gray-400 hover:scale-105 transition-transform duration-200"
          >
            Manage Parking
          </Link>
          <Link
            to="/admin/bookings"
            className="hover:text-gray-400 hover:scale-105 transition-transform duration-200"
          >
            Bookings
          </Link>
          <Link
            to="/admin/earnings"
            className="hover:text-gray-400 hover:scale-105 transition-transform duration-200"
          >
            Earnings
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
        <div className="sm:hidden mt-4 bg-gray-800 rounded-lg shadow-lg py-6 px-6 max-w-xs mx-auto space-y-5 font-semibold">
          <Link
            to="/admin/users"
            className="block text-lg hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Manage Users
          </Link>
          <Link
            to="/admin/owners"
            className="block text-lg hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Manage Owners
          </Link>
          <Link
            to="/admin/parking"
            className="block text-lg hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Manage Parking
          </Link>
          <Link
            to="/admin/bookings"
            className="block text-lg hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Bookings
          </Link>
          <Link
            to="/admin/earnings"
            className="block text-lg hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Earnings
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
