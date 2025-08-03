import BlogCard from "../components/BlogCard";

// Normally you'd fetch this from an API or markdown files
const posts = [
  {
    title: "5 Exercises to Improve Posture",
    excerpt: "Simple daily movements to stand taller and feel stronger.",
    date: "2025-07-15",
    category: "Wellness",
    slug: "posture-exercises",
  },
  {
    title: "Recovering Safely After ACL Surgery",
    excerpt: "A comprehensive timeline to get you back on the field.",
    date: "2025-07-01",
    category: "Rehab",
    slug: "acl-recovery",
  },
  // …more posts
];

export default function Blog() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-primary text-center mb-12">
        Blog & Resources
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((p) => (
          <BlogCard key={p.slug} {...p} />
        ))}
      </div>
    </section>
  );
}
