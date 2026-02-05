"use client";

import { useState, useCallback } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CallNowBar from "@/components/CallNowBar";

export default function Footer() {
  const [showMap, setShowMap] = useState(false);

  const address = "30990 S Wixom Rd, Wixom, USA";
  const embedSrc =
    "https://maps.google.com/maps" +
    `?q=${encodeURIComponent(address)}&z=15&output=embed`;

  const handleClick = useCallback(() => setShowMap(true), []);
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowMap(true);
    }
  }, []);

  return (
    <>
      <footer className="bg-bg text-fg border-t border-subtle py-12 px-4 md:px-8 mt-16 md:mt-0">
        <div className="container-site grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h2 className="h3 mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>

            {/* Privacy & Legal */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-muted uppercase tracking-wide">
                Privacy &amp; Legal
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="/privacy" className="hover:text-primary">
                    SMS &amp; Email Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    View Policy PDF
                    <span className="text-muted"> (opens in new tab)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="h3 mb-4">
              <a
                href="/location"
                className="hover:text-primary underline decoration-accent underline-offset-4"
              >
                Our Location
              </a>
            </h2>

            <div
              className="w-full h-40 rounded-lg overflow-hidden cursor-pointer card"
              role="button"
              tabIndex={0}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              aria-label="Open interactive map"
            >
              {showMap ? (
                <iframe
                  title="Clinic Map"
                  src={embedSrc}
                  className="w-full h-40 rounded-lg border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/photos/clinic-map-380.webp?v=2 1x, /photos/clinic-map-760.webp?v=2 2x"
                  />
                  <img
                    src="/photos/clinic-map-380.webp?v=2"
                    alt="Static map preview: 30990 S Wixom Rd, Wixom, USA"
                    className="w-full h-full object-cover"
                    width="380"
                    height="228"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              )}
            </div>

            <p className="mt-2 text-sm text-muted">
              <a
                href="/location"
                className="underline decoration-accent hover:text-primary"
              >
                View directions &amp; parking →
              </a>
            </p>

            {/* No-JS fallback: link to Google Maps */}
            <noscript>
              <p className="mt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    address
                  )}`}
                  target="_blank"
                  rel="noopener"
                  className="underline"
                >
                  Open in Google Maps
                </a>
              </p>
            </noscript>
          </div>

          {/* Social & Contact */}
          <div>
            <h2 className="h3 mb-4">Connect With Us</h2>
            <div className="flex gap-4 mb-4 text-xl">
              {/* Enable these when your pages are ready
              <a
                href="https://www.facebook.com/stayinmotionpt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook — opens in a new tab"
                className="hover:text-primary focus:outline-none ring-primary rounded-full"
              >
                <FaFacebookF />
                <span className="sr-only">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/stayinmotionpt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — opens in a new tab"
                className="hover:text-primary focus:outline-none ring-primary rounded-full"
              >
                <FaInstagram />
                <span className="sr-only">Instagram</span>
              </a>
              */}
              <a
                href="https://www.linkedin.com/in/amanda-pickworth-chrusciel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn — opens in a new tab"
                className="hover:text-primary focus:outline-none ring-primary rounded-full"
              >
                <FaLinkedinIn />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>

            <address className="not-italic space-y-0.5">
              <p>30990 S Wixom Rd</p>
              <p>Wixom MI, 48393</p>
              <p>(734) 251-3046</p>
              <p>Mon–Fri: 8am–6pm</p>
            </address>
          </div>
        </div>

        <div className="container-site">
          <p className="mt-10 text-center text-sm text-muted">
            © {new Date().getFullYear()} Stay in Motion Physical Therapy. All
            rights reserved.
            <br />
            <span>
              Developed by{" "}
              <a
                href="mailto:contact.stickypicky@gmail.com"
                className="hover:text-primary underline decoration-accent decoration-1 underline-offset-2"
              >
                StickyPicky
              </a>
            </span>
          </p>
        </div>
      </footer>

      <CallNowBar />
    </>
  );
}
