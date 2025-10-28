export const metadata = {
  metadataBase: new URL("https://stayinmotionpt.com"),
  title: { default: "Stay in Motion PT | Physical Therapy in Wixom, MI", template: "%s | Stay in Motion PT" },
  description: "Personalized physical therapy, dry needling, and sports rehab in Wixom, MI.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "Stay in Motion Physical Therapy",
    url: "https://stayinmotionpt.com",
    title: "Stay in Motion PT | Physical Therapy in Wixom, MI",
    description: "Personalized physical therapy, dry needling, and sports rehab in Wixom, MI.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }]
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Stay in Motion PT | Physical Therapy in Wixom, MI",
  //   description: "Personalized physical therapy, dry needling, and sports rehab in Wixom, MI.",
  //   images: ["/og/home.jpg"],
  //   site: "@yourhandle",    // <-- update or remove
  //   creator: "@yourhandle"  // <-- update or remove
  // },
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
    "@type": "PhysicalTherapy",
    "name": "Stay in Motion Physical Therapy",
    "url": "https://stayinmotionpt.com",
    "logo": "https://stayinmotionpt.com/logo_noBG.png",
    "image": "https://stayinmotionpt.com/logo_noBG.png",
    "telephone": "+1-734-251-3046",
    "priceRange": "$$",
    "medicalSpecialty": "PhysicalTherapy",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30990 S Wixom Rd",
      "addressLocality": "Wixom",
      "addressRegion": "MI",
      "postalCode": "48393",
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 42.524, "longitude": -83.536 

    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }],
    "sameAs": [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
      "https://www.linkedin.com/company/yourpage"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-734-251-3046",
      "contactType": "customer service"
    }]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sitewide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="IGEMpigWrIPdpL7KyJuLxvhducEk-UU-PkWOVm2zSLk"
        />
        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//i.ytimg.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google.com" />
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
