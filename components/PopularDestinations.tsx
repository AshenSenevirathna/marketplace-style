"use client";

import { motion } from "framer-motion";

const popularDestinations = [
  { name: "Bali, Indonesia", img: "/destinations/bali.jpg" },
  { name: "Paris, France", img: "/destinations/paris.jpg" },
  { name: "Dubai, UAE", img: "/destinations/dubai.jpg" },
  { name: "Maldives", img: "/destinations/maldives.jpg" },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                Global Favorites
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              Popular <span className="text-slate-300">Destinations</span>
            </h2>
          </div>
          <p className="max-w-sm text-slate-500 font-light leading-relaxed border-l border-slate-100 pl-6">
            Hand-picked escapes for the curious traveler. Explore the most sought-after corners of the map.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {popularDestinations.map((dest, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative group h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl shadow-slate-200/50"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden">
                   <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    Explore Now
                  </p>
                </div>
                
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2 drop-shadow-lg">
                  {dest.name}
                </h3>
                
                <div className="h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-700 ease-in-out rounded-full" />
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg 
                  className="w-5 h-5 text-white -rotate-45" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="out-line" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}