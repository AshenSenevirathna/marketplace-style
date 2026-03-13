import { ArrowUpRight, Map } from "lucide-react";

const featuredTours = [
  { name: "Beach Paradise", price: "$1,200", img: "/tours/beach.jpg" },
  { name: "City Explorer", price: "$900", img: "/tours/city.jpg" },
  { name: "Mountain Adventure", price: "$1,500", img: "/tours/mountain.jpg" },
];

export default function FeaturedTours() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">
                Top Rated
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured <span className="text-slate-400">Tours</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-light leading-relaxed">
            Discover our hand-picked selection of the world's most breathtaking journeys, curated for the modern adventurer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredTours.map((tour, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={tour.img} 
                  alt={tour.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/20">
                    <p className="text-slate-900 font-black text-lg">{tour.price}</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tour.name}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Map size={14} className="text-blue-500" />
                      <span>Global Itinerary</span>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}