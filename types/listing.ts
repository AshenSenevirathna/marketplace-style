// types/listing.ts
export interface Listing {
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