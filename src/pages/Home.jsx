// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Hero (video inside gradient background) */}
      <section
        className="
          relative
          w-full
          min-h-[60vh]
          md:min-h-[70vh]
          flex
          flex-col
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-r
          from-primary
          to-accent
        "
      >
        {/* background video */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1&mute=1&loop=1&playlist=u31qwQUeGuM&controls=0&modestbranding=1"
            title="Clinic Tour"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" /> {/* dark overlay */}
        </div>

        {/* foreground content */}
        <div className="relative z-10 text-center px-4 space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stay in Motion PT
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Personalized physical therapy to keep you moving pain-free.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="
                inline-block
                px-8 py-4
                bg-gradient-to-r from-primary to-accent
                text-white font-semibold rounded-full
                shadow-lg transform transition-transform duration-300
                hover:from-accent hover:to-primary hover:-translate-y-1
              "
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brief Intro + Explore Services */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto text-center px-4 space-y-6">
          <h2 className="text-3xl font-bold text-primary">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our clinic blends cutting-edge techniques with compassionate care,
            tailoring every plan to your unique goals. From manual therapy to
            advanced modality treatments, we’re here to help you reclaim your
            best self.
          </p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="
                inline-block
                px-8 py-4
                bg-gradient-to-r from-primary to-accent
                text-white font-semibold rounded-full
                shadow-lg transform transition-transform duration-300
                hover:from-accent hover:to-primary hover:-translate-y-1
              "
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
