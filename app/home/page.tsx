"use client";

import Footer from "@/components/Footer";
import { MapPin, ArrowRight, Mail } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import PopularDestinations from "@/components/PopularDestinations";
import FeaturedTours from "@/components/FeaturedTours";
import ListingCard from "@/components/ListingCard";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#FDFDFD]">
      <section className="relative">
        <HeroSlider />
      </section>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <PopularDestinations />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <FeaturedTours />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                Editor's Choice
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Hand-picked <span className="text-slate-400">Experiences</span>
              </h2>
            </div>
            <button className="hidden md:flex items-center text-slate-900 font-bold hover:text-blue-600 transition group">
              View All Listings 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            <ListingCard />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 md:p-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-8 rotate-3 shadow-lg shadow-yellow-500/20">
              <Mail className="text-slate-900 w-8 h-8" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Subscribe for <span className="text-yellow-500 font-serif italic">Travel Deals</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 max-w-xl font-light">
              Get the latest travel news, discounts, and curated offers directly to your inbox.
            </p>

            <div className="w-full max-w-lg">
              <div className="flex flex-col sm:flex-row gap-3 bg-white/5 p-2 rounded-2xl md:rounded-full border border-white/10 backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-white px-6 py-4 outline-none flex-1 placeholder:text-slate-500 text-base"
                />
                <button className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl md:rounded-full font-bold hover:bg-yellow-400 active:scale-95 transition-all shadow-xl shadow-yellow-500/10">
                  Subscribe
                </button>
              </div>
              <p className="text-slate-500 text-xs mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}