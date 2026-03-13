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
//           <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Traveler Experiences</h1>
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
// import { MapPin, Heart, ChevronLeft, ChevronRight, User, DollarSign } from "lucide-react";

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
//   const API = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     fetchExperiences();
//   }, []);

//   async function fetchExperiences() {
//     try {
//       const res = await axios.get(`${API}/api/lists/travel`);
//       setExperiences(res.data);
//     } catch (error) {
//       console.error("Failed to fetch:", error);
//     }
//   }

//   async function likePost(id: string) {
//     const userId = localStorage.getItem("userId");
//     if (!userId) return alert("Please login first");
//     try {
//       const res = await axios.post(`${API}/api/lists/like/${id}`, { userId });
//       setExperiences(prev =>
//         prev.map(exp => (exp._id === id ? { ...exp, likes: res.data.likes } : exp))
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   // Access the single item directly without looping
//   const currentItem = experiences[currentPage - 1];
//   const totalPages = experiences.length;

//   if (!currentItem) return (
//     <div className="min-h-screen flex items-center justify-center text-slate-400 animate-pulse">
//       Loading experience...
//     </div>
//   );

//   return (
//     <section className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8">
//       <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden">
        
//         {/* Top Image Section */}
//         <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
//           <img 
//             src={currentItem.images[0]} 
//             className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
//             alt={currentItem.title}
//           />
//           <button
//             onClick={() => likePost(currentItem._id)}
//             className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all active:scale-90"
//           >
//             <Heart 
//               size={20} 
//               className={currentItem.likes?.length > 0 ? "fill-red-500 text-red-500" : "text-slate-400"} 
//             />
//           </button>
//         </div>

//         {/* Info Section */}
//         <div className="p-8 md:p-10">
//           <div className="flex items-center gap-1.5 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
//             <MapPin size={14} /> {currentItem.location}
//           </div>
          
//           <h1 className="text-3xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
//             {currentItem.title}
//           </h1>
          
//           <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
//             {currentItem.description}
//           </p>

//           <div className="flex items-center justify-between pt-6 border-t border-slate-100">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
//                 <User size={18} />
//               </div>
//               <div>
//                 <p className="text-[9px] text-slate-400 font-bold uppercase">Traveler</p>
//                 <p className="text-sm font-bold text-slate-800">{currentItem.userName}</p>
//               </div>
//             </div>

//             {currentItem.price && (
//               <div className="text-right">
//                 <p className="text-[9px] text-slate-400 font-bold uppercase">Starting from</p>
//                 <p className="text-xl font-black text-slate-900">${currentItem.price}</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Integrated Navigation Bar */}
//         <div className="bg-slate-50/80 px-8 py-4 flex items-center justify-between border-t border-slate-100">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage(prev => prev - 1)}
//             className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-blue-600 disabled:opacity-20 transition-all group"
//           >
//             <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" /> 
//             Back
//           </button>

//           <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
//             {currentPage} of {totalPages}
//           </span>

//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage(prev => prev + 1)}
//             className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-blue-600 disabled:opacity-20 transition-all group"
//           >
//             Next 
//             <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { MapPin, Heart, User } from "lucide-react";

interface Experience {
  _id: string;
  title: string;
  location: string;
  description: string;
  price?: number;
  images: string[];
  userName: string;
  likes: string[];
}

export default function ListingCard() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const API = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetchExperiences();
  }, []);

  async function fetchExperiences() {
    try {
      const res = await axios.get(`${API}/api/lists/travel`);
      setExperiences(res.data);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }

  async function likePost(id: string) {
    const userId = localStorage.getItem("userId");
    if (!userId) return alert("Please login first");

    try {
      const res = await axios.post(`${API}/api/lists/like/${id}`, { userId });

      setExperiences(prev =>
        prev.map(exp =>
          exp._id === id ? { ...exp, likes: res.data.likes } : exp
        )
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="min-h-screen bg-slate-50 p-6 md:p-10">
      
      <h1 className="text-3xl font-bold text-slate-900 mb-10 text-center">
        Explore Travel Experiences
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        
        {experiences.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Like Button */}
              <button
                onClick={() => likePost(item._id)}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow"
              >
                <Heart
                  size={18}
                  className={
                    item.likes?.length > 0
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400"
                  }
                />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">

              <div className="flex items-center text-blue-600 text-xs font-semibold gap-1 mb-2">
                <MapPin size={14} />
                {item.location}
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
                {item.title}
              </h2>

              <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                {item.description}
              </p>

              <div className="flex items-center justify-between border-t pt-3">

                <div className="flex items-center gap-2">
                  <User size={16} className="text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">
                    {item.userName}
                  </span>
                </div>

                {item.price && (
                  <span className="text-lg font-bold text-slate-900">
                    ${item.price}
                  </span>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
