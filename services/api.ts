// services/api.ts
import axios from "axios"
import { Listing } from "../types/listing"

export const getListings = async (): Promise<Listing[]> => {
  const res = await axios.get("/api/listings")
  return res.data
}

export const getListingById = async (id: string): Promise<{ data: Listing }> => {
  const res = await axios.get(`/api/listings/${id}`)
  return res.data
}

// import axios from "axios"

// const API = axios.create({
//   baseURL: "http://localhost:5000/api"
// })

// export const registerUser = (data: any) =>
//   API.post("/auth/register", data)

// export const loginUser = (data: any) =>
//   API.post("/auth/login", data)

// export const getListings = () =>
//   API.get("/listings")

// export const getListingById = (id: string) =>
//   API.get(`/listings/${id}`)

// export const createListing = (data: any, token: string) =>
//   API.post("/listings", data, {
//     headers: { Authorization: `Bearer ${token}` }
//   })