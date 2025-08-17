"use client";
import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="text-center mb-8"
    >
      <h1 className="text-3xl text-primary md:text-4xl font-bold">About Stay in Motion</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Personalized physical therapy rooted in advanced methods, athletic insight, and a
        mission to keep you moving for life.
      </p>
    </motion.header>
  );
}
