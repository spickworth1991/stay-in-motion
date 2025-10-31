// app/services/education-injury-prevention/page.jsx
export const metadata = {
  title: "Education & Injury Prevention in Wixom, MI | Movement Coaching",
  description:
    "Posture, ergonomics, lifting mechanics, and home programs tailored to your lifestyle—education that sticks and prevents reinjury.",
  alternates: { canonical: "https://stayinmotionpt.com/services/education-injury-prevention" },
  openGraph: {
    url: "https://stayinmotionpt.com/services/education-injury-prevention",
    title: "Education & Injury Prevention in Wixom, MI | Movement Coaching",
    description:
      "Coaching and practical strategies to move confidently and stay pain-free.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Education & Injury Prevention",
    "provider": { "@type": "MedicalClinic", "name": "Stay in Motion Physical Therapy", "url": "https://stayinmotionpt.com" }
  };

  return (
    <main className="max-w-3xl md:max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Education & Injury Prevention</h1>
      <p className="text-lg text-gray-700 dark:text-gray-200">
        We teach posture, ergonomics, and simple home exercises so you can keep results going and prevent
        setbacks—even when life gets busy.
      </p>
    </main>
  );
}
