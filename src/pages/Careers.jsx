// src/pages/Careers.jsx
import { useState } from "react";
import SEO from "../components/SEO";

const positions = [
  {
    title: "Physical Therapist (Full-Time)",
    location: "Columbus, OH",
    description: "Work with orthopedic and sports rehab clients in a hands-on, one-on-one setting.",
  },
  {
    title: "Physical Therapy Assistant (Part-Time)",
    location: "Remote Consult",
    description: "Assist in remote rehab plans and client tracking using telehealth tools.",
  },
  {
    title: "Front Desk Coordinator (Part-Time)",
    location: "Hybrid - Columbus, OH",
    description: "Manage scheduling, patient intake, and customer support with a friendly attitude.",
  },
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", position: "", file: null });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for submitting your application! (Demo only)");
  };

  const title = "Careers | Stay in Motion Physical Therapy";
  const desc = "Join our growing team and help people move better, feel stronger, and live without limits.";
  const canonical = "https://stayinmotionpt.com/careers";
  const ogImage = "https://stayinmotionpt.com/og/careers.jpg";

  return (
    <>
      <SEO title={title} description={desc} canonical={canonical} ogImage={ogImage} />

      {/* Hero */}
      <div
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center text-primary flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('/src/assets/careers-hero.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Join Our Team</h1>
        <p className="text-2xl font-bold md:text-xl mt-3 drop-shadow-md max-w-xl">
          Help us redefine recovery with passion, precision, and purpose.
        </p>
      </div>

      {/* Positions */}
      <div className="min-h-screen bg-cream/10 py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Current Openings</h2>
        <div className="max-w-4xl mx-auto grid gap-6 mb-12">
          {positions.map((pos, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary">{pos.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-600 italic mb-2">{pos.location}</p>
              <p className="text-gray-700 dark:text-gray-300">{pos.description}</p>
            </div>
          ))}
        </div>

        {/* Application form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Submit Your Application</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              required
            />
            <select
              name="position"
              value={form.position}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
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
              className="w-full border rounded px-4 py-2"
              required
            />
            <button
              type="submit"
              className="bg-accent dark:bg-primary text-white dark:text-gray-300 px-6 py-2 rounded hover:bg-opacity-90 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
