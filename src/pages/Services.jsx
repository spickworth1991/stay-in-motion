// src/pages/Services.jsx
import ServicesSection from "../components/ServicesSection";
import SEO from "../components/SEO";

export default function Services() {
  const title = "Services | Stay in Motion Physical Therapy";
  const desc =
    "Physical therapy evaluations and treatments, dry needling, recovery sessions, and sports rehab—tailored to your goals.";
  const canonical = "https://stayinmotionpt.com/services";
  const ogImage = "https://stayinmotionpt.com/og/services.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "url": canonical,
    "about": [
      "Physical Therapy",
      "Dry Needling",
      "Recovery Sessions",
      "Sports Rehabilitation",
      "Orthopedics",
      "Chronic Pain"
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
      <ServicesSection />
    </>
  );
}
