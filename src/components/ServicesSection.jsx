import { motion } from "framer-motion";
import {
  FaHands,
  FaHeartbeat,
  FaDumbbell,
  FaRegLightbulb
} from "react-icons/fa";

const services = [
  {
    icon: FaHands,
    title: "Manual Therapy",
    short: "Restore mobility with hands-on care.",
    details:
      "Our therapists use proven manual techniques—joint mobilization, soft-tissue release, myofascial stretches—to relieve pain and improve function."
  },
  {
    icon: FaHeartbeat,
    title: "Dry Needling",
    short: "Targeted relief for trigger points.",
    details:
      "Fine-gauge needles penetrate tense muscle bands to reduce pain, improve blood flow, and restore muscle function rapidly."
  },
  {
    icon: FaDumbbell,
    title: "Strength Training",
    short: "Build lasting strength safely.",
    details:
      "Customized resistance and functional exercise plans designed to rebuild muscle, protect joints, and enhance performance."
  },
  {
    icon: FaRegLightbulb,
    title: "Education & Prevention",
    short: "Keep pain from returning.",
    details:
      "Learn posture correction, ergonomic strategies, and home-program exercises tailored to your lifestyle."
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        Our Services
      </h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group break-inside-avoid bg-white p-6 rounded-xl shadow-lg transform transition hover:scale-105"
          >
            <s.icon className="text-accent text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-700 mb-4">{s.short}</p>
            <div className="max-h-0 group-hover:max-h-40 overflow-hidden text-gray-600 transition-all duration-300">
              {s.details}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
