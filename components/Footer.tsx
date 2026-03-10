"use client";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            TravelQuest
          </h2>
          <p className="text-sm leading-relaxed">
            Discover amazing destinations around the world with our trusted
            travel services. We make your dream vacation simple and
            unforgettable.
          </p>

          <div className="flex gap-4 mt-6">
            <Facebook className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Destinations</li>
            <li className="hover:text-white cursor-pointer">Tours</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="text-white font-semibold mb-4">Popular Destinations</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Bali, Indonesia</li>
            <li className="hover:text-white cursor-pointer">Paris, France</li>
            <li className="hover:text-white cursor-pointer">Dubai, UAE</li>
            <li className="hover:text-white cursor-pointer">Maldives</li>
            <li className="hover:text-white cursor-pointer">Tokyo, Japan</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="flex items-center gap-3 mb-3 text-sm">
            <MapPin size={18} />
            <span>Colombo, Sri Lanka</span>
          </div>

          <div className="flex items-center gap-3 mb-3 text-sm">
            <Phone size={18} />
            <span>+94 71 234 5678</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Mail size={18} />
            <span>info@travelquest.com</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} TravelQuest. All rights reserved.
      </div>
    </footer>
  );
}