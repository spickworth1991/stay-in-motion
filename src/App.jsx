import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Insurance from "./pages/Insurance";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/services"element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq"     element={<FAQ />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/blog"    element={<Blog />} />
          {/* you can add dynamic post route: /blog/:slug */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
