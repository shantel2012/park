import React, { useState } from "react";

export default function BecomeHost() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    pricePerHour: "",
    description: "",
    contactEmail: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd normally send data to backend API
    setSubmitted(true);
  };

  return (
    <main className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl shadow-lg mt-12">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
        Become a Host
      </h1>

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded text-center">
          <p className="text-xl font-semibold">Thank you for becoming a host!</p>
          <p>We will review your listing and get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-blue-900 font-semibold mb-2">
              Parking Spot Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="e.g. Secure Downtown Garage"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-blue-900 font-semibold mb-2">
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="e.g. Harare CBD"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label htmlFor="pricePerHour" className="block text-blue-900 font-semibold mb-2">
              Price Per Hour ($)
            </label>
            <input
              id="pricePerHour"
              name="pricePerHour"
              type="number"
              min="0"
              step="0.01"
              placeholder="e.g. 5"
              value={formData.pricePerHour}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-blue-900 font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your parking spot, amenities, security, etc."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-3 rounded-lg border border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition resize-none"
            />
          </div>

          <div>
            <label htmlFor="contactEmail" className="block text-blue-900 font-semibold mb-2">
              Contact Email
            </label>
            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              placeholder="your-email@example.com"
              value={formData.contactEmail}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition"
          >
            Submit Listing
          </button>
        </form>
      )}
    </main>
  );
}
