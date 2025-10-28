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
  // twitter: {
  //   card: "summary",
  //   title: "Physical Therapy & Dry Needling in Wixom, MI | Services",
  //   description:
  //     "PT, dry needling, strength training, and prevention in Wixom, MI.",
  // },
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
      <section className="pt-10 px-4 md:px-8">
        <h1 className="sr-only">Physical Therapy & Dry Needling in Wixom, MI</h1>
      </section>
      <ServicesSection />
    </>
  );
}
