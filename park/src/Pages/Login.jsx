import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call onLogin callback with the selected role
    onLogin(role);

    // Redirect based on role
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "owner") {
      navigate("/owner/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <main className="max-w-md mx-auto mt-16 p-8 bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <label htmlFor="role" className="block text-blue-900 font-semibold text-lg mb-2">
          Select Role
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 rounded-lg border border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
        >
          <option value="user">User</option>
          <option value="owner">Owner</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition"
          aria-label={`Login as ${role}`}
        >
          Login
        </button>
      </form>
    </main>
  );
}
