// app/services/page.jsx
import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Physical Therapy & Dry Needling in Wixom, MI | Services",
  description:
    "One-on-one physical therapy, dry needling, strength training, and injury prevention in Wixom, MI.",
  alternates: { canonical: "https://stayinmotionpt.com/services" },
  openGraph: {
    url: "https://stayinmotionpt.com/services",
    title: "Physical Therapy & Dry Needling in Wixom, MI | Services",
    description:
      "Personalized physical therapy, dry needling, and sports rehab in Wixom, MI.",
    images: [{ url: "https://stayinmotionpt.com/logo.png" }],
  },
};

export default function Page() {
  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Physical Therapy Services in Wixom, MI",
    "itemListElement": [
      { "@type": "Service", "name": "Manual Therapy" },
      { "@type": "Service", "name": "Dry Needling" },
      { "@type": "Service", "name": "Strength Training" },
      { "@type": "Service", "name": "Education & Injury Prevention" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
      <section className="text-center pt-10 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Physical Therapy & Dry Needling in Wixom, MI
        </h1>
        <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-200">
          We provide one-on-one care tailored to your goals—manual therapy, dry needling, progressive strength,
          and education that fits your life.
        </p>
      </section>


      <ServicesSection />
    </>
  );
}
