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
  {
    name: "You could be here",
    photo: "/photos/new_employee.jpg",
    specialties: ["Your Specialties."],
    linkedin: "/careers", 
    credentials: "We're always looking for passionate therapists to join our team. Let's connect!"
  }

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
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer 
        ${therapist.name === "You could be here" ? "ring-2 ring-accent animate-pulse" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      {!expanded && (
        <div className="absolute bottom-2 right-2 bg-white/90 text-xs px-2 py-1 rounded shadow text-gray-700">
          Click to Learn More
        </div>
      )}

      <img
        src={therapist.photo}
        alt={therapist.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl dark:text-gray-500 font-semibold">{therapist.name}</h3>
        <p className="text-gray-600 dark:text-gray-200 mb-2">
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
        {therapist.name === "You could be here" ? (
          <a
            href={therapist.linkedin}
            className="inline-flex items-center text-accent hover:underline"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx={8.5} cy={7} r={4} />
              <path d="M20 8v6M23 11h-6" />
            </svg>
            Submit Resume
          </a>
        ) : (
          <a
            href={therapist.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-accent hover:underline"
          >
            <FaLinkedinIn className="mr-2" />
            View LinkedIn
          </a>
        )}

      </div>
    </motion.div>
  )
}
