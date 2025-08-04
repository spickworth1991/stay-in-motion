// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import CallNowBar from "./CallNowBar";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary text-white py-12 px-4 md:px-8 mb-16 md:mb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-accent">Home</a></li>
              <li><a href="/about" className="hover:text-accent">About</a></li>
              <li><a href="/services" className="hover:text-accent">Services</a></li>
              <li><a href="/contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>

          {/* Map Embed */}
          <div>
            <h4 className="font-semibold mb-4">Our Location</h4>
            <iframe
              title="Clinic Map"
              src="https://maps.google.com/maps?q=1550%20Harrison%20St%2C%20Garden%20City%2C%20USA&z=15&output=embed"
              className="w-full h-40 rounded-lg border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4 text-xl">
              <a href="#"><FaFacebookF className="hover:text-accent" /></a>
              <a href="#"><FaInstagram className="hover:text-accent" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-accent" /></a>
            </div>
            <p>1550 Harrison St, Garden City, USA</p>
            <p>(555) 123-4567</p>
            <p>Mon – Fri: 8 am – 6 pm</p>
          </div>
        </div>
      </footer>

      {/* Mobile “Call Now” bar */}
      <CallNowBar />
    </>
  );
}
