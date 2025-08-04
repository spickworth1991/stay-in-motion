// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const NAV = [
  { name: 'Home',       to: '/' },
  { name: 'About',      to: '/about' },
  { name: 'Services',   to: '/services' },
  { name: 'FAQ',        to: '/faq' },
  { name: 'Insurance',  to: '/insurance' },
  { name: 'Resources',  to: '/resources' },
  { name: 'Contact',    to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`
          fixed w-full z-50 bg-white/20 backdrop-blur-lg shadow-md
          transition-all duration-300
          ${scrolled ? 'h-12' : 'h-16'}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 md:px-8">
          <Link to="/" className="flex items-center">
            <img
              src="/logo_navbar.png"
              alt="Logo"
              className={`
                object-contain transition-all duration-300
                ${scrolled ? 'h-6 w-6' : 'h-8 w-8'}
              `}
            />
            <span
              className={`
                ml-2 font-bold transition-all duration-300
                ${scrolled ? 'text-lg' : 'text-xl'}
                text-primary
              `}
            >
              Stay in Motion
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {NAV.map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`
                    relative transition-colors duration-200
                    ${pathname === item.to
                      ? 'text-accent font-semibold'
                      : 'text-gray-700 hover:text-accent'}
                  `}
                >
                  <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-accent after:to-primary after:w-0 hover:after:w-full after:transition-all after:duration-300">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-2xl text-primary"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Off-canvas Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs
          bg-white/90 backdrop-blur-lg shadow-xl
          transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-gray-600 hover:text-primary transition"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col items-start justify-center h-full px-6 space-y-6">
          {NAV.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`
                text-xl font-medium transition-colors duration-200
                ${pathname === item.to
                  ? 'text-accent'
                  : 'text-gray-700 hover:text-primary'}
              `}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="absolute bottom-8 left-6 flex space-x-4">
          <a href="#"><FaFacebookF className="hover:text-accent" /></a>
              <a href="#"><FaInstagram className="hover:text-accent" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-accent" /></a>
        </div>
      </aside>
    </>
  )
}
