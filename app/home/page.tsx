"use client";
import Footer from "@/components/Footer";
// replace with your travel hero image
import { MapPin, ArrowRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import PopularDestinations from "@/components/PopularDestinations";
import FeaturedTours from "@/components/FeaturedTours";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSlider/>

      {/* Popular Destinations */}
      <PopularDestinations/>

      {/* Featured Tours */}
      <FeaturedTours/>

      {/* Newsletter / Call To Action */}
      <section className="py-16 px-5 bg-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe for Travel Deals</h2>
          <p className="mb-6">Get the latest travel news, discounts, and offers directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg w-full sm:w-auto flex-1"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}