"use client";

import { useState } from "react";

export default function CareersForm({ positions }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm((f) => ({ ...f, file: files?.[0] || null }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit — integrate your email service / form backend here
    alert(
      `Thanks, ${form.name}! We received your application for "${form.position}".${
        form.file ? ` File: ${form.file.name}` : ""
      }`
    );
    // Optionally reset:
    // setForm({ name: "", email: "", position: "", file: null });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded px-4 py-2 bg-transparent"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded px-4 py-2 bg-transparent"
        required
      />
      <select
        name="position"
        value={form.position}
        onChange={handleChange}
        className="w-full border rounded px-4 py-2 bg-transparent"
        required
      >
        <option value="">Select Position</option>
        {positions.map((pos, i) => (
          <option key={i} value={pos.title}>
            {pos.title}
          </option>
        ))}
      </select>
      <input
        type="file"
        name="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className="w-full border rounded px-4 py-2 bg-transparent"
        required
      />
      <button
        type="submit"
        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:from-accent hover:to-primary transition"
      >
        Submit Application
      </button>
    </form>
  );
}
