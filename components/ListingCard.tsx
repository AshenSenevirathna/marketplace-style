"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { MapPin, Heart, ChevronLeft, ChevronRight, X, User } from "lucide-react";

interface Experience {
  _id: string;
  title: string;
  location: string;
  description: string;
  price?: number;
  images: string[];
  userName: string;
  likes: string[];
  createdAt: string;
}

export default function ListingCard() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedListing, setSelectedListing] = useState<Experience | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const itemsPerPage = 3;
  const API = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetchExperiences();
  }, []);

  async function fetchExperiences() {
    try {
      const res = await axios.get(`${API}/api/lists/travel`);
      setExperiences(res.data);
    } catch (error) {
      console.error("Failed to fetch experiences:", error);
    }
  }

  function timeAgo(date: string) {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
    const intervals: any = { year: 31536000, month: 2592000, day: 86400, hour: 3600, minute: 60 };
    for (const key in intervals) {
      const interval = Math.floor(seconds / intervals[key]);
      if (interval >= 1) return `${interval}${key[0]} ago`;
    }
    return "just now";
  }

  function openListing(exp: Experience) {
    setSelectedListing(exp);
    setOpenDialog(true);
  }

  function closeDialog() {
    setOpenDialog(false);
    setSelectedListing(null);
  }

  async function likePost(id: string) {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("Please login first");
        return;
      }
      const res = await axios.post(`${API}/api/lists/like/${id}`, { userId });
      setExperiences(prev =>
        prev.map(exp => (exp._id === id ? { ...exp, likes: res.data.likes } : exp))
      );
    } catch (err) {
      console.error("Failed to like post:", err);
    }
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentExperiences = experiences.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 border-l-4 border-blue-600 pl-6">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Traveler Experiences</h1>
          <p className="text-slate-500 mt-2 font-medium">Authentic stories shared by our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {currentExperiences.map(exp => (
            <div
              key={exp._id}
              onClick={() => openListing(exp)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
                <img
                  src={exp.images[0]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={exp.title}
                />
                <button
                  onClick={e => {
                    e.stopPropagation();
                    likePost(exp._id);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full shadow-sm hover:text-red-500 transition-colors flex items-center gap-1.5"
                >
                  <Heart size={18} fill={exp.likes?.length > 0 ? "currentColor" : "none"} className={exp.likes?.length > 0 ? "text-red-500" : "text-slate-400"} />
                  <span className="text-xs font-bold text-slate-700">{exp.likes?.length || 0}</span>
                </button>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-1.5 text-blue-600">
                  <MapPin size={14} />
                  <span className="text-xs font-bold uppercase tracking-wider">{exp.location}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 line-clamp-1">{exp.title}</h2>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{exp.description}</p>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User size={14} />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">{exp.userName}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{timeAgo(exp.createdAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-20 gap-8">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="text-sm font-bold tracking-widest text-slate-400">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 disabled:opacity-30 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>


      {openDialog && selectedListing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">

          <div className="bg-white rounded-3xl w-full max-w-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-200 relative max-h-[80vh] overflow-hidden animate-in fade-in zoom-in duration-300">

            <button
              onClick={closeDialog}
              className="absolute top-5 right-5 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-slate-500 hover:text-slate-900 hover:scale-110 transition shadow-md z-10"
            >
              <X size={22} />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">

              <div className="relative group">
                <img
                  src={selectedListing.images[0]}
                  alt={selectedListing.title}
                  className="w-full h-[320px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-8 md:p-10">

                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">
                  {selectedListing.location}
                </p>

                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
                  {selectedListing.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 italic whitespace-pre-line">
                  "{selectedListing.description}"
                </p>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-slate-100">

                  <p className="text-sm text-slate-400">
                    Shared by{" "}
                    <span className="font-semibold text-slate-900">
                      {selectedListing.userName}
                    </span>
                  </p>

                  {selectedListing.price && (
                    <p className="text-2xl font-extrabold text-slate-900">
                      ${selectedListing.price}
                    </p>
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      )}
    </section>
  );
}

