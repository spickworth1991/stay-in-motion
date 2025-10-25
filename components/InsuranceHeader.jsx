"use client";
import { motion } from "framer-motion";

export default function InsuranceHeader() {
  return (
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
  );
}
