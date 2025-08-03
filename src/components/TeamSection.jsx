import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

const therapists = [
  {
    name: "Sarah Johnson, PT, DPT",
    photo: "/photos/sarah.jpg",
    specialties: ["Orthopedics", "Manual Therapy", "Dry Needling"],
    linkedin: "https://linkedin.com/in/sarahjohnson",
    credentials:
      "Doctor of Physical Therapy (DPT) from XYZ University. Certified in Orthopedic Manual Therapy."
  },
  {
    name: "Michael Lee, PT",
    photo: "/photos/michael.jpg",
    specialties: ["Sports Rehab", "Strength Training"],
    linkedin: "https://linkedin.com/in/michaellee",
    credentials:
      "B.S. in Physical Therapy. Former collegiate athlete with 10+ years of experience."
  },
  // add more...
];

export default function TeamSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-cream/50">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {therapists.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-gray-600 mb-2">
                {t.specialties.join(", ")}
              </p>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-accent hover:underline"
              >
                <FaLinkedinIn className="mr-2" /> LinkedIn
              </a>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white/90 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center">
              <h4 className="text-lg font-semibold mb-2">Credentials</h4>
              <p className="text-gray-700">{t.credentials}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
