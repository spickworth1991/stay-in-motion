export default function InsuranceGuideCard({ title, description, pdfUrl }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
      <h3 className="text-xl dark:text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-400 mb-4">{description}</p>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block px-4 py-2 bg-primary dark:bg-gray-500 text-white rounded hover:bg-primary/90 transition"
      >
        Download PDF
      </a>
    </div>
  );
}
