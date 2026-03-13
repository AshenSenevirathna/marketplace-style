"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSave, FaTimes, FaMapMarkerAlt, FaTag, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";

export default function MyListings() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<any>({});
  const API = process.env.NEXT_PUBLIC_API_URL;

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (token) fetchExperiences();
  }, [token]);

  async function fetchExperiences() {
    try {
      const res = await axios.get(`${API}/api/lists`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExperiences(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load your experiences");
    }
  }

  const startEdit = (exp: any) => {
    setEditingId(exp._id);
    setForm({ ...exp });
  };

  const cancelEdit = () => setEditingId(null);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const saveEdit = async () => {
    try {
      await axios.put(`${API}/api/lists/${editingId}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Experience updated");
      fetchExperiences();
      setEditingId(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update experience");
    }
  };

  const deleteExperience = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this adventure?")) return;
    try {
      await axios.delete(`${API}/api/lists/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Experience deleted");
      fetchExperiences();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete experience");
    }
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              My <span className="text-blue-600">Experiences</span>
            </h1>
            <p className="text-slate-500 mt-2 font-light">Manage and update your published travel stories.</p>
          </div>
          <Link href="/create" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 active:scale-95">
            <FaPlus size={14} /> Add New
          </Link>
        </div>

        {experiences.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-400">You haven't shared any experiences yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <div key={exp._id} className="group bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={exp.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image"} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={exp.title}
                  />
                  {exp.price && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-slate-900 font-bold text-sm shadow-sm">
                      ${exp.price}
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8">
                  {editingId === exp._id ? (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-semibold"
                      />
                      <input
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Location"
                        className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                      />
                      <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Description"
                        className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                      />
                      <input
                        name="price"
                        type="number"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                      />
                      <div className="flex gap-3 pt-2">
                        <button onClick={saveEdit} className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
                          <FaSave size={14} /> Save
                        </button>
                        <button onClick={cancelEdit} className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all">
                          <FaTimes size={14} /> Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">
                          <FaMapMarkerAlt /> {exp.location}
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">{exp.title}</h2>
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">{exp.description}</p>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                        <button 
                          onClick={() => startEdit(exp)} 
                          className="flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-blue-600 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                            <FaEdit size={12} />
                          </div>
                          Edit
                        </button>
                        <button 
                          onClick={() => deleteExperience(exp._id)} 
                          className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-red-500 transition-all"
                        >
                          <FaTrash size={12} /> Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}