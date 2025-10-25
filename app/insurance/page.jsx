import InsuranceHeader from "@/components/InsuranceHeader";
import InsuranceContent from "@/components/InsuranceContent";

export const metadata = {
  title: "Insurance & Payment | Stay in Motion PT",
  description: "Insurance & Payment - Stay in Motion Physical Therapy.",
  alternates: { canonical: "https://stayinmotionpt.com/insurance" },
  openGraph: {
    url: "https://stayinmotionpt.com/insurance",
    title: "Insurance & Payment | Stay in Motion PT",
    description: "Insurance & Payment - Stay in Motion Physical Therapy.",
    images: [{ url: "/logo.png" }]
  }
};

export default function Page() {
  return (
    <main className="max-w-3xl md:max-w-4xl mx-auto p-4">
      <InsuranceHeader />
      <InsuranceContent />
    </main>
  );
}
