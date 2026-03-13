"use client";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-slate-400 pt-20 pb-10 px-6 border-t border-slate-800">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Globe className="text-white w-5 h-5" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Travel<span className="text-blue-500">Quest</span>
            </h2>
          </div>
          
          <p className="text-sm leading-relaxed font-light max-w-xs">
            Discover amazing destinations around the world with our trusted
            travel services. We make your dream vacation simple and
            unforgettable.
          </p>

          <div className="flex gap-4">
            {[
              { icon: <Facebook size={18} />, label: "Facebook" },
              { icon: <Instagram size={18} />, label: "Instagram" },
              { icon: <Twitter size={18} />, label: "Twitter" }
            ].map((social, idx) => (
              <div 
                key={idx}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-7">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm font-medium">
            {['Home', 'Destinations', 'Tours', 'About Us', 'Contact'].map((item) => (
              <li key={item} className="hover:text-blue-500 hover:translate-x-1 transition-all cursor-pointer inline-block w-full">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-7">
            Trending
          </h3>
          <ul className="space-y-4 text-sm font-medium">
            {['Bali, Indonesia', 'Paris, France', 'Dubai, UAE', 'Maldives', 'Tokyo, Japan'].map((dest) => (
              <li key={dest} className="hover:text-white transition-colors cursor-pointer flex items-center group">
                <span className="w-0 group-hover:w-2 h-[1px] bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                {dest}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-7">
            Contact
          </h3>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4 text-sm group cursor-pointer">
              <div className="mt-1 p-2 rounded-lg bg-slate-800/50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <MapPin size={16} />
              </div>
              <span className="group-hover:text-white transition-colors">Colombo, Sri Lanka</span>
            </div>

            <div className="flex items-start gap-4 text-sm group cursor-pointer">
              <div className="mt-1 p-2 rounded-lg bg-slate-800/50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Phone size={16} />
              </div>
              <span className="group-hover:text-white transition-colors">+94 71 234 5678</span>
            </div>

            <div className="flex items-start gap-4 text-sm group cursor-pointer">
              <div className="mt-1 p-2 rounded-lg bg-slate-800/50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Mail size={16} />
              </div>
              <span className="group-hover:text-white transition-colors">info@travelquest.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/60 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wider uppercase">
        <p>© {new Date().getFullYear()} TravelQuest. All rights reserved.</p>
        <div className="flex gap-8 text-slate-500">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}