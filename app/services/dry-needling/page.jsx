// app/services/dry-needling/page.jsx
export const metadata = {
  title: "Dry Needling in Wixom, MI | Pain Relief & Muscle Recovery",
  description:
    "Trigger point dry needling in Wixom, MI for pain relief, mobility, and recovery. Safe, precise, and performed by a licensed physical therapist.",
  alternates: { canonical: "https://stayinmotionpt.com/services/dry-needling" },
  openGraph: {
    url: "https://stayinmotionpt.com/services/dry-needling",
    title: "Dry Needling in Wixom, MI | Pain Relief & Muscle Recovery",
    description:
      "Reduce pain, ease muscle tension, and improve mobility with dry needling performed by a licensed PT in Wixom, MI.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dry Needling",
    "areaServed": [
      { "@type": "City", "name": "Wixom" },
      { "@type": "City", "name": "Novi" },
      { "@type": "City", "name": "Walled Lake" },
      { "@type": "City", "name": "Commerce Township" }
    ],
    "provider": {
      "@type": "MedicalClinic",
      "name": "Stay in Motion Physical Therapy",
      "telephone": "+1-734-251-3046",
      "url": "https://stayinmotionpt.com"
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is dry needling the same as acupuncture?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Dry needling targets trigger points in muscle to reduce tension and pain, while acupuncture is a traditional Chinese medicine practice." }
      },
      {
        "@type": "Question",
        "name": "Does it hurt?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most people feel a brief twitch or ache. Any soreness typically fades within 24–48 hours." }
      }
    ]
  };

  return (
    <main className="max-w-3xl md:max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dry Needling in Wixom, MI</h1>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
        Dry needling is a precise technique used to release trigger points, reduce pain, and restore mobility.
        We combine it with exercise and manual therapy for lasting results.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What It Helps</h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200">
        <li>Neck, shoulder, back, hip, and knee pain</li>
        <li>Headaches related to muscle tension</li>
        <li>Stiffness and limited mobility</li>
      </ul>
    </main>
  );
}
