// src/components/InsuranceGuidCard.jsx
import React from "react";

export default function InsuranceGuidCard() {
  return (
    <section
      className="insurance-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md"
      style={styles.card} // keep spacing/shape from your original layout
    >
      <h2 className="text-2xl font-semibold mb-3">Insurance &amp; Payment Information</h2>

      <p className="mb-3">
        We are currently in the process of becoming credentialed with insurance providers to be an
        in-network physical therapy clinic. While this process is underway, <strong>Stay in Motion
        Physical Therapy</strong> is pleased to offer cash-based services including physical therapy,
        recovery sessions, and dry needling.
      </p>

      <p className="mb-3">
        For patients with commercial insurance, we can provide a <strong>superbill</strong> for you to
        submit to your insurance company for potential reimbursement.
      </p>

      <div className="bg-gray-100 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mt-3">
        <h3 className="text-lg font-medium mb-2">Rates</h3>
        <ul className="divide-y divide-gray-200 dark:divide-white/20">
          <li className="flex justify-between items-baseline gap-4 py-2">
            <span>Physical Therapy Evaluation</span>
            <strong className="whitespace-nowrap">$140</strong>
          </li>
          <li className="flex justify-between items-baseline gap-4 py-2">
            <span>Physical Therapy Treatment</span>
            <strong className="whitespace-nowrap">$120</strong>
          </li>
          <li className="flex justify-between items-baseline gap-4 py-2">
            <span>30‑Minute Dry Needling or Recovery Session</span>
            <strong className="whitespace-nowrap">$75</strong>
          </li>
        </ul>
      </div>

      <p className="mt-4">
        Your movement and recovery shouldn’t wait — let’s get started today!
      </p>
    </section>
  );
}

// Keep only the layout bits you liked (radius & padding). Colors now come from classes.
const styles = {
  card: {
    borderRadius: 16,
    padding: "24px 24px",
  },
};
