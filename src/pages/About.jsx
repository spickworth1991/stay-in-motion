// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import TeamSection from "../components/TeamSection";
import SEO from "../components/SEO";

export default function About() {
  const title = "About | Stay in Motion Physical Therapy";
  const desc =
    "Learn about Dr. Amanda Pickworth-Chrusciel, PT, DPT — founder of Stay in Motion Physical Therapy — and our mission to help you move better, feel stronger, and live without limits.";
  const canonical = "https://stayinmotionpt.com/about";
  const ogImage = "https://stayinmotionpt.com/og/about.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://stayinmotionpt.com/#org",
        "name": "Stay in Motion Physical Therapy",
        "url": "https://stayinmotionpt.com/",
        "logo": "https://stayinmotionpt.com/logo.png"
      },
      {
        "@type": "Person",
        "@id": "https://stayinmotionpt.com/#amanda",
        "name": "Dr. Amanda Pickworth-Chrusciel, PT, DPT",
        "jobTitle": "Founder",
        "worksFor": { "@id": "https://stayinmotionpt.com/#org" },
        "url": canonical,
        "alumniOf": "University of Findlay",
        "knowsAbout": [
          "Orthopedics",
          "Chronic Pain",
          "Sports Rehabilitation",
          "Dry Needling",
          "Muscle Energy Techniques",
          "Strain-Counterstrain",
          "IASTM",
          "Cupping",
          "BFR Training",
          "McKenzie Part A",
          "Barbell Rehab Method"
        ],
        "image": "https://stayinmotionpt.com/images/amanda.jpg"
      }
    ]
  };

  return (
    <>
      <SEO
        title={title}
        description={desc}
        canonical={canonical}
        ogImage={ogImage}
        jsonLd={jsonLd}
      />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl text-primary md:text-4xl font-bold">About Stay in Motion</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Personalized physical therapy rooted in advanced methods, athletic insight, and a
            mission to keep you moving for life.
          </p>
        </motion.header>

        <TeamSection />
      </main>
    </>
  );
}
