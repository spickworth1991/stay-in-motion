// app/contact/page.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Stay in Motion PT",
  description: "Reach out to schedule physical therapy in Wixom, MI.",
  alternates: { canonical: "https://stayinmotionpt.com/contact" },
  openGraph: {
    url: "https://stayinmotionpt.com/contact",
    title: "Contact | Stay in Motion PT",
    description: "Reach out to schedule physical therapy in Wixom, MI."
  }
};

export default function ContactPage() {
  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-200">
            We’d love to help you get back to moving your best.
          </p>

          <div className="mt-8 space-y-4">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <a href="tel:+1-734-215-7546" className="underline">(734) 215-7546</a>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <a href="mailto:info@stayinmotionpt.com" className="underline">info@stayinmotionpt.com</a>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              Working to get a location now!
            </p>
          </div>
        </div>

        {/* Client island handles motion + state safely */}
        <ContactForm />
      </div>
    </section>
  );
}
