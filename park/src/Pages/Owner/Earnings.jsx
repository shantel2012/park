import React from "react";

export default function Earnings() {
  const total = 480.5;
  const transactions = [
    { id: 1, date: "2025-07-05", amount: 120 },
    { id: 2, date: "2025-07-06", amount: 150 },
    { id: 3, date: "2025-07-07", amount: 210.5 },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Earnings</h2>
      <div className="p-4 bg-green-100 rounded mb-6">
        <p className="text-lg">Total Earnings:</p>
        <p className="text-3xl font-bold text-green-700">${total.toFixed(2)}</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">Recent Transactions</h3>
      <ul className="space-y-3">
        {transactions.map((t) => (
          <li key={t.id} className="flex justify-between border-b pb-2">
            <span>{t.date}</span>
            <span className="text-green-700 font-semibold">${t.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
