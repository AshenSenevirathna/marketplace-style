"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80", // tropical beach
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80", // mountain adventure
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1470&q=80", // city skyline
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  // auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length)
  const nextSlide = () => setCurrent((current + 1) % images.length)

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* Image Slider */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="Travel Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-5">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Explore The World With TravelQuest
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6">
          Discover amazing destinations & book your dream vacation today
        </p>
        <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Get Started
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition"
      >
        <FaArrowRight />
      </button>

      {/* Bottom Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-white/50 cursor-pointer"
            animate={{
              scale: current === index ? 1.5 : 1,
              backgroundColor: current === index ? "#FACC15" : "rgba(255,255,255,0.5)",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  )
}