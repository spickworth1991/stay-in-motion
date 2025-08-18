import Link from "next/link";
import LiteYouTube from "@/components/LiteYouTube";


export const metadata = {
  title: "Stay in Motion PT | Physical Therapy in Livonia, MI",
  description: "Personalized physical therapy, dry needling, and sports rehab in Livonia, MI.",
  alternates: { canonical: "https://stayinmotionpt.com/" },
  openGraph: {
    url: "https://stayinmotionpt.com/",
    title: "Stay in Motion PT | Physical Therapy in Livonia, MI",
    description: "Personalized physical therapy, dry needling, and sports rehab in Livonia, MI.",
    images: [{ url: "/logo.png" }]
  }
};

export default function Page() {
  const videoId = "u31qwQUeGuM";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stay in Motion Physical Therapy",
    "url": "https://stayinmotionpt.com/",
    "image": "https://stayinmotionpt.com/logo.png",
    "telephone": "+1-734-215-7546",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St Suite 100, Livonia, USA",
      "addressLocality": "Livonia",
      "addressRegion": "MI",
      "postalCode": "48135",
      "addressCountry": "US"
    },
    "areaServed": ["Livonia","Northville","Canton","Novi","Westland","Garden City"],
    "priceRange": "$$"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* === Paste your existing Home.jsx sections below (unchanged). Example hero: === */}
      <section className="bg-cream dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Get moving. Keep moving. <span className="text-accent">Stay in motion.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
              1-on-1 physical therapy that meets you where you are and gets you back to what you love.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="/contact" className="px-6 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition">
                Book an Appointment
              </a>
              <a href="/services" className="px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition">
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <LiteYouTube id={videoId} title="Clinic Tour" />
          </div>
        </div>
      </section>

       {/* PT / SEO Section */}
      <section className="bg-white dark:bg-gray-600 px-4 py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-bold text-primary">Physical Therapy in Livonia, MI</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Welcome to <strong>Stay in Motion Physical Therapy</strong> — your trusted resource for
            personalized, results-driven care in <strong>Livonia</strong> and surrounding communities
            like <strong>Northville</strong>, <strong>Canton</strong>, <strong>Novi</strong>, and
            <strong> Westland</strong>. We help active adults, athletes, and post-surgical patients
            recover faster and return to the activities they love.
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            Our one-on-one sessions focus on restoring mobility, reducing pain, and building lasting
            strength. From <strong>sports rehab</strong> to <strong>injury prevention</strong>, every
            plan is tailored to your unique goals and lifestyle.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:from-accent hover:to-primary hover:-translate-y-1"
          >
            Schedule Your Appointment Today
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-cream dark:bg-gray-800 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            We believe healing is most successful when treatment is personal. That’s why every patient
            at <strong>Stay in Motion Physical Therapy</strong> works directly with a licensed Doctor of
            Physical Therapy in a one-on-one setting — no assistants, no crowded gym floors.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            Our approach blends <strong>manual therapy</strong>, <strong>targeted exercise</strong>,
            and <strong>movement education</strong> to address the root cause of your pain, not just the
            symptoms. We take time to understand your goals so we can help you return to work, sport, and
            everyday life with confidence.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-200">
            <li>✔ One-on-one care with a Doctor of Physical Therapy</li>
            <li>✔ Customized programs based on your needs</li>
            <li>✔ Evidence-based, results-driven treatment</li>
            <li>✔ State-of-the-art rehab equipment</li>
            <li>✔ Flexible scheduling and no rushed sessions</li>
            <li>✔ Clear communication every step of the way</li>
          </ul>
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:from-accent hover:to-primary"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-white dark:bg-gray-600 px-4 py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-bold text-primary">Conditions We Treat</h2>
          <p className="text-gray-700 dark:text-gray-200 text-lg">
            We help patients overcome a wide range of injuries and physical challenges, from
            <strong> sports injuries</strong> and <strong>post-surgical rehab</strong> to
            <strong> chronic pain</strong> and <strong>balance issues</strong>. Whether you’re a
            competitive athlete or simply want to move without discomfort, our team has the expertise to
            get you there.
          </p>
          <div className="text-left max-w-2xl mx-auto">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
              <li>ACL, MCL, and ligament rehab</li>
              <li>Rotator cuff and shoulder injuries</li>
              <li>Hip, knee, and ankle pain</li>
              <li>Spinal conditions and postural issues</li>
              <li>Arthritis and degenerative joint problems</li>
              <li>Vestibular therapy for dizziness and vertigo</li>
            </ul>
          </div>
          <p className="text-lg font-semibold text-primary">
            Serving patients throughout Livonia, Northville, Canton, Novi, and Westland.
          </p>
        </div>
      </section>


    </>
  );
}
