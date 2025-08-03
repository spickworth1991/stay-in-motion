// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="
          relative
          w-full
          min-h-[50vh]
          md:min-h-[70vh]
          flex
          items-center
          justify-center
          bg-gradient-to-r
          from-primary
          to-accent
        "
      >
        <div className="text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stay in Motion PT
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Personalized physical therapy to keep you moving pain-free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our clinic blends cutting-edge techniques with compassionate care,
            tailoring every plan to your unique goals. From manual therapy to
            advanced modality treatments, we’re here to help you reclaim your
            best self.
          </p>
        </div>
      </section>
    </>
  )
}
