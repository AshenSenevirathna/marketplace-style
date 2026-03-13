"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import mediaUpload from "@/utils/mediaUpload";
import { FaMapMarkerAlt, FaDollarSign, FaCloudUploadAlt, FaTimes, FaGlobeAmericas } from "react-icons/fa";

export default function CreateExperience() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [isUploading, setIsUploading] = useState(false);

  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    const storedUserName = localStorage.getItem("userName");

    if (!storedToken) {
      toast.error("Please login first");
      router.push("/login");
    } else {
      setToken(storedToken);
      setUserId(storedUserId);
      setUserName(storedUserName);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setImages(prev => [...prev, ...selectedFiles]);
      
      const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls(prev => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const addList = async () => {
    if (!title || !location || !description) {
      toast.error("Please fill all required fields");
      return;
    }

    if (images.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }

    setIsUploading(true);
    const loadingToast = toast.loading("Crafting your experience...");

    try {
      const urls = await Promise.all(images.map(img => mediaUpload(img)));

      const listData = {
        title,
        location,
        description,
        price,
        images: urls,
      };

      await axios.post(`${API}/api/lists`, listData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.dismiss(loadingToast);
      toast.success("Travel experience created successfully");
      router.push("/my-list");

    } catch (error) {
      toast.dismiss(loadingToast);
      console.error(error);
      toast.error("Failed to create experience");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 mb-6 text-white text-2xl">
            <FaGlobeAmericas />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Share Your <span className="text-blue-600">Adventure</span>
          </h1>
          <p className="mt-4 text-slate-500 text-lg font-light">
            Tell the world about the hidden gems you've discovered.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          <div className="p-6 md:p-12 space-y-8">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Experience Title</label>
              <input
                type="text"
                placeholder="e.g., Sunset Kayaking in Mirissa"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-lg font-medium placeholder:text-slate-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Location</label>
                <div className="flex items-center bg-slate-50 px-6 py-4 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                  <FaMapMarkerAlt className="text-blue-500 mr-3" />
                  <input
                    type="text"
                    placeholder="Where did it happen?"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="w-full bg-transparent focus:outline-none font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Price (Optional)</label>
                <div className="flex items-center bg-slate-50 px-6 py-4 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                  <FaDollarSign className="text-blue-500 mr-3" />
                  <input
                    type="number"
                    placeholder="0.00"
                    value={price ?? ""}
                    onChange={e => setPrice(e.target.value ? Number(e.target.value) : undefined)}
                    className="w-full bg-transparent focus:outline-none font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Gallery</label>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {previewUrls.map((url, idx) => (
                  <div key={idx} className="relative group aspect-square rounded-2xl overflow-hidden shadow-md">
                    <img src={url} alt="preview" className="w-full h-full object-cover transition group-hover:scale-110" />
                    <button 
                      onClick={() => removeImage(idx)}
                      className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition"
                    >
                      <FaTimes size={12} />
                    </button>
                  </div>
                ))}
                
                <label className="flex flex-col items-center justify-center aspect-square border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all group">
                  <FaCloudUploadAlt className="text-3xl text-slate-300 group-hover:text-blue-500 transition-colors mb-2" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Add Photo</span>
                  <input type="file" multiple className="hidden" onChange={handleImageChange} />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">The Story</label>
              <textarea
                placeholder="Describe the atmosphere, the people, and what made it special..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={6}
                className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium leading-relaxed"
              />
            </div>

            <div className="pt-4">
              <button
                onClick={addList}
                disabled={isUploading}
                className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center space-x-3
                  ${isUploading 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-slate-900 text-white hover:bg-blue-600 hover:shadow-blue-200 active:scale-[0.98]'
                  }`}
              >
                {isUploading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Publish Experience</span>
                  </>
                )}
              </button>
              <p className="text-center text-slate-400 text-xs mt-4">
                By publishing, you agree to TravelQuest's community guidelines.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}