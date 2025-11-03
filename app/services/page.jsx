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
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const servicesLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Physical Therapy Services in Wixom, MI",
    itemListElement: [
      { "@type": "Service", name: "Manual Therapy" },
      { "@type": "Service", name: "Dry Needling" },
      { "@type": "Service", name: "Strength Training" },
      { "@type": "Service", name: "Education & Injury Prevention" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
      />
      <section className="section">
        <div className="container-site">
          {/* Hero */}
          <div className="text-center mb-8">
            <span className="badge">One-on-one care</span>
            <h1 className="h1 mt-3">Physical Therapy &amp; Dry Needling</h1>
            <p className="lead mt-3 max-w-3xl mx-auto">
              Tailored treatment to your goals—manual therapy, dry needling, progressive
              strength, and education that fits your life.
            </p>
          </div>

          <ServicesSection />
        </div>
      </section>
    </>
  );
}
