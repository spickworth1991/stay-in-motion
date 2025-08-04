// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiBriefcase,
  FiHelpCircle,
  FiCreditCard,
  FiBookOpen,
  FiPhone,
  FiSun,
  FiMoon
} from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const NAV = [
  { name: 'Home',      to: '/',           icon: FiHome },
  { name: 'About',     to: '/about',      icon: FiUsers },
  { name: 'Services',  to: '/services',   icon: FiBriefcase },
  { name: 'FAQ',       to: '/faq',        icon: FiHelpCircle },
  { name: 'Insurance', to: '/insurance',  icon: FiCreditCard },
  { name: 'Resources', to: '/resources',  icon: FiBookOpen },
  { name: 'Contact',   to: '/contact',    icon: FiPhone },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 50))
    return () => window.removeEventListener('scroll', () => {})
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg
          shadow-md transition-all duration-300
          ${scrolled ? 'h-12' : 'h-16'}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 md:px-8">
          <Link to="/" className="flex items-center">
            <img
              src="/logo_navbar.png"
              alt="Logo"
              className={`${scrolled ? 'h-6 w-6' : 'h-8 w-8'} transition-all`}
            />
            <span
              className={`
                ml-2 font-bold transition-all
                ${scrolled ? 'text-lg' : 'text-xl'}
                text-primary dark:text-white
              `}
            >
              Stay in Motion
            </span>
          </Link>

          <ul className="hidden md:flex space-x-6">
            {NAV.map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`
                    flex items-center space-x-1
                    transition-colors duration-200
                    ${pathname === item.to
                      ? 'text-accent font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-primary'}
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
            {/* Dark mode toggle */}
            <li>
              <button
                onClick={() => setDark(d => !d)}
                className="p-2 text-xl text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-primary transition"
                aria-label="Toggle dark mode"
              >
                {dark ? <FiSun /> : <FiMoon />}
              </button>
            </li>
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
          bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-xl
          transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col justify-between
        `}
      >
        <div>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition"
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>
          <nav className="px-6 space-y-6">
            {NAV.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  flex items-center space-x-2 text-xl font-medium
                  transition-colors duration-200
                  ${pathname === item.to
                    ? 'text-accent'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent'}
                `}
                onClick={() => setOpen(false)}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.name}</span>
              </Link>
            ))}
            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(d => !d)}
              className="flex items-center space-x-2 text-xl p-2 mt-4 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-primary transition"
            >
              {dark ? <FiSun className="w-6 h-6"/> : <FiMoon className="w-6 h-6"/>}
              <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </nav>
        </div>

        {/* Social Icons at bottom */}
        <div className="px-6 pb-8 flex space-x-4">
          <a href="#" className="text-accent hover:text-primary transition text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-accent hover:text-primary transition text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-accent hover:text-primary transition text-2xl">
            <FaLinkedinIn />
          </a>
        </div>
      </aside>
    </>
  )
}
