// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import FAQ from "./pages/FAQ"
import Insurance from "./pages/Insurance"
import Resources from './pages/Resources'
import Careers from "./pages/Careers"; // <-- new import


export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cream dark:bg-gray-900 dark:text-gray-200 text-gray-800">
      <Navbar />
      <main className="flex-grow pt-16 ">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/services"   element={<Services />} />
          <Route path="/contact"    element={<Contact />} />
          <Route path="/faq"        element={<FAQ />} />
          <Route path="/insurance"  element={<Insurance />} />
          <Route path="/resources"  element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
