export const metadata = {
  metadataBase: new URL("https://stayinmotionpt.com"),
  title: { default: "Stay in Motion PT | Physical Therapy in Livonia, MI", template: "%s | Stay in Motion PT" },
  description: "Personalized physical therapy, dry needling, and sports rehab in Livonia, MI.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "Stay in Motion Physical Therapy",
    url: "https://stayinmotionpt.com",
    title: "Stay in Motion PT | Physical Therapy in Livonia, MI",
    description: "Personalized physical therapy, dry needling, and sports rehab in Livonia, MI.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stay in Motion PT | Physical Therapy in Livonia, MI",
    description: "Personalized physical therapy, dry needling, and sports rehab in Livonia, MI.",
    images: ["/og/home.jpg"],
    site: "@yourhandle",    // <-- update or remove
    creator: "@yourhandle"  // <-- update or remove
  },
  alternates: { canonical: "https://stayinmotionpt.com" },
  manifest: "/site.webmanifest" // PWA manifest we add below
};

export const viewport = { themeColor: "#3cadbaff" };

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  // LocalBusiness / MedicalClinic JSON-LD (sitewide)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Stay in Motion Physical Therapy",
    "url": "https://stayinmotionpt.com",
    "logo": "https://stayinmotionpt.com/logo_noBG.png",
    "image": "https://stayinmotionpt.com/logo_noBG.png",
    "telephone": "+1-555-555-5555",
    "priceRange": "$$",
    "medicalSpecialty": "PhysicalTherapy",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St Suite 100, Livonia, USA",
      "addressLocality": "Livoniay",
      "addressRegion": "MI",
      "postalCode": "48135",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" }
    ],
    "sameAs": [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
      "https://www.linkedin.com/company/yourpage"
    ],
    "contactPoint": [{ "@type": "ContactPoint", "telephone": "+1-555-555-5555", "contactType": "customer service" }]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sitewide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Cloudflare Web Analytics – replace YOUR_TOKEN */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"YOUR_TOKEN"}'
        />
      </head>
      <body className="bg-cream dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        {/* Reserve space for fixed header */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
