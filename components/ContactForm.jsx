"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert("Thanks! We received your message."); };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow"
    >
      <label className="block mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-300">Name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-300">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-300">Subject</span>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
        />
      </label>

      <label className="block mb-6">
        <span className="text-sm text-gray-600 dark:text-gray-300">Message</span>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2"
        />
      </label>

      <button className="inline-block px-4 py-2 w-full rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:from-accent hover:to-primary transition">
        Send Message
      </button>
    </motion.form>
  );
}
