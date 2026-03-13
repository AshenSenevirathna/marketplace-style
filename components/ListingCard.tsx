// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { MapPin, Heart, ChevronLeft, ChevronRight, X, User } from "lucide-react";

// interface Experience {
//   _id: string;
//   title: string;
//   location: string;
//   description: string;
//   price?: number;
//   images: string[];
//   userName: string;
//   likes: string[];
//   createdAt: string;
// }

// export default function ListingCard() {
//   const [experiences, setExperiences] = useState<Experience[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedListing, setSelectedListing] = useState<Experience | null>(null);
//   const [openDialog, setOpenDialog] = useState(false);

//   const itemsPerPage = 3;
//   const API = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     fetchExperiences();
//   }, []);

//   async function fetchExperiences() {
//     try {
//       const res = await axios.get(`${API}/api/lists/travel`);
//       setExperiences(res.data);
//     } catch (error) {
//       console.error("Failed to fetch experiences:", error);
//     }
//   }

//   function timeAgo(date: string) {
//     const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
//     const intervals: any = { year: 31536000, month: 2592000, day: 86400, hour: 3600, minute: 60 };
//     for (const key in intervals) {
//       const interval = Math.floor(seconds / intervals[key]);
//       if (interval >= 1) return `${interval}${key[0]} ago`;
//     }
//     return "just now";
//   }

//   function openListing(exp: Experience) {
//     setSelectedListing(exp);
//     setOpenDialog(true);
//   }

//   function closeDialog() {
//     setOpenDialog(false);
//     setSelectedListing(null);
//   }

//   async function likePost(id: string) {
//     try {
//       const userId = localStorage.getItem("userId");
//       if (!userId) {
//         alert("Please login first");
//         return;
//       }
//       const res = await axios.post(`${API}/api/lists/like/${id}`, { userId });
//       setExperiences(prev =>
//         prev.map(exp => (exp._id === id ? { ...exp, likes: res.data.likes } : exp))
//       );
//     } catch (err) {
//       console.error("Failed to like post:", err);
//     }
//   }

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentExperiences = experiences.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(experiences.length / itemsPerPage);

//   return (
//     <section className="min-h-screen bg-white py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-16 border-l-4 border-blue-600 pl-6">
//           <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">traveler Experiences</h1>
//           <p className="text-slate-500 mt-2 font-medium">Authentic stories shared by our community.</p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {currentExperiences.map(exp => (
//             <div
//               key={exp._id}
//               onClick={() => openListing(exp)}
//               className="group cursor-pointer"
//             >
//               <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
//                 <img 
//                   src={exp.images[0]} 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
//                   alt={exp.title}
//                 />
//                 <button
//                   onClick={e => {
//                     e.stopPropagation();
//                     likePost(exp._id);
//                   }}
//                   className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full shadow-sm hover:text-red-500 transition-colors flex items-center gap-1.5"
//                 >
//                   <Heart size={18} fill={exp.likes?.length > 0 ? "currentColor" : "none"} className={exp.likes?.length > 0 ? "text-red-500" : "text-slate-400"} />
//                   <span className="text-xs font-bold text-slate-700">{exp.likes?.length || 0}</span>
//                 </button>
//               </div>

//               <div className="mt-5 space-y-2">
//                 <div className="flex items-center gap-1.5 text-blue-600">
//                   <MapPin size={14} />
//                   <span className="text-xs font-bold uppercase tracking-wider">{exp.location}</span>
//                 </div>
//                 <h2 className="text-xl font-bold text-slate-800 line-clamp-1">{exp.title}</h2>
//                 <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{exp.description}</p>
                
//                 <div className="pt-3 flex items-center justify-between border-t border-slate-100">
//                   <div className="flex items-center gap-2">
//                     <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
//                       <User size={14} />
//                     </div>
//                     <span className="text-xs font-semibold text-slate-600">{exp.userName}</span>
//                   </div>
//                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{timeAgo(exp.createdAt)}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center items-center mt-20 gap-8">
//           <button
//             onClick={() => setCurrentPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 disabled:opacity-30 transition-all"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <span className="text-sm font-bold tracking-widest text-slate-400">
//             {currentPage} / {totalPages}
//           </span>

//           <button
//             onClick={() => setCurrentPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 disabled:opacity-30 transition-all"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {openDialog && selectedListing && (
//         <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-6">
//           <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300">
//             <button 
//               onClick={closeDialog} 
//               className="absolute top-4 right-4 p-2 bg-white/80 rounded-full text-slate-500 hover:text-slate-900 z-10"
//             >
//               <X size={20} />
//             </button>

//             <div className="grid md:grid-cols-2">
//               <img
//                 src={selectedListing.images[0]}
//                 className="w-full h-full object-cover min-h-[300px]"
//                 alt={selectedListing.title}
//               />
//               <div className="p-8 flex flex-col justify-center">
//                 <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">{selectedListing.location}</p>
//                 <h2 className="text-3xl font-black text-slate-900 leading-tight mb-4">{selectedListing.title}</h2>
//                 <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{selectedListing.description}"</p>
                
//                 <div className="flex items-center justify-between pt-6 border-t border-slate-100">
//                   <p className="text-xs font-medium text-slate-400">Shared by <span className="text-slate-900 font-bold">{selectedListing.userName}</span></p>
//                   {selectedListing.price && (
//                     <p className="text-xl font-black text-slate-900">${selectedListing.price}</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { MapPin, Heart, ChevronLeft, ChevronRight, X, User } from "lucide-react";

// interface Experience {
//   _id: string;
//   title: string;
//   location: string;
//   description: string;
//   price?: number;
//   images: string[];
//   userName: string;
//   likes: string[];
//   createdAt: string;
// }

// export default function ListingCard() {
//   const [experiences, setExperiences] = useState<Experience[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedListing, setSelectedListing] = useState<Experience | null>(null);
//   const [openDialog, setOpenDialog] = useState(false);

//   // Updated to 1 for single listing display
//   const itemsPerPage = 1;
//   const API = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     fetchExperiences();
//   }, []);

//   async function fetchExperiences() {
//     try {
//       const res = await axios.get(`${API}/api/lists/travel`);
//       setExperiences(res.data);
//     } catch (error) {
//       console.error("Failed to fetch experiences:", error);
//     }
//   }

//   function timeAgo(date: string) {
//     const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
//     const intervals: any = { year: 31536000, month: 2592000, day: 86400, hour: 3600, minute: 60 };
//     for (const key in intervals) {
//       const interval = Math.floor(seconds / intervals[key]);
//       if (interval >= 1) return `${interval}${key[0]} ago`;
//     }
//     return "just now";
//   }

//   function openListing(exp: Experience) {
//     setSelectedListing(exp);
//     setOpenDialog(true);
//   }

//   function closeDialog() {
//     setOpenDialog(false);
//     setSelectedListing(null);
//   }

//   async function likePost(id: string) {
//     try {
//       const userId = localStorage.getItem("userId");
//       if (!userId) {
//         alert("Please login first");
//         return;
//       }
//       const res = await axios.post(`${API}/api/lists/like/${id}`, { userId });
//       setExperiences(prev =>
//         prev.map(exp => (exp._id === id ? { ...exp, likes: res.data.likes } : exp))
//       );
//     } catch (err) {
//       console.error("Failed to like post:", err);
//     }
//   }

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentExperiences = experiences.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(experiences.length / itemsPerPage);

//   return (
//     <section className="min-h-screen bg-white py-20 px-6 flex flex-col items-center">
//       <div className="max-w-4xl w-full mx-auto">
//         {/* Header */}
//         <div className="mb-12 border-l-4 border-blue-600 pl-6">
//           <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Traveler Experiences</h1>
//           <p className="text-slate-500 mt-2 font-medium">Spotlight on local stories.</p>
//         </div>

//         {/* Centered Single Card Display */}
//         <div className="flex justify-center">
//           {currentExperiences.map(exp => (
//             <div
//               key={exp._id}
//               onClick={() => openListing(exp)}
//               className="group cursor-pointer w-full max-w-xl"
//             >
//               <div className="relative overflow-hidden rounded-3xl aspect-video md:aspect-[16/10] bg-slate-100 shadow-xl shadow-slate-200/50">
//                 <img 
//                   src={exp.images[0]} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                   alt={exp.title}
//                 />
//                 <button
//                   onClick={e => {
//                     e.stopPropagation();
//                     likePost(exp._id);
//                   }}
//                   className="absolute top-6 right-6 p-2.5 bg-white/90 backdrop-blur rounded-full shadow-lg hover:text-red-500 transition-all flex items-center gap-1.5"
//                 >
//                   <Heart size={20} fill={exp.likes?.length > 0 ? "currentColor" : "none"} className={exp.likes?.length > 0 ? "text-red-500" : "text-slate-400"} />
//                   <span className="text-sm font-bold text-slate-700">{exp.likes?.length || 0}</span>
//                 </button>
//               </div>

//               <div className="mt-8 space-y-4 text-center md:text-left">
//                 <div className="flex items-center justify-center md:justify-start gap-1.5 text-blue-600">
//                   <MapPin size={16} />
//                   <span className="text-sm font-bold uppercase tracking-widest">{exp.location}</span>
//                 </div>
//                 <h2 className="text-3xl font-black text-slate-900 leading-tight">{exp.title}</h2>
//                 <p className="text-slate-500 text-lg leading-relaxed">{exp.description}</p>
                
//                 <div className="pt-6 flex items-center justify-between border-t border-slate-100">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
//                       <User size={20} />
//                     </div>
//                     <div className="text-left">
//                       <p className="text-xs text-slate-400 font-bold uppercase">Posted by</p>
//                       <p className="text-sm font-bold text-slate-700">{exp.userName}</p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <span className="text-xs font-black text-slate-400 uppercase tracking-tighter bg-slate-50 px-3 py-1 rounded-full">
//                       {timeAgo(exp.createdAt)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Premium Navigation Controls */}
//         <div className="flex justify-center items-center mt-16 gap-10">
//           <button
//             onClick={() => setCurrentPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 disabled:opacity-20 transition-all"
//           >
//             <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" /> Prev
//           </button>

//           <div className="h-8 w-[1px] bg-slate-200" />

//           <span className="text-sm font-black tracking-[0.3em] text-slate-900">
//             {currentPage} <span className="text-slate-300">/</span> {totalPages}
//           </span>

//           <div className="h-8 w-[1px] bg-slate-200" />

//           <button
//             onClick={() => setCurrentPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 disabled:opacity-20 transition-all"
//           >
//             Next <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>

//       {/* Modal - Unchanged but ensures responsive premium look */}
//       {openDialog && selectedListing && (
//         <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-6">
//           <div className="bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300">
//             <button 
//               onClick={closeDialog} 
//               className="absolute top-5 right-5 p-2 bg-white/90 rounded-full text-slate-500 hover:text-slate-900 z-10 shadow-md"
//             >
//               <X size={20} />
//             </button>

//             <div className="grid md:grid-cols-2">
//               <img
//                 src={selectedListing.images[0]}
//                 className="w-full h-full object-cover min-h-[350px]"
//                 alt={selectedListing.title}
//               />
//               <div className="p-10 flex flex-col justify-center">
//                 <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">{selectedListing.location}</p>
//                 <h2 className="text-3xl font-black text-slate-900 leading-tight mb-5">{selectedListing.title}</h2>
//                 <p className="text-slate-600 text-base leading-relaxed mb-8 italic font-light">"{selectedListing.description}"</p>
                
//                 <div className="flex items-center justify-between pt-6 border-t border-slate-100">
//                   <div className="flex flex-col">
//                     <span className="text-[10px] font-bold text-slate-400 uppercase">Contributor</span>
//                     <span className="text-sm font-bold text-slate-900">{selectedListing.userName}</span>
//                   </div>
//                   {selectedListing.price && (
//                     <div className="text-right">
//                        <span className="text-[10px] font-bold text-slate-400 uppercase">Est. Price</span>
//                        <p className="text-2xl font-black text-blue-600">${selectedListing.price}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Heart, ChevronLeft, ChevronRight, X, User, ArrowRight } from "lucide-react";

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

  async function likePost(id: string) {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) return alert("Please login first");
      const res = await axios.post(`${API}/api/lists/like/${id}`, { userId });
      setExperiences(prev =>
        prev.map(exp => (exp._id === id ? { ...exp, likes: res.data.likes } : exp))
      );
    } catch (err) { console.error(err); }
  }

  const currentItem = experiences[currentPage - 1];
  const totalPages = experiences.length;

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-10">
      <div className="max-w-6xl w-full">
        <AnimatePresence mode="wait">
          {currentItem ? (
            <motion.div
              key={currentItem._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]"
            >
              {/* Image Side (Left) */}
              <div className="lg:w-1/2 relative h-[350px] lg:h-auto overflow-hidden group">
                <img
                  src={currentItem.images[0]}
                  className="w-full h-full object-cover transition-transform duration-[2s] scale-105 group-hover:scale-100"
                  alt={currentItem.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                
                {/* Floating Meta */}
                <div className="absolute top-8 left-8 flex gap-3">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
                    <p className="text-[10px] font-black uppercase text-blue-600 tracking-tighter">Experience</p>
                    <p className="text-sm font-bold text-slate-900">#{currentPage} of {totalPages}</p>
                  </div>
                </div>

                <button
                  onClick={() => likePost(currentItem._id)}
                  className="absolute top-8 right-8 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all active:scale-90"
                >
                  <Heart size={20} className={currentItem.likes?.length > 0 ? "fill-red-500 text-red-500" : "text-slate-400"} />
                </button>
              </div>

              {/* Content Side (Right) */}
              <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-6">
                    <MapPin size={16} /> {currentItem.location}
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tighter">
                    {currentItem.title}
                  </h1>
                  
                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light italic border-l-2 border-slate-100 pl-6 mb-8">
                    "{currentItem.description}"
                  </p>

                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white ring-4 ring-slate-50">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Shared by</p>
                      <p className="text-base font-bold text-slate-800">{currentItem.userName}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Controls (Integrated) */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-50">
                  <div className="flex gap-4">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => prev - 1)}
                      className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 disabled:opacity-10 transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(prev => prev + 1)}
                      className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 disabled:opacity-10 transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  <button 
                    onClick={() => setSelectedListing(currentItem)}
                    className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                  >
                    View Details <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-slate-300 font-bold">Loading experiences...</div>
          )}
        </AnimatePresence>
      </div>

      {/* Simplified Detail Modal Overlay */}
      {selectedListing && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-[100] flex items-center justify-center p-6" onClick={() => setSelectedListing(null)}>
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelectedListing(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors">
              <X size={24} />
            </button>
            <h2 className="text-3xl font-black mb-4">{selectedListing.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-6">{selectedListing.description}</p>
            {selectedListing.price && (
              <div className="bg-slate-50 p-6 rounded-2xl flex justify-between items-center">
                <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Budget Suggestion</span>
                <span className="text-3xl font-black text-blue-600">${selectedListing.price}</span>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}