// "use client"

// import { useState } from "react"
// import { loginUser } from "../../services/api"

// export default function Login() {

//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   })

//   const handleSubmit = async (e: React.FormEvent) => {

//     e.preventDefault()

//     const res = await loginUser(form)

//     localStorage.setItem("token", res.data.token)

//     window.location.href = "/"
//   }

//   return (
//     <form onSubmit={handleSubmit}>

//       <h2>Login</h2>

//       <input
//         placeholder="Email"
//         onChange={(e) =>
//           setForm({ ...form, email: e.target.value })
//         }
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) =>
//           setForm({ ...form, password: e.target.value })
//         }
//       />

//       <button type="submit">
//         Login
//       </button>

//     </form>
//   )
// }

"use client"

import Link from "next/link"
import { FaEnvelope, FaLock } from "react-icons/fa"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Travel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Card */}
      <div className="relative bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[90%] max-w-md border border-white/20">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>

        <p className="text-gray-200 text-center mb-8">
          Login to continue your travel journey
        </p>

        {/* Email */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-3 top-4 text-gray-300" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Password */}
        <div className="relative mb-3">
          <FaLock className="absolute left-3 top-4 text-gray-300" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <Link
            href="/forgot-password"
            className="text-sm text-yellow-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-200 mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}