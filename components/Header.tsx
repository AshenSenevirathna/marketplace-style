
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaPaperPlane,
  FaUser,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPlusCircle,
  FaThList
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">

        <Link href="/" className="group flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform duration-300">
            <FaPaperPlane className="text-white text-lg md:text-xl" />
          </div>

          <span
            className={`text-2xl font-black tracking-tighter transition-colors ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Travel<span className="text-blue-600">Quest</span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-10 items-center">

          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-600 ${
                scrolled ? "text-slate-700" : "text-white/90 hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              Experiences
              <FaChevronDown
                className={`text-[10px] transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full -left-4 mt-4 w-56 bg-white shadow-xl shadow-blue-900/10 rounded-2xl border border-slate-100 p-2 transition-all duration-300 ${
                dropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <Link
                href="/create"
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition font-medium"
              >
                <FaPlusCircle className="text-blue-500" />
                Create Experience
              </Link>

              <Link
                href="/my-list"
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition font-medium"
              >
                <FaThList className="text-blue-500" />
                My Listings
              </Link>
            </div>
          </div>

          <Link
            href="/login"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95 ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                : "bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
            }`}
          >
            <FaUser size={12} /> Login
          </Link>
        </nav>

        <button
          className={`md:hidden p-2 rounded-xl transition-colors ${
            scrolled
              ? "text-slate-900 bg-slate-100"
              : "text-white bg-white/20 backdrop-blur-md"
          }`}
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[110] transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[120] transform transition-transform duration-500 ease-out p-8 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="text-xl font-black tracking-tighter text-slate-900">
            Travel<span className="text-blue-600">Quest</span>
          </span>

          <button
            className="p-3 bg-slate-100 rounded-full text-slate-900 hover:rotate-90 transition-transform"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col space-y-6">
          {["Home", "About", "Contact", "Login"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Experiences
            </p>

            <Link
              href="/create"
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-semibold text-blue-600"
            >
              Create Experience
            </Link>

            <Link
              href="/my-list"
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-semibold text-blue-600"
            >
              My Listings
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}