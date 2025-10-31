"use client";

// src/components/ServicesSection.jsx
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { FaHands, FaDumbbell, FaRegLightbulb } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa6"; // Cleaner needle icon for Dry Needling

const services = [
  {
    icon: FaHands,
    title: "Manual Therapy",
    description:
      "Our therapists use proven manual techniques—joint mobilization, soft-tissue release, myofascial stretches—to relieve pain and improve function.",
    href: "/services/manual-therapy",
  },
  {
    icon: FaSyringe,
    title: "Dry Needling",
    description:
      "Fine-gauge needles penetrate tense muscle bands to reduce pain, improve blood flow, and restore muscle function rapidly.",
    href: "/services/dry-needling",
  },
  {
    icon: FaDumbbell,
    title: "Strength Training",
    description:
      "Customized resistance and functional exercise plans designed to rebuild muscle, protect joints, and enhance performance.",
    href: "/services/strength-training",
  },
  {
    icon: FaRegLightbulb,
    title: "Education & Prevention",
    description:
      "Learn posture correction, ergonomic strategies, and home-program exercises tailored to your lifestyle.",
    href: "/services/education-injury-prevention",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Services</h2>

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
            <ServiceCard icon={s.icon} title={s.title} description={s.description} href={s.href} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
