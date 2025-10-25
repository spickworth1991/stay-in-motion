"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import InsuranceGuidCard from "@/components/InsuranceGuidCard";

export default function InsuranceContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 }}
      className="grid gap-4"
    >
      <InsuranceGuidCard />

      <div className="flex justify-center mt-2">
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:from-accent hover:to-primary"
          aria-label="Contact us to schedule"
        >
          Contact Us to Schedule
        </Link>
      </div>

      <small className="block mt-2 text-center text-gray-600 dark:text-gray-400">
        Note: Reimbursement for out-of-network services varies by plan. Please check with your
        insurer regarding your out-of-network benefits.
      </small>
    </motion.section>
  );
}
