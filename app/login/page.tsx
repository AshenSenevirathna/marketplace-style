"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaChevronLeft } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/login`,
        { email, password }
      );
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("userName", `${user.firstName} ${user.lastName}`);
      toast.success("Login Successful");
      if (user.role === "admin") router.push("/admin");
      else router.push("/");
    } catch (e: any) {
      console.error("Login failed:", e);
      toast.error(e.response?.data?.message || "Login failed. Check credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative px-4 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Travel"
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-pulse-slow"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-black/50 to-blue-900/40"></div>
      <Link
        href="/"
        className="absolute top-6 left-6 text-white/70 hover:text-white flex items-center gap-2 transition-all group z-20"
      >
        <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Home</span>
      </Link>

      <form
        onSubmit={login}
        className="relative bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-md border border-white/20 z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-yellow-400 rounded-2xl mb-4 shadow-lg shadow-yellow-400/20">
            <FaLock className="text-slate-900 text-xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Welcome Back</h2>
          <p className="text-white/60 text-sm mt-2 font-light">Login to continue your travel journey</p>
        </div>

        <div className="space-y-5">
          <div className="relative group">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-yellow-400 transition-colors" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/10 transition-all text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative group">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-yellow-400 transition-colors" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/10 transition-all text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Action Row */}
        {/* <div className="flex justify-end mt-4 mb-8">
          <Link href="/forgot-password" size="sm" className="text-xs md:text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
            Forgot Password?
          </Link>
        </div> */}

        <Link
          href="/forgot-password"
          className="text-xs md:text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          Forgot Password?
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-slate-900 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-300 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-yellow-400/10 flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
              Verifying...
            </span>
          ) : (
            "Login"
          )}
        </button>

        <p className="text-center text-white/60 mt-8 text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors ml-1">
            Register
          </Link>
        </p>
      </form>

      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
    </div>
  );
}