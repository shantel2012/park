import React from "react";

const earningsSummary = {
  monthlyEarnings: 15600,
  totalEarnings: 125000,
  topOwners: [
    { id: 1, name: "Samuel Chikomba", earnings: 3500 },
    { id: 2, name: "Grace Dube", earnings: 2800 },
    { id: 3, name: "Tinomudaishe Kutama", earnings: 2200 },
  ],
};

export default function AdminEarnings() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 px-6 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-extrabold mb-10 text-blue-900 drop-shadow-sm text-center">
          Admin Earnings Overview
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {/* Monthly Earnings Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition cursor-default">
            <p className="text-gray-500 uppercase tracking-wide font-semibold mb-2">
              Monthly Earnings
            </p>
            <p className="text-4xl font-extrabold text-blue-600">
              ${earningsSummary.monthlyEarnings.toLocaleString()}
            </p>
          </div>

          {/* Total Earnings Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition cursor-default">
            <p className="text-gray-500 uppercase tracking-wide font-semibold mb-2">
              Total Earnings
            </p>
            <p className="text-4xl font-extrabold text-blue-600">
              ${earningsSummary.totalEarnings.toLocaleString()}
            </p>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-blue-800 tracking-tight">
            Top Owners by Earnings
          </h2>
          <ul className="space-y-4">
            {earningsSummary.topOwners.map(({ id, name, earnings }) => (
              <li
                key={id}
                className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition"
              >
                <span className="text-blue-900 font-semibold">{name}</span>
                <span className="text-blue-700 font-bold text-lg">
                  ${earnings.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

