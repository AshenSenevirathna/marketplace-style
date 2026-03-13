"use client";

import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react"
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa"

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function register() {
    if (!email || !password || !firstName || !lastName) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users`,
        {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName
        }
      );

      toast.success("Registration Successful! Please Login 🎉");
      router.push("/login");
    } catch (e) {
      console.error("Registration failed:", e);
      toast.error("Registration failed. Please check your details ❌");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 py-10 overflow-hidden bg-slate-900">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Travel"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-tr from-black/80 via-black/40 to-blue-900/30"></div>

      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-xl border border-white/20 z-10">
        
        <Link href="/" className="absolute top-8 left-8 text-white/50 hover:text-white transition-colors hidden md:block">
          <FaArrowLeft />
        </Link>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3">
            Create <span className="text-yellow-400">Account</span>
          </h2>
          <p className="text-white/70 font-light text-sm md:text-base">
            Start your travel journey with us today
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-yellow-400 transition-colors" />
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/10 transition-all"
              />
            </div>

            <div className="relative group">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-yellow-400 transition-colors" />
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          <div className="relative group">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-yellow-400 transition-colors" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/10 transition-all"
            />
          </div>

          <div className="relative group">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-yellow-400 transition-colors" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        <button 
          onClick={register} 
          disabled={isLoading}
          className="w-full bg-yellow-400 text-slate-900 py-4 mt-8 rounded-2xl font-bold text-lg hover:bg-yellow-300 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-yellow-400/10 flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
          ) : "Create Account"}
        </button>

        <p className="text-center text-white/60 mt-8 text-sm md:text-base font-light">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-yellow-400 font-bold hover:text-yellow-300 hover:underline transition-all ml-1"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}