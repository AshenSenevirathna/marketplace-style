import Link from "next/link"
import { Listing } from "../types/listing"

interface Props {
  listing: Listing
}

export default function ListingCard({ listing }: Props) {

  return (
    <div className="card">

      <img src={listing.imageUrl} alt={listing.title} />

      <h3>{listing.title}</h3>

      <p>{listing.location}</p>

      <p>{listing.description}</p>

      <small>
        By {listing.creator?.name}
      </small>

      <Link href={`/listing/${listing._id}`}>
        View Details
      </Link>

    </div>
  )
}