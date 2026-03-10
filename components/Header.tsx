"use client"

import Link from "next/link"
import { useState } from "react"
import { FaHome, FaPaperPlane, FaUser, FaBars, FaTimes, FaInfoCircle, FaEnvelope } from "react-icons/fa"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-5">

        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-blue-900 tracking-wide flex items-center gap-2">
          <FaPaperPlane className="text-yellow-500" /> TravelXP
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="flex items-center gap-1 text-blue-900 hover:text-yellow-500 transition">
           Home
          </Link>
          <Link href="/about" className="flex items-center gap-1 text-blue-900 hover:text-yellow-500 transition">
            About
          </Link>
          <Link href="/contact" className="flex items-center gap-1 text-blue-900 hover:text-yellow-500 transition">
           Contact
          </Link>
          <Link href="/login" className="flex items-center gap-1 text-blue-900 hover:text-yellow-500 transition">
            <FaUser /> Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (slide from right) */}
<div
  className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Close button */}
  <button
    className="absolute top-4 right-4 text-blue-900 text-2xl focus:outline-none"
    onClick={() => setMenuOpen(false)}
  >
    <FaTimes />
  </button>

  {/* Menu links */}
  <nav className="flex flex-col mt-16 space-y-4 px-6">
    <Link
      href="/"
      className="flex items-center gap-2 text-blue-900 hover:text-yellow-500 transition"
      onClick={() => setMenuOpen(false)}
    >
       Home
    </Link>
    <Link
      href="/about"
      className="flex items-center gap-2 text-blue-900 hover:text-yellow-500 transition"
      onClick={() => setMenuOpen(false)}
    >
       About
    </Link>
    <Link
      href="/contact"
      className="flex items-center gap-2 text-blue-900 hover:text-yellow-500 transition"
      onClick={() => setMenuOpen(false)}
    >
     Contact
    </Link>
    <Link
      href="/login"
      className="flex items-center gap-2 text-blue-900 hover:text-yellow-500 transition"
      onClick={() => setMenuOpen(false)}
    >
      <FaUser /> Login
    </Link>
  </nav>
</div>
      
    </header>
  )
}