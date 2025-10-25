"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="space-y-6">
      <h2 id="team-heading" className="text-2xl font-semibold">
        Our Team
      </h2>

      <FounderCard />
      <HiringCard />
    </section>
  );
}

function FounderCard() {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <article
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Header row */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        <img
          src="/photos/amanda.jpg"
          alt="Dr. Amanda Pickworth-Chrusciel"
          className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border border-gray-200 dark:border-gray-700"
          loading="lazy"
          itemProp="image"
        />

        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold" itemProp="name">
            Dr. Amanda Pickworth-Chrusciel, PT, DPT
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
            <span className="font-medium" itemProp="jobTitle">
              Founder
            </span>{" "}
            | Stay in Motion Physical Therapy
          </p>

          <p className="mt-4 leading-7">
            I’m a proud graduate of the University of Findlay with over 12 years of
            hands-on experience helping people move better, feel stronger, and live without limits.
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {[
              "Orthopedics",
              "Chronic Pain",
              "Sports Rehab",
              "Dry Needling",
              "IASTM",
              "Cupping",
              "BFR",
              "McKenzie A",
              "Barbell Rehab"
            ].map((chip) => (
              <li
                key={chip}
                className="text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700/40"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-auto">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={contentId}
            onClick={() => setOpen((v) => !v)}
            className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:from-accent hover:to-primary"
          >
            {open ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="bio"
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-gray-200 dark:border-gray-700"
          >
            <div className="p-6 md:p-8 space-y-4">
              <p className="leading-7">
                My journey began in 2013 as a Physical Therapist Assistant, and over the
                years, I’ve specialized in orthopedics, chronic pain, and sports rehabilitation.
              </p>
              <p className="leading-7">
                I hold advanced certifications in dry needling, muscle energy techniques,
                strain-counterstrain, instrument-assisted soft tissue mobilization, cupping,
                blood flow restriction (BFR) training, McKenzie Part A, and the Barbell Rehab
                Method.These tools allow me to tailor treatment to your unique needs—whether you’re an athlete 
                returning to sport, someone recovering from injury, or simply looking to move with less pain.
              </p>
              <p className="leading-7">
                A lifetime soccer player and former coach, I understand the importance of
                strength, mobility, and injury prevention. At Stay in Motion, my mission is to
                help you get moving, keep moving, and stay in motion for life.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function HiringCard() {
  return (
    <article className="bg-white dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6 text-center shadow-sm">
      <h3 className="text-xl font-semibold mb-2">We’re Hiring!</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Join our growing team at Stay in Motion Physical Therapy.
      </p>
      <a
        href="/careers"
        className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:from-accent hover:to-primary"
      >
        View Careers
      </a>
    </article>
  );
}
