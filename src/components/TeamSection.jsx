// src/components/TeamSection.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn } from 'react-icons/fa'

const therapists = [
  {
    name: "Amanda Pickworth-Chrusciel, PT, DPT",
    photo: "/photos/amanda.jpg",
    specialties: ["Orthopedics", "Manual Therapy", "Dry Needling"],
    linkedin: "https://www.linkedin.com/in/amanda-pickworth-chrusciel",
    credentials: "Doctor of Physical Therapy (DPT) from University of Findlay. Certified in Orthopedic Manual Therapy."
  },
  // …more therapists
]

export default function TeamSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-cream/20">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {therapists.map((t, i) => (
          <TeamCard key={t.name} therapist={t} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
function TeamCard({ therapist, delay }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <img
        src={therapist.photo}
        alt={therapist.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{therapist.name}</h3>
        <p className="text-gray-600 mb-2">
          {therapist.specialties.join(", ")}
        </p>
      </div>

      {/* Click-to-expand overlay */}
      <div
        className={`absolute inset-0 bg-white/95 p-6 flex flex-col justify-center transition-opacity duration-300 ${
          expanded
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <h4 className="text-lg font-semibold mb-2">Credentials</h4>
        <p className="text-gray-700 mb-4">{therapist.credentials}</p>
        <a
          href={therapist.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-accent hover:underline"
        >
          <FaLinkedinIn className="mr-2" />
          View LinkedIn
        </a>
      </div>
    </motion.div>
  )
}
