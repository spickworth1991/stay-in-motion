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
  {
    question: "Do I need a referral from my doctor?",
    answer:
      "In most cases, you can start physical therapy without a referral thanks to direct access laws in Michigan. However, some insurance plans may require one, so check with your provider.",
  },
  {
    question: "How long are sessions?",
    answer:
      "Most sessions last 45–60 minutes, depending on your treatment plan and goals.",
  },
  {
    question: "What should I wear to my appointment?",
    answer:
      "Comfortable, loose-fitting clothes that allow you to move freely and expose the area being treated are best. Athletic shoes are recommended.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This varies by individual, condition, and goals. We will discuss your personalized treatment plan after your initial evaluation.",
  },
  {
    question: "Do you offer dry needling?",
    answer:
      "Yes, dry needling is available as part of a customized treatment plan when appropriate.",
  },
  {
    question: "Can I continue working out while in physical therapy?",
    answer:
      "In many cases, yes. We can help modify your workouts so you can stay active safely while recovering.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "We work with a variety of conditions including sports injuries, post-surgical recovery, chronic pain, joint problems, and mobility limitations.",
  },
  {
    question: "What is a superbill?",
    answer:
      "A superbill is an itemized receipt for services provided that you can submit to your insurance company for possible reimbursement.",
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
