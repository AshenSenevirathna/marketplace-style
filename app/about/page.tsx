export default function About() {
    return (
        <div className="w-full">
            <section className="relative h-[60vh] flex items-center justify-center text-center">
                <img
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Travel"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        About TravelQuest
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl">
                        We help travelers discover the most beautiful destinations in the
                        world and create unforgettable experiences.
                    </p>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

                    <img
                        src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
                        className="rounded-2xl shadow-lg"
                        alt="Travel Story"
                    />

                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Our Journey
                        </h2>

                        <p className="text-gray-600 mb-4">
                            TravelQuest started with one mission — to make travel easy,
                            inspiring, and accessible for everyone.
                        </p>

                        <p className="text-gray-600 mb-4">
                            From breathtaking beaches to vibrant cities, we connect
                            travelers with unforgettable experiences across the globe.
                        </p>

                        <p className="text-gray-600">
                            Our platform helps thousands of explorers find destinations,
                            tours, and adventures tailored to their dreams.
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-bold mb-12 text-gray-800">
                        Why Travel With Us
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold mb-3">
                                🌍 Best Destinations
                            </h3>
                            <p className="text-gray-600">
                                Discover hand-picked destinations from around the world.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold mb-3">
                                ✈️ Easy Booking
                            </h3>
                            <p className="text-gray-600">
                                Plan your perfect trip with our simple booking system.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold mb-3">
                                ⭐ Trusted Guides
                            </h3>
                            <p className="text-gray-600">
                                Experience tours led by expert travel guides.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            <section className="py-20 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                        Creating Memories Around The World
                    </h2>

                    <p className="text-gray-600 text-lg">
                        TravelQuest helps travelers explore new cultures, breathtaking
                        landscapes, and unforgettable adventures. Whether you're
                        searching for relaxing beaches or thrilling mountain treks,
                        we bring your dream journey to life.
                    </p>

                </div>
            </section>

            <section className="py-20 bg-blue-900 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Start Your Journey Today
                </h2>

                <p className="mb-8 text-lg">
                    Discover amazing destinations and plan your next adventure with us.
                </p>

                <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
                    Explore Destinations
                </button>
            </section>
        </div>
    )
}