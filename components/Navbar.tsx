"use client"

import Link from "next/link"

export default function Navbar() {

  const logout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  return (
    <nav className="navbar">

      <Link href="/">Home</Link>

      <div className="nav-links">
        <Link href="/create">Create Listing</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>

        <button onClick={logout}>
          Logout
        </button>
      </div>

    </nav>
  )
}