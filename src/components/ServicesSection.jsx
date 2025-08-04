// src/components/ServicesSection.jsx
import { motion } from "framer-motion"
import ServiceCard from "./ServiceCard"
import { FaHands, FaHeartbeat, FaDumbbell, FaRegLightbulb } from "react-icons/fa"

const services = [
  {
    icon: FaHands,
    title: "Manual Therapy",
    description:
      "Our therapists use proven manual techniques—joint mobilization, soft-tissue release, myofascial stretches—to relieve pain and improve function."
  },
  {
    icon: FaHeartbeat,
    title: "Dry Needling",
    description:
      "Fine-gauge needles penetrate tense muscle bands to reduce pain, improve blood flow, and restore muscle function rapidly."
  },
  {
    icon: FaDumbbell,
    title: "Strength Training",
    description:
      "Customized resistance and functional exercise plans designed to rebuild muscle, protect joints, and enhance performance."
  },
  {
    icon: FaRegLightbulb,
    title: "Education & Prevention",
    description:
      "Learn posture correction, ergonomic strategies, and home-program exercises tailored to your lifestyle."
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            <ServiceCard
              icon={s.icon}
              title={s.title}
              description={s.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
