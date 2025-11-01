// app/services/strength-training/page.jsx
export const metadata = {
  title: "Strength Training in Wixom, MI | Rehab & Performance",
  description:
    "Personalized strength programs in Wixom, MI that protect joints, rebuild muscle, and enhance performance—designed by a physical therapist.",
  alternates: { canonical: "https://stayinmotionpt.com/services/strength-training" },
  openGraph: {
    url: "https://stayinmotionpt.com/services/strength-training",
    title: "Strength Training in Wixom, MI | Rehab & Performance",
    description:
      "Progressive, goal-based strength training to support recovery and performance.",
    images: [{ url: "https://stayinmotionpt.com/logo.png"}],
  },
};

export default function Page() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Strength Training",
    "provider": { "@type": "PhysicalTherapy", "name": "Stay in Motion Physical Therapy", "url": "https://stayinmotionpt.com" }
  };

  return (
    <main className="max-w-3xl md:max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Strength Training in Wixom, MI</h1>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        Customized resistance and functional training built around your goals, training age, and recovery
        plan—so you can move, feel, and perform better.
      </p>
    </main>
  );
}
