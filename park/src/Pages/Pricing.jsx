import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$5/day",
      features: ["1 Parking Slot", "Basic Support", "Email Notification"],
      gradientFrom: "from-blue-400",
      gradientTo: "to-blue-500",
    },
    {
      name: "Standard",
      price: "$15/week",
      features: ["5 Parking Slots", "Priority Support", "SMS Alerts"],
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600",
    },
    {
      name: "Premium",
      price: "$50/month",
      features: ["Unlimited Slots", "24/7 Support", "Analytics Dashboard"],
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-700",
    },
  ];

  const handleChoosePlan = (planName) => {
    alert(`You selected the ${planName} plan!`);
    // Here you can add real logic, e.g., navigate, open modal, etc.
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-12">
        Pricing Plans
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-xl p-8 shadow-lg text-white bg-gradient-to-br ${plan.gradientFrom} ${plan.gradientTo} transform hover:scale-105 transition cursor-pointer`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-3 text-white/90">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2">
                  <span>✔</span> {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleChoosePlan(plan.name)}
              className="mt-8 w-full bg-white text-blue-700 font-bold py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
              aria-label={`Choose the ${plan.name} plan`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
