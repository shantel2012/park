import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, ClipboardList, Settings } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <Users size={48} className="text-white drop-shadow-lg" />,
      title: "User Management",
      desc: "Add, remove, and edit users.",
      bg: "bg-gradient-to-br from-blue-600 to-indigo-700",
      route: "/admin/users",
    },
    {
      icon: <ClipboardList size={48} className="text-white drop-shadow-lg" />,
      title: "Parking Listings",
      desc: "Review and manage all parking spots.",
      bg: "bg-gradient-to-br from-indigo-600 to-purple-700",
      route: "/admin/parking-listings",
    },
    {
      icon: <Settings size={48} className="text-white drop-shadow-lg" />,
      title: "Site Settings",
      desc: "Configure system preferences and options.",
      bg: "bg-gradient-to-br from-cyan-500 to-blue-700",
      route: "/admin/settings",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-sky-600 p-12 flex items-center justify-center text-white">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-12 leading-relaxed drop-shadow-md text-white/90">
          Monitor and manage users, parking listings, and system settings. Keep
          your platform running smoothly and efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map(({ icon, title, desc, bg, route }, idx) => (
            <button
              key={idx}
              onClick={() => navigate(route)}
              className={`${bg} rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition duration-300 ease-in-out cursor-pointer flex flex-col items-center text-center focus:outline-none focus:ring-4 focus:ring-blue-400`}
            >
              {icon}
              <h2 className="text-2xl font-semibold mt-6 mb-2">{title}</h2>
              <p className="text-white/90 text-sm">{desc}</p>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
