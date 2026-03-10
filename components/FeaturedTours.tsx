const featuredTours = [
  { name: "Beach Paradise", price: "$1,200", img: "/tours/beach.jpg" },
  { name: "City Explorer", price: "$900", img: "/tours/city.jpg" },
  { name: "Mountain Adventure", price: "$1,500", img: "/tours/mountain.jpg" },
];

export default function FeaturedTours(){
    return(
        <section className="bg-gray-100 py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Tours</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredTours.map((tour, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">
                <img src={tour.img} alt={tour.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                  <p className="text-yellow-500 font-bold">{tour.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}