"use client"

import { useState } from "react"
import { loginUser } from "../../services/api"

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    const res = await loginUser(form)

    localStorage.setItem("token", res.data.token)

    window.location.href = "/"
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Login</h2>

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
        Login
      </button>

    </form>
  )
}