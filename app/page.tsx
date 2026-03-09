"use client"

import { useEffect, useState } from "react"
import { getListings } from "../services/api"
import ListingCard from "../components/ListingCard"
import { Listing } from "../types/listing"

export default function Home() {

  const [listings, setListings] = useState<Listing[]>([])

  useEffect(() => {
    fetchListings()
  }, [])

  const fetchListings = async () => {
    const res = await getListings()
    setListings(res.data)
  }

  return (
    <div>

      <h1>Travel Experiences</h1>

      <div className="grid">
        {listings.map((listing) => (
          <ListingCard
            key={listing._id}
            listing={listing}
          />
        ))}
      </div>

    </div>
  )
}