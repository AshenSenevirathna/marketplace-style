import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactPage() {
    return (
        <div className="w-full">
            <section className="relative h-[50vh] flex items-center justify-center text-center">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Contact Travel"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Contact TravelQuest
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Have questions about your next adventure? Our travel experts are
                        ready to help you plan the perfect trip.
                    </p>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

                    <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
                        <FaPhoneAlt className="text-blue-600 text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                        <p className="text-gray-600">+94 77 123 4567</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
                        <FaEnvelope className="text-blue-600 text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold text-xl mb-2">Email</h3>
                        <p className="text-gray-600">support@travelquest.com</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
                        <FaMapMarkerAlt className="text-blue-600 text-3xl mx-auto mb-4" />
                        <h3 className="font-semibold text-xl mb-2">Location</h3>
                        <p className="text-gray-600">Colombo, Sri Lanka</p>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

                    <img
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
                        className="rounded-2xl shadow-lg"
                        alt="Travel planning"
                    />

                    <form className="bg-white p-8 rounded-2xl shadow-lg space-y-4">

                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Send Us a Message
                        </h2>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Destination Interested"
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <textarea
                            rows={4}
                            placeholder="Your Message"
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        ></textarea>

                        <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                            Send Message
                        </button>

                    </form>

                </div>
            </section>

            <section className="py-20 bg-white text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Find Us
                </h2>

                <div className="max-w-5xl mx-auto px-6">
                    <iframe
                        src="https://maps.google.com/maps?q=Colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-[400px] rounded-2xl shadow-lg"
                    ></iframe>
                </div>
            </section>

            <section className="py-20 bg-blue-900 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Ready For Your Next Adventure?
                </h2>

                <p className="mb-8 text-lg">
                    Let TravelQuest help you plan the perfect journey.
                </p>

                <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
                    Explore Destinations
                </button>
            </section>
        </div>
    )
}