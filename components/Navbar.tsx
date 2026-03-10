"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    window.location.href = "/"
  }

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          TravelXP
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-blue-200 transition">
            Home
          </Link>
          <Link href="/create" className="text-white hover:text-blue-200 transition">
            Create Listing
          </Link>
          {!isLoggedIn && (
            <>
              <Link href="/login" className="text-white hover:text-blue-200 transition">
                Login
              </Link>
              <Link href="/register" className="text-white hover:text-blue-200 transition">
                Register
              </Link>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={logout}
              className="bg-white text-blue-900 px-4 py-1 rounded-lg font-semibold hover:bg-blue-100 transition"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 shadow-lg">
          <Link
            href="/"
            className="block px-5 py-3 text-white hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/create"
            className="block px-5 py-3 text-white hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Create Listing
          </Link>
          {!isLoggedIn && (
            <>
              <Link
                href="/login"
                className="block px-5 py-3 text-white hover:bg-blue-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-5 py-3 text-white hover:bg-blue-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={logout}
              className="w-full text-left px-5 py-3 text-white hover:bg-blue-700 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  )
}