"use client"

import { useState } from "react"
import { createListing } from "../../services/api"

export default function CreateListing() {

  const [form, setForm] = useState({
    title: "",
    location: "",
    imageUrl: "",
    description: "",
    price: ""
  })

  const submit = async (e: React.FormEvent) => {

    e.preventDefault()

    const token = localStorage.getItem("token") || ""

    await createListing(form, token)

    alert("Listing created")

    window.location.href = "/"
  }

  return (
    <form onSubmit={submit}>

      <h2>Create Experience</h2>

      <input
        placeholder="Title"
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        placeholder="Location"
        onChange={(e) =>
          setForm({ ...form, location: e.target.value })
        }
      />

      <input
        placeholder="Image URL"
        onChange={(e) =>
          setForm({ ...form, imageUrl: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <input
        placeholder="Price"
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
      />

      <button type="submit">
        Publish
      </button>

    </form>
  )
}