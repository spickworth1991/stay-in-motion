// app/about/page.jsx  (Server Component - no framer-motion here)
import TeamSection from "@/components/TeamSection";
import AboutHeader from "@/components/AboutHeader";

export const metadata = {
  title: "About | Stay in Motion PT",
  description: "About - Stay in Motion Physical Therapy.",
  alternates: { canonical: "https://stayinmotionpt.com/about" },
  openGraph: {
    url: "https://stayinmotionpt.com/about",
    title: "About | Stay in Motion PT",
    description: "About - Stay in Motion Physical Therapy.",
    images: [{ url: "/logo.png" }]
  }
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <AboutHeader />
      <TeamSection />
    </main>
  );
}
