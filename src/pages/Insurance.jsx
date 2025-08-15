// src/pages/Insurance.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InsuranceGuidCard from "../components/InsuranceGuidCard";
import SEO from "../components/SEO";

export default function Insurance() {
  const title = "Insurance & Payment | Stay in Motion PT";
  const desc =
    "Cash-based physical therapy services while we complete insurance credentialing. Superbill available for potential reimbursement.";
  const canonical = "https://stayinmotionpt.com/insurance";
  const ogImage = "https://stayinmotionpt.com/og/insurance.jpg";

  return (
    <>
      <SEO title={title} description={desc} canonical={canonical} ogImage={ogImage} />

      <main className="max-w-3xl md:max-w-4xl mx-auto p-4">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-4"
        >
          <h1 className="text-3xl text-primary font-bold">Insurance &amp; Payment</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Temporarily cash-based while credentialing is finalized. Superbill available.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="grid gap-4"
        >
          <InsuranceGuidCard />

          <div className="flex justify-center mt-2">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:from-accent hover:to-primary"
              aria-label="Contact us to schedule"
            >
              Contact Us to Schedule
            </Link>
          </div>

          <small className="block mt-2 text-center text-gray-600 dark:text-gray-400">
            Note: Reimbursement for out‑of‑network services varies by plan. Please check with your
            insurer regarding your out‑of‑network benefits.
          </small>
        </motion.section>
      </main>
    </>
  );
}
