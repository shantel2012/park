import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const mockData = {
  1: {
    title: "Downtown Garage - Secure",
    location: "Harare CBD",
    description: "24/7 security, indoor garage, easy access to city center.",
    price: 5,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  2: {
    title: "Airport Long-Term Parking",
    location: "Harare International",
    description: "Perfect for travelers, 5 minutes from terminal.",
    price: 8,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
};

export default function ParkingDetails() {
  const { id } = useParams();
  const spot = mockData[id];
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({ ...spot, ...bookingData, id: Date.now() });
    localStorage.setItem("bookings", JSON.stringify(bookings));
    setSuccess(true);
    setBookingData({ date: "", time: "" });
  };

  if (!spot) return <p className="p-10 text-center">Parking spot not found.</p>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={spot.image}
        alt={spot.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />
      <h1 className="text-3xl font-bold text-slate-800">{spot.title}</h1>
      <p className="text-slate-600">{spot.location}</p>
      <p className="mt-4 text-slate-700">{spot.description}</p>
      <p className="mt-4 text-xl text-blue-600 font-bold">${spot.price} / hr</p>

      <form onSubmit={handleBooking} className="mt-8 space-y-4">
        <div>
          <label className="block text-slate-700 font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-slate-700 font-medium mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={bookingData.time}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Book This Spot
        </button>
        {success && <p className="text-green-600 mt-2">Booking successful!</p>}
      </form>
    </main>
  );
}
