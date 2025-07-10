import React, { useState } from "react";

const initialUsers = [
  { id: 1, name: "Tinomudaishe Kutama", role: "User", email: "tinomudaishe@example.com" },
  { id: 2, name: "Samuel Chikomba", role: "Owner", email: "samuel@example.com" },
  { id: 3, name: "Admin Account", role: "Admin", email: "admin@example.com" },
];

export default function AdminUsers() {
  const [users, setUsers] = useState(initialUsers);

  const changeRole = (id, newRole) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 px-6 py-12
    flex flex-col justify-center items-center"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-8">
          🧑‍💼 User Management
        </h1>

        {users.length === 0 ? (
          <p className="text-center text-slate-500 text-lg">No users found.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-gradient-to-r from-indigo-100 to-indigo-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-indigo-800">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-indigo-800">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-indigo-800">Role</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-indigo-800">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(({ id, name, email, role }) => (
                  <tr
                    key={id}
                    className="border-t hover:bg-indigo-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-slate-700">{name}</td>
                    <td className="px-6 py-4 text-slate-600">{email}</td>
                    <td className="px-6 py-4 text-slate-600">{role}</td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <select
                        value={role}
                        onChange={(e) => changeRole(id, e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      >
                        <option value="User">User</option>
                        <option value="Owner">Owner</option>
                        <option value="Admin">Admin</option>
                      </select>
                      <button
                        onClick={() => deleteUser(id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
