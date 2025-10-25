export default function BlogCard({ title, excerpt, date, category, slug }) {
  return (
    <a
      href={`/blog/${slug}`}
      className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
    >
      <div className="p-6">
        <span className="text-sm text-accent font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-600 mt-2">{excerpt}</p>
        <p className="text-gray-500 text-sm mt-4">{new Date(date).toLocaleDateString()}</p>
      </div>
    </a>
  );
}
