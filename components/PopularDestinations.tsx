"use client"

import React, { useEffect, useState } from "react"
//import { getListings } from "../services/api"
import { Listing } from "../types/listing"
import ListingCard from "./ListingCard"

export default function PopularDestinations() {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getListings() // ✅ Listing[]
  //       setListings(res)                // ✅ DO NOT use .data
  //     } catch (err) {
  //       console.error(err)
  //       setError("Failed to load destinations.")
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])

  if (loading) return <div className="text-center py-10">Loading...</div>
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map(listing => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </section>
  )
}

// "use client"

// import React, { useEffect, useState } from "react"
// import { getListings } from "../services/api"
// import { Listing } from "../types/listing"
// import ListingCard from "../components/ListingCard"

// export default function PopularDestinations() {
//   const [listings, setListings] = useState<Listing[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState("")

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await getListings()   // res is Listing[]
//         setListings(res)                  // ✅ remove .data
//       } catch (err) {
//         console.error(err)
//         setError("Failed to load destinations.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [])

//   if (loading) return <div className="text-center py-10">Loading...</div>
//   if (error) return <div className="text-center py-10 text-red-500">{error}</div>

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-10">
//       <h2 className="text-3xl font-bold mb-8 text-center">Popular Destinations</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {listings.map(listing => (
//           <ListingCard key={listing._id} listing={listing} />
//         ))}
//       </div>
//     </section>
//   )
// }

// "use client"

// import React, { useEffect, useState } from "react"
// import { getListings } from "../services/api"
// import { Listing } from "../types/listing"
// import ListingCard from "./ListingCard"

// export default function PopularDestinations() {
//   const [listings, setListings] = useState<Listing[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState("")

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getListings() // Listing[]
//         setListings(data)                // ✅ no .data here
//       } catch (err) {
//         console.error(err)
//         setError("Failed to load destinations.")
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchData()
//   }, [])

//   if (loading) return <div className="text-center py-10">Loading...</div>
//   if (error) return <div className="text-center py-10 text-red-500">{error}</div>

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-10">
//       <h2 className="text-3xl font-bold mb-8 text-center">Popular Destinations</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {listings.map(listing => (
//           <ListingCard key={listing._id} listing={listing} />
//         ))}
//       </div>
//     </section>
//   )
// }

// // "use client";

// // import { section } from "framer-motion/client";

// // const popularDestinations = [
// //   { name: "Bali, Indonesia", img: "/destinations/bali.jpg" },
// //   { name: "Paris, France", img: "/destinations/paris.jpg" },
// //   { name: "Dubai, UAE", img: "/destinations/dubai.jpg" },
// //   { name: "Maldives", img: "/destinations/maldives.jpg" },
// // ];

// // export default function PopularDestinations() {
// //   return (
// //     <section className="max-w-7xl mx-auto py-16 px-5" >
// //       <h2 className="text-3xl font-bold mb-8 text-gray-800">Popular Destinations</h2>
// //       <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
// //         {popularDestinations.map((dest, i) => (
// //           <div key={i} className="relative group rounded-lg overflow-hidden cursor-pointer">
// //             <img src={dest.img} alt={dest.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
// //             <div className="absolute inset-0 bg-black/30 flex items-end p-4">
// //               <h3 className="text-white text-lg font-semibold">{dest.name}</h3>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section >
// //   )
// // }