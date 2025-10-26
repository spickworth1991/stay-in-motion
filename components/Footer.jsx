"use client";

import { useState, useCallback } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CallNowBar from "@/components/CallNowBar";

export default function Footer() {
  const [showMap, setShowMap] = useState(false);

  const address = "30990 S Wixom Rd, Wixom, USA";
  const embedSrc =
    "https://maps.google.com/maps" + `?q=${encodeURIComponent(address)}&z=15&output=embed`;

  const handleClick = useCallback(() => setShowMap(true), []);
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowMap(true);
    }
  }, []);

  return (
    <>
      <footer className="bg-primary dark:bg-gray-900 text-white dark:text-gray-300 py-12 px-4 md:px-8 mb-16 md:mb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-accent">Home</a></li>
              <li><a href="/about" className="hover:text-accent">About</a></li>
              <li><a href="/FAQ" className="hover:text-accent">FAQ</a></li>
              <li><a href="/services" className="hover:text-accent">Services</a></li>
              <li><a href="/contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h2 className="font-semibold mb-4">Our Location</h2>

            <div
              className="w-full h-40 rounded-lg overflow-hidden cursor-pointer"
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
                    srcSet="/photos/clinic-map-380.webp 1x, /photos/clinic-map-760.webp 2x"
                  />
                  <img
                    src="/photos/clinic-map-380.webp"
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

            {/* No-JS fallback: link to Google Maps */}
            <noscript>
              <p className="mt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                  target="_blank" rel="noopener"
                  className="underline"
                >
                  Open in Google Maps
                </a>
              </p>
            </noscript>
          </div>

          {/* Social & Contact */}
          <div>
            <h2 className="font-semibold mb-4">Connect With Us</h2>
            <div className="flex space-x-4 mb-4 text-xl">
              <a href="#"><FaFacebookF aria-label="Facebook" className="hover:text-accent" /></a>
              <a href="#"><FaInstagram aria-label="Instagram" className="hover:text-accent" /></a>
              <a href="#"><FaLinkedinIn aria-label="LinkedIn" className="hover:text-accent" /></a>
            </div>
            <p>Working on a location now!</p>
            <p>(734) 215-7546</p>
            <p>Mon – Fri: 8 am – 6 pm</p>
          </div>
        </div>
        <p className="mt-10 text-center text-white/80 text-sm">
        © {new Date().getFullYear()} Stay in Motion Physical Therapy. All rights reserved.
      </p>
      </footer>

      <CallNowBar />
    </>
  );
}
