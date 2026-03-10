"use client"

import { useEffect, useState } from "react"
import { getListingById } from "../../../services/api"
import { useParams } from "next/navigation"

interface Listing {
  id: string
  title: string
  location: string
  description: string
  price: number
  imageUrl: string
  creator?: {
    name: string
  }
}

export default function ListingDetail() {
  const params = useParams()

  const [listing, setListing] = useState<Listing | null>(null)

  useEffect(() => {
    if (params?.id) {
      fetchListing()
    }
  }, [params])

  const fetchListing = async () => {
    try {
      const res = await getListingById(params.id as string)
      setListing(res.data)
    } catch (error) {
      console.error("Error fetching listing:", error)
    }
  }

  if (!listing) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    )
  }

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

      <p className="text-xl font-semibold mb-2">
        Price: ${listing.price}
      </p>

      <p className="text-sm text-gray-500">
        Created by {listing.creator?.name || "Unknown"}
      </p>

    </div>
  )
}



// "use client"

// import { useEffect, useState } from "react"
// import { getListingById } from "../../../services/api"
// import { useParams } from "next/navigation"
// //import { Listing } from "../../../types/listing"

// export default function ListingDetail() {

//   const params = useParams()

//   const [listing, setListing] = useState<Listing | null>(null)

//   useEffect(() => {
//     fetchListing()
//   }, [])

//   const fetchListing = async () => {

//     const res = await getListingById(params.id as string)

//     setListing(res.data)
//   }

//   if (!listing) return <p>Loading...</p>

//   return (
//     <div>

//       <img src={listing.imageUrl} width="500" />

//       <h1>{listing.title}</h1>

//       <h3>{listing.location}</h3>

//       <p>{listing.description}</p>

//       <p>Price: ${listing.price}</p>

//       <p>Created by {listing.creator?.name}</p>

//     </div>
//   )
// }