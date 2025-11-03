export default function InsuranceGuideCard({ title, description, pdfUrl }) {
  return (
    <div className="bg-card bg-bg p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
      <h3 className="text-xl dark:text-muted font-semibold mb-2">{title}</h3>
      <p className="text-fg dark:text-gray-200 mb-4">{description}</p>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block px-4 py-2 bg-primary dark:bg-gray-500 text-card rounded hover:bg-primary transition"
      >
        Download PDF
      </a>
    </div>
  );
}
