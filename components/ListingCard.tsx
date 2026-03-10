// components/ListingCard.tsx
import React from "react"
import { Listing } from "../types/listing"
import Link from "next/link"

interface Props {
  listing: Listing
}

const ListingCard: React.FC<Props> = ({ listing }) => {
  return (
    <Link href={`/listing/${listing._id}`}>
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-2">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-2">{listing.title}</h2>
        <p className="text-gray-600">{listing.location}</p>
        <p className="text-lg font-semibold mt-1">${listing.price}</p>
      </div>
    </Link>
  )
}

export default ListingCard

// import Link from "next/link"
// import { Listing } from "../types/listing"

// interface Props {
//   listing: Listing
// }

// export default function ListingCard({ listing }: Props) {

//   return (
//     <div className="card">

//       <img src={listing.imageUrl} alt={listing.title} />

//       <h3>{listing.title}</h3>

//       <p>{listing.location}</p>

//       <p>{listing.description}</p>

//       <small>
//         By {listing.creator?.name}
//       </small>

//       <Link href={`/listing/${listing._id}`}>
//         View Details
//       </Link>

//     </div>
//   )
// }