import FAQItem from "../components/FAQItem";

const faqs = [
  {
    question: "What should I bring to my first session?",
    answer:
      "Wear comfortable clothing, bring any referral paperwork, and arrive 10 minutes early with ID and insurance card.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes—we accept most major plans. Please see the Insurance page for a full list and estimates.",
  },
  // …add more Q&A pairs
];

export default function FAQ() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Frequently Asked Questions
      </h1>
      {faqs.map((f) => (
        <FAQItem key={f.question} {...f} />
      ))}
    </section>
  );
}
