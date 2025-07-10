import React from "react";
import { useNavigate } from "react-router-dom";
import never from "../assets/never.jpeg";
import ethan from "../assets/ethan.jpeg";
import white from "../assets/white.jpeg";
import will from "../assets/will.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section with blue gradient background */}
      <section
        className="py-20 px-4"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6 text-white">
            <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
              Find & Book Parking Spaces{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #93c5fd 0%, #60a5fa 100%)",
                }}
              >
                Anywhere
              </span>
            </h1>
            <p className="text-lg opacity-90">
              Whether it's daily, weekly, or monthly — discover affordable and
              secure parking spots near you.
            </p>
            <button
              onClick={() => navigate("/search")}
              className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
            >
              Search Parking
            </button>
          </div>
          <div className="md:w-1/2">
            {/* Optional hero image or illustration */}
          </div>
        </div>
      </section>

      {/* Why Choose Us with gradient cards */}
      <section className="py-16 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Us</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            We make parking smarter, easier, and more affordable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🕒",
              title: "Save Time",
              desc: "No circling blocks. Book your spot before you arrive.",
              gradientFrom: "from-blue-400",
              gradientTo: "to-cyan-400",
            },
            {
              icon: "💰",
              title: "Affordable",
              desc: "Up to 50% cheaper than street or garage parking.",
              gradientFrom: "from-blue-300",
              gradientTo: "to-blue-500",
            },
            {
              icon: "🔒",
              title: "Safe & Verified",
              desc: "All parking spaces are verified for safety and security.",
              gradientFrom: "from-green-400",
              gradientTo: "to-teal-400",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} text-white text-center transform hover:scale-105 transition`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parking Categories with gradient overlay hover */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Popular Parking Categories
          </h2>
          <p className="text-slate-600">Find parking for every occasion.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Airport Parking", img: never },
            { name: "City Center", img: ethan },
            { name: "Events & Stadiums", img: white },
            { name: "Monthly Spots", img: will },
          ].map((cat, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={() =>
                navigate(`/categories/${cat.name.toLowerCase().replace(/ & | /g, "-")}`)
              }
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-white text-xl font-semibold drop-shadow-lg">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer with smooth blue gradient */}
      <section
        className="py-20 px-4 text-white text-center"
        style={{
          background:
            "linear-gradient(90deg, #2563eb 0%, #3b82f6 50%, #93c5fd 100%)",
        }}
      >
        <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
          Start Earning from Your Empty Space
        </h2>
        <p className="mb-8 max-w-lg mx-auto drop-shadow-md">
          List your driveway or parking lot today — it's fast, easy, and free.
        </p>
        <button
          onClick={() => navigate("/become-host")}
          className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition"
        >
          Become a Host
        </button>
      </section>
    </div>
  );
}
