// app/layout.jsx
export const metadata = {
  metadataBase: new URL("https://stayinmotionpt.com"),
  title: {
    default: "Stay in Motion PT | Physical Therapy in Wixom, MI",
    template: "%s | Stay in Motion PT",
  },
  description:
    "Personalized physical therapy, dry needling, and sports rehab in Wixom, MI.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "Stay in Motion Physical Therapy",
    url: "https://stayinmotionpt.com",
    title: "Stay in Motion PT | Physical Therapy in Wixom, MI",
    description:
      "Personalized physical therapy, dry needling, and sports rehab in Wixom, MI.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://stayinmotionpt.com" },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3cadba" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1a1f" },
  ],
};

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  // Sitewide structured data
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy", // valid subtype of MedicalBusiness
    name: "Stay in Motion Physical Therapy",
    url: "https://stayinmotionpt.com",
    logo: "https://stayinmotionpt.com/logo_noBG.png",
    image: "https://stayinmotionpt.com/logo_noBG.png",
    telephone: "+1-734-251-3046",
    priceRange: "$$",
    medicalSpecialty: "PhysicalTherapy",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30990 S Wixom Rd",
      addressLocality: "Wixom",
      addressRegion: "MI",
      postalCode: "48393",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 42.524, longitude: -83.536 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
      "https://www.linkedin.com/company/yourpage",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-734-251-3046",
        contactType: "customer service",
      },
    ],
  };

  // Fallback meta for Supabase so previews don’t crash if envs are missing
  const SUPABASE_URL =
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
  const SUPABASE_ANON =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    "";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sitewide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="IGEMpigWrIPdpL7KyJuLxvhducEk-UU-PkWOVm2zSLk"
        />

        {/* Preconnects / DNS Prefetch for perf */}
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//i.ytimg.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google.com" />

        {/* Icons / Manifest (also set in metadata above) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Supabase fallbacks for client (read by getSupabase()) */}
        <meta name="supabase-url" content={SUPABASE_URL} />
        <meta name="supabase-anon" content={SUPABASE_ANON} />
      </head>

      <body className="bg-cream dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
