import InsuranceGuideCard from "../components/InsuranceGuideCard";

const guides = [
  {
    title: "Accepted Insurance Plans",
    description: "See our full list of in-network carriers and copay details.",
    pdfUrl: "/docs/accepted-plans.pdf",
  },
  {
    title: "Out-of-Pocket Estimates",
    description: "Estimate your costs for common treatments without insurance.",
    pdfUrl: "/docs/estimates.pdf",
  },
  {
    title: "Financing Options",
    description: "Learn about our flexible payment and financing plans.",
    pdfUrl: "/docs/financing.pdf",
  },
];

export default function Insurance() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-primary text-center mb-12">
        Insurance & Billing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guides.map((g) => (
          <InsuranceGuideCard key={g.title} {...g} />
        ))}
      </div>
    </section>
  );
}
