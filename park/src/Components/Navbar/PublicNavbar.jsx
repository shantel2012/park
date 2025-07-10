import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="font-extrabold text-2xl tracking-wide hover:drop-shadow-lg transition"
        >
          ParkingSpaceFinder
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
        <div className="hidden sm:flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:underline hover:scale-110 transition-transform duration-200"
          >
            Home
          </Link>
          <Link
            to="/how-it-works"
            className="hover:underline hover:scale-110 transition-transform duration-200"
          >
            How It Works
          </Link>
          <Link
            to="/pricing"
            className="hover:underline hover:scale-110 transition-transform duration-200"
          >
            Pricing
          </Link>
          <Link
            to="/login"
            className="font-semibold px-4 py-1 rounded-md bg-white text-blue-700 hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="font-semibold px-4 py-1 rounded-md bg-white text-blue-700 hover:bg-gray-100 transition"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="sm:hidden mt-4 bg-white text-blue-700 rounded-lg shadow-lg py-4 px-6 space-y-4 max-w-xs mx-auto">
          <Link
            to="/"
            className="block text-lg font-semibold hover:text-blue-900 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/how-it-works"
            className="block text-lg font-semibold hover:text-blue-900 transition"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link
            to="/pricing"
            className="block text-lg font-semibold hover:text-blue-900 transition"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/login"
            className="block font-bold bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block font-bold bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
