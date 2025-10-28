// app/location/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Our Location – Physical Therapy Clinic in Wixom, MI | Stay in Motion PT",
  description: "Find Stay in Motion Physical Therapy in Wixom, MI. Address, hours, parking, and directions.",
  alternates: { canonical: "https://stayinmotionpt.com/location" },
  openGraph: {
    url: "https://stayinmotionpt.com/location",
    title: "Our Location – Physical Therapy Clinic in Wixom, MI | Stay in Motion PT",
    description: "Address, hours, parking, and directions to our Wixom clinic.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const name = "Stay in Motion Physical Therapy";
  const street = "30990 S Wixom Rd";
  const city = "Wixom";
  const region = "MI";
  const postal = "48393";
  const phone = "+1-734-251-3046";
  const address = `${street}, ${city}, ${region} ${postal}`;
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": name,
    "telephone": phone,
    "url": "https://stayinmotionpt.com/location",
    "image": "https://stayinmotionpt.com/logo.png",
    "medicalSpecialty": "PhysicalTherapy",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": street,
      "addressLocality": city,
      "addressRegion": region,
      "postalCode": postal,
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 42.524, "longitude": -83.536 },
    "hasMap": mapEmbed,
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00", "closes": "18:00"
    }],
    "sameAs": [
      "https://www.facebook.com/stayinmotionpt",
      "https://www.instagram.com/stayinmotionpt",
      "https://www.linkedin.com/company/stayinmotionpt"
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Our Location – Wixom, MI</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="mb-2">{street}<br/>{city}, {region} {postal}</p>
            <p className="mb-4"><a href={`tel:${phone}`} className="text-primary underline">{phone}</a></p>

            <h3 className="font-semibold mt-6 mb-2">Hours</h3>
            <p>Mon–Fri: 8:00 AM – 6:00 PM</p>

            <h3 className="font-semibold mt-6 mb-2">Parking & Entrance</h3>
            <p>Free parking is available in the main lot directly in front of the clinic entrance.</p>

            <div className="mt-6 flex gap-3">
              <a href={directionsUrl} target="_blank" rel="noopener" className="px-5 py-3 rounded-xl bg-primary text-white hover:opacity-90">Get Directions</a>
              <Link href="/contact" className="px-5 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white">Contact Us</Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Map to Stay in Motion PT"
              src={mapEmbed}
              className="w-full h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-2">Driving Directions</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>From I-96: Exit Wixom Rd, head north ~1.4 mi, clinic on your right.</li>
            <li>From Pontiac Trail: Turn south on Wixom Rd, continue 0.6 mi.</li>
          </ul>
        </div>
        <div className="mt-10">
          <Link href="/contact" className="underline decoration-accent/40 hover:text-accent">
            Questions? Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
