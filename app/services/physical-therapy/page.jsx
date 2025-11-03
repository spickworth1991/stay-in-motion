// app/services/physical-therapy/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Physical Therapy in Wixom, MI | One-on-One PT",
  description:
    "One-on-one physical therapy in Wixom, MI for pain relief, injury recovery, and performance—manual therapy, movement analysis, and progressive exercise.",
  alternates: { canonical: "https://stayinmotionpt.com/services/physical-therapy" },
  openGraph: {
    url: "https://stayinmotionpt.com/services/physical-therapy",
    title: "Physical Therapy in Wixom, MI | One-on-One PT",
    description:
      "Expert physical therapy in Wixom, MI. Hands-on care and personalized programs to get you back to what you love.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Physical Therapy",
    "areaServed": [
      { "@type": "City", "name": "Wixom" },
      { "@type": "City", "name": "Novi" },
      { "@type": "City", "name": "Walled Lake" },
      { "@type": "City", "name": "Commerce Township" }
    ],
    "provider": {
      "@type": "MedicalClinic",
      "name": "Stay in Motion Physical Therapy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30990 S Wixom Rd",
        "addressLocality": "Wixom",
        "addressRegion": "MI",
        "postalCode": "48393",
        "addressCountry": "US"
      },
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
        "name": "What conditions do you treat?",
        "acceptedAnswer": { "@type": "Answer", "text": "Back and neck pain, shoulder/hip/knee issues, sports injuries, post-surgical rehab, tendon pain, and balance problems." }
      },
      {
        "@type": "Question",
        "name": "What does the first session include?",
        "acceptedAnswer": { "@type": "Answer", "text": "A thorough assessment, hands-on treatment as needed, and a personalized plan with a simple home program." }
      },
      {
        "@type": "Question",
        "name": "Are sessions one-on-one?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes—sessions are one-on-one to give you focused, individualized care." }
      }
    ]
  };

  return (
    <main className="max-w-3xl md:max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Physical Therapy in Wixom, MI</h1>
      <p className="text-lg text-fg dark:text-gray-200 mb-6">
        We combine a thorough assessment, hands-on techniques, and progressive exercise to relieve pain,
        restore function, and build confidence.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What We Help With</h2>
      <ul className="list-disc pl-5 space-y-1 text-fg dark:text-gray-200">
        <li>Back and neck pain, headaches</li>
        <li>Shoulder, hip, knee, and ankle injuries</li>
        <li>Sports rehab and return-to-play</li>
        <li>Post-surgical recovery</li>
        <li>Tendon pain, mobility limitations, balance issues</li>
      </ul>

      <div className="mt-10 flex gap-4">
        <Link className="text-primary underline underline-offset-4 hover:no-underline" href="/contact">Book a Session</Link>
        <Link className="text-primary underline underline-offset-4 hover:no-underline" href="/services">All Services</Link>
      </div>
    </main>
  );
}
