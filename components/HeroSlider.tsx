"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1470&q=80",
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000) 
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length)
  const nextSlide = () => setCurrent((current + 1) % images.length)

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={images[current]}
            alt="Travel Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-slate-900/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          key={`text-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="inline-block text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
            Unforgettable Journeys
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
            Explore The World <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
              With TravelQuest
            </span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Discover amazing destinations & book your dream vacation today with our curated experiences.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all shadow-2xl shadow-yellow-500/20 active:shadow-none"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 hover:bg-white/20 transition-all group"
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 hover:bg-white/20 transition-all group"
        >
          <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group relative py-4"
          >
            <div className={`h-[2px] transition-all duration-500 ${current === index ? "w-12 bg-yellow-500" : "w-8 bg-white/30 group-hover:bg-white/60"}`} />
          </button>
        ))}
      </div>

      <div className="hidden lg:block absolute left-10 bottom-10 z-20">
        <div className="flex flex-col gap-4">
           <div className="h-20 w-[1px] bg-white/20 mx-auto" />
           <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">Scroll Down</span>
        </div>
      </div>
    </section>
  )
}