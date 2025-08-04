// src/components/Navbar.jsx
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

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
  const { pathname } = useLocation()

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex h-full items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center">
            <img src="/logo_navbar.png" alt="" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-primary">
              Stay in Motion
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`transition hover:text-accent ${
                    pathname === item.to
                      ? 'text-accent font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-2xl text-primary"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Off-canvas Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-lg font-medium text-gray-700 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

    </>
  )
}
