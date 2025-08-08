// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { lazy, Suspense } from 'react';
const LiteYouTube = lazy(() => import('../components/LiteYouTube'));

export default function Home() {
  const videoId = "u31qwQUeGuM";
  const videoTitle = "Clinic Tour";
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;

  return (
    <>
      <Helmet>
        <title>Stay in Motion PT | Physical Therapy in Livonia, MI</title>
        <meta
          name="description"
          content="Stay in Motion Physical Therapy in Livonia, MI offers personalized rehab, injury recovery, and mobility solutions. Book your session today!"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://stayinmotionpt.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Stay in Motion PT | Physical Therapy in Livonia, MI" />
        <meta property="og:description" content="Personalized rehab, injury recovery, and mobility solutions to keep you moving pain-free." />
        <meta property="og:url" content="https://stayinmotionpt.com/" />
        <meta property="og:image" content="https://stayinmotionpt.com/PT-Logo.png" />
        <meta property="og:image:secure_url" content="https://stayinmotionpt.com/PT-Logo.png" />
        <meta property="og:image:alt" content="Stay in Motion PT logo" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stay in Motion PT" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stay in Motion PT" />
        <meta name="twitter:description" content="Personalized rehab to keep you moving pain-free." />
        <meta name="twitter:image" content="https://stayinmotionpt.com/PT-Logo.png" />

        {/* Nice UI color on mobile browsers */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="geo.region" content="US-MI" />
        <meta name="geo.placename" content="Livonia" />
        <meta name="geo.position" content="42.3684;-83.3527" />
        <meta name="ICBM" content="42.3684, -83.3527" />


        {/* JSON-LD */}
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Stay in Motion PT",
          "url": "https://stayinmotionpt.com",
          "image": "https://stayinmotionpt.com/PT-Logo.png",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main St Suite 100",
            "addressLocality": "Livonia",
            "addressRegion": "MI",
            "postalCode": "48150",
            "addressCountry": "US"
          },
          "telephone": "+1-734-555-1234",
          "areaServed": ["Livonia MI","Northville MI","Canton MI","Novi MI","Westland MI"]
        }
        `}
        </script>


        {/* Preload LCP image */}
        <link
          rel="preload"
          as="image"
          href={thumbnail}
          fetchpriority="high"
          imagesrcset={`${thumbnail} 1x, https://i.ytimg.com/vi/${videoId}/hqdefault.jpg 2x`}
          imagesizes="(max-width: 768px) 100vw, 640px"
        />

      
      </Helmet>

      {/* Hero */}
      <section className="
          relative w-full min-h-[60vh] md:min-h-[70vh]
          flex flex-col items-center justify-center
          bg-gradient-to-r from-primary to-accent
          overflow-hidden dark:bg-gray-900 px-4
        ">
        <div className="relative z-10 text-center space-y-6 max-w-2xl w-full">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stay in Motion PT
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Personalized physical therapy to keep you moving pain-free.
          </motion.p>

          {/* Optimized LiteYouTube */}
          <motion.div
            className="
              mx-auto w-full 
              max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl
              rounded-2xl overflow-hidden shadow-2xl
              aspect-video   /* reserve space to prevent CLS */
            "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Suspense fallback={<div className="aspect-video rounded-2xl bg-black/20" />}>
              <LiteYouTube id={videoId} title={videoTitle} />
            </Suspense>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white dark:text-gray-200 font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:from-accent hover:to-primary hover:-translate-y-1"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PT / SEO Section */}
      <section className="bg-white dark:bg-gray-800 px-4 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-bold text-primary">
          Physical Therapy in Livonia, MI
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200">
          Welcome to <strong>Stay in Motion Physical Therapy</strong> — your trusted resource for
          personalized, results-driven care in <strong>Livonia</strong> and surrounding communities
          like <strong>Northville</strong>, <strong>Canton</strong>, <strong>Novi</strong>, and
          <strong> Westland</strong>. We help active adults, athletes, and post-surgical patients
          recover faster and return to the activities they love.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          Our one-on-one sessions focus on restoring mobility, reducing pain, and building lasting
          strength. From <strong>sports rehab</strong> to <strong>injury prevention</strong>,
          every plan is tailored to your unique goals and lifestyle.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:from-accent hover:to-primary hover:-translate-y-1"
        >
          Schedule Your Appointment Today
        </Link>
      </div>
    </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-cream/20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-primary">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
          We believe healing is most successful when treatment is personal. That’s why every patient
          at <strong>Stay in Motion Physical Therapy</strong> works directly with a licensed Doctor of
          Physical Therapy in a one-on-one setting — no assistants, no crowded gym floors.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
          Our approach blends <strong>manual therapy</strong>, <strong>targeted exercise</strong>,
          and <strong>movement education</strong> to address the root cause of your pain, not just the
          symptoms. We take time to understand your goals so we can help you return to work, sport, and
          everyday life with confidence.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-200">
          <li>✔ One-on-one care with a Doctor of Physical Therapy</li>
          <li>✔ Customized programs based on your needs</li>
          <li>✔ Evidence-based, results-driven treatment</li>
          <li>✔ State-of-the-art rehab equipment</li>
          <li>✔ Flexible scheduling and no rushed sessions</li>
          <li>✔ Clear communication every step of the way</li>
        </ul>
        <Link
          to="/services"
          className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:from-accent hover:to-primary"
        >
          Explore Our Services
        </Link>
      </div>
    </section>



      {/* Local Physical Therapy Insights */}
      <section className="bg-white dark:bg-gray-800 px-4 py-12 border-t border-gray-200 dark:border-gray-700">
  <div className="max-w-4xl mx-auto space-y-6 text-center">
    <h2 className="text-3xl font-bold text-primary">Conditions We Treat</h2>
    <p className="text-gray-700 dark:text-gray-200 text-lg">
      We help patients overcome a wide range of injuries and physical challenges, from
      <strong> sports injuries</strong> and <strong>post-surgical rehab</strong> to
      <strong> chronic pain</strong> and <strong>balance issues</strong>. Whether you’re a
      competitive athlete or simply want to move without discomfort, our team has the expertise to
      get you there.
    </p>
    <div className="text-left max-w-2xl mx-auto">
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
        <li>ACL, MCL, and ligament rehab</li>
        <li>Rotator cuff and shoulder injuries</li>
        <li>Hip, knee, and ankle pain</li>
        <li>Spinal conditions and postural issues</li>
        <li>Arthritis and degenerative joint problems</li>
        <li>Vestibular therapy for dizziness and vertigo</li>
      </ul>
    </div>
    <p className="text-lg font-semibold text-primary">
      Serving patients throughout Livonia, Northville, Canton, Novi, and Westland.
    </p>
  </div>
</section>
    </>
  );
}
