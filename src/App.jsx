// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Insurance = lazy(() => import("./pages/Insurance"));
const Resources = lazy(() => import("./pages/Resources"));
const Careers = lazy(() => import("./pages/Careers"));

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cream dark:bg-gray-900 dark:text-gray-200 text-gray-800">
      <Navbar />
      <main className="flex-grow pt-16 pb-16 md:pb-0">
        <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/services"   element={<Services />} />
            <Route path="/contact"    element={<Contact />} />
            <Route path="/faq"        element={<FAQ />} />
            <Route path="/insurance"  element={<Insurance />} />
            <Route path="/resources"  element={<Resources />} />
            <Route path="/careers"    element={<Careers />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
