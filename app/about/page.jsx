// app/about/page.jsx  (Server Component — no framer-motion here)
import TeamSection from "@/components/TeamSection";

export const metadata = {
  title: "About | Stay in Motion PT",
  description: "About - Stay in Motion Physical Therapy.",
  alternates: { canonical: "https://stayinmotionpt.com/about" },
  openGraph: {
    url: "https://stayinmotionpt.com/about",
    title: "About | Stay in Motion PT",
    description: "About - Stay in Motion Physical Therapy.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <section className="section">
      <div className="container-site">
        {/* Hero (inline, token-driven) */}
        <header className="text-center mb-8">
          <span className="badge">Move well • Live well</span>
          <h1 className="h1 mt-3">About Stay in Motion</h1>
          <p className="lead mt-3">
            Personalized physical therapy rooted in advanced methods, athletic insight, and a
            mission to keep you moving for life.
          </p>
        </header>

        {/* Team (client component) */}
        <TeamSection />
      </div>
    </section>
  );
}
