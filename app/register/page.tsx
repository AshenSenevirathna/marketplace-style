// "use client"

// import { useState } from "react"
// import { registerUser } from "../../services/api"

// export default function Register() {

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

//   const handleSubmit = async (e: React.FormEvent) => {

//     e.preventDefault()

//     await registerUser(form)

//     alert("Registered successfully")

//     window.location.href = "/login"
//   }

//   return (
//     <form onSubmit={handleSubmit}>

//       <h2>Register</h2>

//       <input
//         placeholder="Name"
//         onChange={(e) =>
//           setForm({ ...form, name: e.target.value })
//         }
//       />

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
//         Register
//       </button>

//     </form>
//   )
// }

"use client"

import Link from "next/link"
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Travel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Register Card */}
      <div className="relative bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[90%] max-w-md border border-white/20">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <p className="text-gray-200 text-center mb-8">
          Start your travel journey with us
        </p>

        {/* First Name */}
        <div className="relative mb-4">
          <FaUser className="absolute left-3 top-4 text-gray-300" />
          <input
            type="text"
            placeholder="First Name"
            className="w-full pl-10 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Last Name */}
        <div className="relative mb-4">
          <FaUser className="absolute left-3 top-4 text-gray-300" />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full pl-10 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

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
        <div className="relative mb-6">
          <FaLock className="absolute left-3 top-4 text-gray-300" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-200 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}