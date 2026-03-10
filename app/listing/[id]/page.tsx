"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { getListingById } from "../../../services/api"
import { Listing } from "../../../types/listing"

export default function ListingDetail() {
  const params = useParams()
  const [listing, setListing] = useState<Listing | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id
    if (id) fetchListing(id)
  }, [params])

  const fetchListing = async (id: string) => {
    try {
      const res = await getListingById(id)
      setListing(res.data)
    } catch (err) {
      console.error("Failed to fetch listing:", err)
      setError("Failed to load listing.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="text-center py-20">Loading...</div>
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>
  if (!listing) return <div className="text-center py-20">No listing found.</div>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={listing.imageUrl}
        alt={listing.title}
        className="w-full h-[400px] object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
      <h3 className="text-gray-600 text-lg mb-4">{listing.location}</h3>
      <p className="text-gray-700 mb-4">{listing.description}</p>
      <p className="text-xl font-semibold mb-2">Price: ${listing.price}</p>
      <p className="text-sm text-gray-500">
        Created by {listing.creator?.name || "Unknown"}
      </p>
    </div>
  )
}

// "use client"

// import { useEffect, useState } from "react"
// import { useParams } from "next/navigation"
// import { getListingById } from "../../../services/api"
// import { Listing } from "../../../types/listing"

// export default function ListingDetail() {
//   const params = useParams()
//   const [listing, setListing] = useState<Listing | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState("")

//   useEffect(() => {
//     if (params?.id) fetchListing(params.id)
//   }, [params])

//   const fetchListing = async (id: string) => {
//     try {
//       const res = await getListingById(id)
//       setListing(res.data)
//     } catch (err) {
//       console.error("Failed to fetch listing:", err)
//       setError("Failed to load listing.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (loading) return <div className="text-center py-20">Loading...</div>
//   if (error) return <div className="text-center py-20 text-red-500">{error}</div>
//   if (!listing) return <div className="text-center py-20">No listing found.</div>

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <img
//         src={listing.imageUrl}
//         alt={listing.title}
//         className="w-full h-[400px] object-cover rounded-lg mb-6"
//       />
//       <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
//       <h3 className="text-gray-600 text-lg mb-4">{listing.location}</h3>
//       <p className="text-gray-700 mb-4">{listing.description}</p>
//       <p className="text-xl font-semibold mb-2">Price: ${listing.price}</p>
//       <p className="text-sm text-gray-500">
//         Created by {listing.creator?.name || "Unknown"}
//       </p>
//     </div>
//   )
// }






// // // "use client"

// // // import { useEffect, useState } from "react"
// // // import { getListingById } from "../../../services/api"
// // // import { useParams } from "next/navigation"
// // // //import { Listing } from "../../../types/listing"

// // // export default function ListingDetail() {

// // //   const params = useParams()

// // //   const [listing, setListing] = useState<Listing | null>(null)

// // //   useEffect(() => {
// // //     fetchListing()
// // //   }, [])

// // //   const fetchListing = async () => {

// // //     const res = await getListingById(params.id as string)

// // //     setListing(res.data)
// // //   }

// // //   if (!listing) return <p>Loading...</p>

// // //   return (
// // //     <div>

// // //       <img src={listing.imageUrl} width="500" />

// // //       <h1>{listing.title}</h1>

// // //       <h3>{listing.location}</h3>

// // //       <p>{listing.description}</p>

// // //       <p>Price: ${listing.price}</p>

// // //       <p>Created by {listing.creator?.name}</p>

// // //     </div>
// // //   )
// // // }