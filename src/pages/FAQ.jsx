// src/pages/FAQ.jsx
import SEO from "../components/SEO";
import FAQItem from "../components/FAQItem";

const faqs = [
  {
    question: "What should I bring to my first session?",
    answer:
      "Wear comfortable clothing, bring any referral paperwork, and arrive 10 minutes early with ID.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We are temporarily cash-based while credentialing is finalized. A superbill is available upon request.",
  },
];

export default function FAQ() {
  const title = "FAQ | Stay in Motion Physical Therapy";
  const desc =
    "Answers to common questions about services, insurance, scheduling, and more.";
  const canonical = "https://stayinmotionpt.com/faq";
  const ogImage = "https://stayinmotionpt.com/og/faq.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
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

      <section className="py-16 px-4 md:px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          Frequently Asked Questions
        </h1>
        {faqs.map((f) => (
          <FAQItem key={f.question} {...f} />
        ))}
      </section>
    </>
  );
}
