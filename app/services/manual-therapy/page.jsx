// app/services/manual-therapy/page.jsx
export const metadata = {
  title: "Manual Therapy in Wixom, MI | Hands-On Care",
  description:
    "Manual therapy in Wixom, MI: joint mobilization, soft-tissue release, and myofascial techniques to reduce pain and improve movement.",
  alternates: { canonical: "https://stayinmotionpt.com/services/manual-therapy" },
  openGraph: {
    url: "https://stayinmotionpt.com/services/manual-therapy",
    title: "Manual Therapy in Wixom, MI | Hands-On Care",
    description:
      "Hands-on techniques to relieve pain and improve function, tailored to your goals.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Manual Therapy",
    "provider": { "@type": "MedicalClinic", "name": "Stay in Motion Physical Therapy", "url": "https://stayinmotionpt.com" }
  };

  return (
    <main className="max-w-3xl md:max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Manual Therapy in Wixom, MI</h1>
      <p className="text-lg text-fg dark:text-gray-200">
        Joint mobilization, soft-tissue release, and myofascial techniques to decrease pain, improve
        mobility, and prepare you for progressive loading.
      </p>
    </main>
  );
}
