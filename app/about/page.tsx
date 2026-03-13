import React from 'react';

export default function About() {
  return (
    <div className="w-full bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Serene Travel Landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50/20"></div>

        <div className="relative z-10 text-white px-6 text-center max-w-4xl">
          <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-medium mb-3 md:mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-8xl font-extrabold mb-4 md:mb-6 tracking-tight">
            About <span className="text-blue-400">TravelQuest</span>
          </h1>
          <p className="text-base md:text-2xl font-light leading-relaxed opacity-90 max-w-md md:max-w-none mx-auto">
            We curate soulful journeys for the modern explorer, turning "someday" into 
            unforgettable reality.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto -mt-12 md:-mt-16 relative z-20 px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-white/20">
          {[
            { label: 'Destinations', val: '150+' },
            { label: 'Travelers', val: '50k+' },
            { label: 'Guides', val: '200' },
            { label: 'Awards', val: '12' },
          ].map((stat, i) => (
            <div key={i} className="text-center py-2 md:py-0">
              <div className="text-xl md:text-3xl font-bold text-blue-600">{stat.val}</div>
              <div className="text-[10px] md:text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative group lg:order-first">
            <div className="absolute -inset-2 md:-inset-4 bg-blue-100 rounded-2xl md:rounded-3xl -rotate-1 md:-rotate-2"></div>
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
              className="relative rounded-xl md:rounded-2xl shadow-2xl object-cover h-[300px] md:h-[500px] w-full"
              alt="The Journey"
            />
          </div>

          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              A decade of crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                meaningful adventures.
              </span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                TravelQuest began in a small apartment with a single map and a bold vision: 
                to bridge the gap between tourist traps and authentic cultural immersion.
              </p>
              <p>
                Today, we operate as a global community of explorers. We design experiences 
                that challenge your perspective and nourish your soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why the world chooses us</h2>
            <p className="text-slate-400 text-base md:text-lg">Excellence in every itinerary.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { title: 'Best Destinations', icon: '🌍', desc: 'Hand-picked locales that offer more than just a photo op.' },
              { title: 'Seamless Booking', icon: '✈️', desc: 'Concierge-level service from the moment you click "Inquire".' },
              { title: 'Trusted Guides', icon: '⭐', desc: 'Local experts who know the hidden alleys and untold stories.' },
            ].map((feature, i) => (
              <div key={i} className="p-8 md:p-10 rounded-2xl md:rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl mb-4 md:mb-6">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl md:rounded-[2rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 relative z-10">
            Ready to write your <br className="hidden md:block" /> next chapter?
          </h2>
          <p className="text-blue-100 text-sm md:text-lg mb-8 md:mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
            Join 50,000+ explorers already discovering the extraordinary. Your journey starts now.
          </p>
          <button className="relative z-10 bg-white text-blue-700 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg active:scale-95 transition-all shadow-xl">
            Explore Destinations
          </button>
        </div>
      </section>
    </div>
  );
}