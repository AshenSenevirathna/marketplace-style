import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="w-full bg-[#fdfdfd] selection:bg-blue-100 selection:text-blue-900">
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                    alt="Contact Travel"
                />
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-transparent"></div>

                <div className="relative z-10 text-white px-6 max-w-7xl w-full">
                    <div className="max-w-2xl text-center md:text-left">
                        <span className="uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm font-semibold mb-3 md:mb-4 block text-blue-300">
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight">
                            Let’s Start Your <br />
                            <span className="text-yellow-400">Next Chapter.</span>
                        </h1>
                        <p className="text-base md:text-xl font-light opacity-90 leading-relaxed max-w-md mx-auto md:mx-0">
                            Whether you're looking for a hidden beach in Bali or a trek in the Alps, 
                            our experts are a message away.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-6 relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    <div className="lg:col-span-5 space-y-10 md:space-y-12 order-2 lg:order-1">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Contact Information</h2>
                            <p className="text-slate-500 text-base md:text-lg">
                                Have a specific inquiry or just want to say hi? Fill out the form or use our direct channels.
                            </p>
                        </div>

                        <div className="space-y-6 md:space-y-8 max-w-md mx-auto lg:mx-0">
                            {[
                                { icon: <FaPhoneAlt />, title: "Call Us", detail: "+94 77 123 4567", sub: "Mon-Fri, 9am - 6pm" },
                                { icon: <FaEnvelope />, title: "Email Us", detail: "concierge@travelquest.com", sub: "24/7 Support" },
                                { icon: <FaMapMarkerAlt />, title: "Visit Us", detail: "123 Ocean Tower, Colombo 03", sub: "Sri Lanka" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-6 group">
                                    <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                        <p className="text-blue-600 font-medium break-all">{item.detail}</p>
                                        <p className="text-slate-400 text-sm">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-slate-100 flex flex-col items-center lg:items-start">
                            <h4 className="font-semibold text-slate-900 mb-4">Follow our journey</h4>
                            <div className="flex space-x-4">
                                {[<FaInstagram />, <FaTwitter />, <FaLinkedin />].map((soc, i) => (
                                    <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all active:scale-90">
                                        {soc}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="bg-white p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-50 relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100/50 blur-3xl rounded-full"></div>
                            
                            <form className="space-y-5 md:space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm md:text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Destination of Interest</label>
                                    <select className="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-500 text-sm md:text-base appearance-none">
                                        <option>Select a region</option>
                                        <option>Europe</option>
                                        <option>Asia & Pacific</option>
                                        <option>Americas</option>
                                        <option>Africa & Middle East</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Your Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your dream trip..."
                                        className="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm md:text-base"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-base md:text-lg hover:bg-blue-600 transition-all active:scale-[0.98] shadow-lg">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 text-center md:text-left">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Our Global Headquarters</h2>
                            <p className="text-slate-500 italic text-sm md:text-base">Drop by for a coffee and a chat about the world.</p>
                        </div>
                        <button className="text-blue-600 font-bold hover:underline text-sm md:text-base">Open in Google Maps →</button>
                    </div>
                    <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl border-4 md:border-8 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58290458638!2d79.78616421446705!3d6.921837369620437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a70ad%3A0x3964c5717b118c5a!2sColombo!5e0!3m2!1sen!2slk!4v1647450000000!5m2!1sen!2slk"
                            className="w-full h-[350px] md:h-[500px] grayscale hover:grayscale-0 transition-all duration-700"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-blue-600 text-white text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 italic font-serif leading-tight">"To travel is to live."</h2>
                    <p className="mb-8 md:mb-10 text-blue-100 text-base md:text-lg px-4">
                        Our team is ready to curate your next escape. Experience the world like never before.
                    </p>
                    <button className="bg-white text-blue-600 px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg active:scale-95 transition-all">
                        Book a Consultation
                    </button>
                </div>
            </section>
        </div>
    );
}