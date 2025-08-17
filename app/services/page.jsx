import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Services | Stay in Motion PT",
  description: "Services - Stay in Motion Physical Therapy.",
  alternates: { canonical: "https://stayinmotionpt.com/services" },
  openGraph: {
    url: "https://stayinmotionpt.com/services",
    title: "Services | Stay in Motion PT",
    description: "Services - Stay in Motion Physical Therapy.",
    images: [{ url: "/logo.png" }]
  }
};


export default function Page() {
  return (
    <>
      
          <ServicesSection />
        </>
  );
}
