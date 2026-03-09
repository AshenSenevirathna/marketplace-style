"use client"

import { useEffect, useState } from "react"
import { getListingById } from "../../../services/api"
import { useParams } from "next/navigation"
//import { Listing } from "../../../types/listing"

export default function ListingDetail() {

  const params = useParams()

  const [listing, setListing] = useState<Listing | null>(null)

  useEffect(() => {
    fetchListing()
  }, [])

  const fetchListing = async () => {

    const res = await getListingById(params.id as string)

    setListing(res.data)
  }

  if (!listing) return <p>Loading...</p>

  return (
    <div>

      <img src={listing.imageUrl} width="500" />

      <h1>{listing.title}</h1>

      <h3>{listing.location}</h3>

      <p>{listing.description}</p>

      <p>Price: ${listing.price}</p>

      <p>Created by {listing.creator?.name}</p>

    </div>
  )
}