"use client"

import { useState } from "react"
import { registerUser } from "../../services/api"

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    await registerUser(form)

    alert("Registered successfully")

    window.location.href = "/login"
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button type="submit">
        Register
      </button>

    </form>
  )
}