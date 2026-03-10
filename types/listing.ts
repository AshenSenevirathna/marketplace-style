// types/listing.ts
export interface Listing {
  _id: string          // MongoDB ID
  title: string
  location: string
  description: string
  price: number
  imageUrl: string
  creator?: {
    name: string
  }
}