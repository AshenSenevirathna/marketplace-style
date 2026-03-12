// "use client"

// import { useEffect, useState } from "react"
// import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa"

// export default function MyListings() {
//     const [experiences, setExperiences] = useState<any[]>([])
//     const [editingId, setEditingId] = useState<number | null>(null)
//     const [form, setForm] = useState<any>({})

//     useEffect(() => {
//         const data = JSON.parse(localStorage.getItem("experiences") || "[]")
//         setExperiences(data)
//     }, [])

//     const startEdit = (exp: any) => {
//         setEditingId(exp.id)
//         setForm(exp)
//     }

//     const cancelEdit = () => {
//         setEditingId(null)
//     }

//     const handleChange = (e: any) => {
//         setForm({ ...form, [e.target.name]: e.target.value })
//     }

//     const saveEdit = () => {
//         const updated = experiences.map((exp) =>
//             exp.id === editingId ? form : exp
//         )

//         setExperiences(updated)
//         localStorage.setItem("experiences", JSON.stringify(updated))
//         setEditingId(null)
//     }

//     const deleteExperience = (id: number) => {
//         const updated = experiences.filter((exp) => exp.id !== id)
//         setExperiences(updated)
//         localStorage.setItem("experiences", JSON.stringify(updated))
//     }

//     return (
//         <section className="min-h-screen bg-gray-50 py-16 px-6">
//             <div className="max-w-6xl mx-auto">

//                 <h1 className="text-3xl font-bold text-blue-900 mb-10">
//                     My Experiences
//                 </h1>

//                 <div className="grid md:grid-cols-3 gap-8">

//                     {experiences.map((exp) => (
//                         <div key={exp.id} className="bg-white rounded-xl shadow-lg overflow-hidden">

//                             <img
//                                 src={exp.image}
//                                 className="w-full h-48 object-cover"
//                             />

//                             <div className="p-5">

//                                 {editingId === exp.id ? (

//                                     <>
//                                         {/* Edit Mode */}
//                                         <input
//                                             name="title"
//                                             value={form.title}
//                                             onChange={handleChange}
//                                             className="w-full border rounded p-2 mb-2"
//                                         />

//                                         <input
//                                             name="location"
//                                             value={form.location}
//                                             onChange={handleChange}
//                                             className="w-full border rounded p-2 mb-2"
//                                         />

//                                         <textarea
//                                             name="description"
//                                             value={form.description}
//                                             onChange={handleChange}
//                                             className="w-full border rounded p-2 mb-2"
//                                         />

//                                         <input
//                                             name="price"
//                                             value={form.price}
//                                             onChange={handleChange}
//                                             className="w-full border rounded p-2 mb-3"
//                                         />

//                                         <div className="flex justify-between">

//                                             <button
//                                                 onClick={saveEdit}
//                                                 className="flex items-center gap-2 text-green-600"
//                                             >
//                                                 <FaSave /> Save
//                                             </button>

//                                             <button
//                                                 onClick={cancelEdit}
//                                                 className="flex items-center gap-2 text-gray-500"
//                                             >
//                                                 <FaTimes /> Cancel
//                                             </button>

//                                         </div>
//                                     </>

//                                 ) : (

//                                     <>
//                                         {/* View Mode */}

//                                         <h2 className="text-xl font-semibold text-gray-800">
//                                             {exp.title}
//                                         </h2>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             {exp.location}
//                                         </p>

//                                         <p className="text-gray-600 mt-3">
//                                             {exp.description}
//                                         </p>

//                                         {exp.price && (
//                                             <p className="text-yellow-500 font-bold mt-3">
//                                                 ${exp.price}
//                                             </p>
//                                         )}

//                                         <div className="flex justify-between mt-5">

//                                             <button
//                                                 onClick={() => startEdit(exp)}
//                                                 className="flex items-center gap-2 text-blue-600"
//                                             >
//                                                 <FaEdit /> Edit
//                                             </button>

//                                             <button
//                                                 onClick={() => deleteExperience(exp.id)}
//                                                 className="flex items-center gap-2 text-red-500"
//                                             >
//                                                 <FaTrash /> Delete
//                                             </button>

//                                         </div>
//                                     </>
//                                 )}

//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </section>
//     )
// }

"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa"

export default function MyListings() {

    const [experiences, setExperiences] = useState<any[]>([])
    const [editingId, setEditingId] = useState<string | null>(null)
    const [form, setForm] = useState<any>({})

    const API = process.env.NEXT_PUBLIC_API_URL

    useEffect(() => {
        fetchExperiences()
    }, [])

    // GET experiences from MongoDB
    async function fetchExperiences() {
        try {
            const res = await axios.get(`${API}/api/lists`)
            setExperiences(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const startEdit = (exp: any) => {
        setEditingId(exp._id)
        setForm(exp)
    }

    const cancelEdit = () => {
        setEditingId(null)
    }

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // UPDATE experience
    const saveEdit = async () => {

        try {

            await axios.put(
                `${API}/api/lists/${editingId}`,
                form
            )

            fetchExperiences()
            setEditingId(null)

        } catch (error) {

            console.log(error)

        }
    }

    // DELETE experience
    const deleteExperience = async (id: string) => {

        try {

            await axios.delete(`${API}/api/lists/${id}`)
            fetchExperiences()

        } catch (error) {

            console.log(error)

        }

    }

    return (
        <section className="min-h-screen bg-gray-50 py-16 px-6">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl font-bold text-blue-900 mb-10">
                    My Experiences
                </h1>

                <div className="grid md:grid-cols-3 gap-8">

                    {experiences.map((exp) => (

                        <div
                            key={exp._id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >

                            {/* Supabase Image */}
                            <img
                                src={exp.images?.[0]}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">

                                {editingId === exp._id ? (

                                    <>
                                        <input
                                            name="title"
                                            value={form.title}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2 mb-2"
                                        />

                                        <input
                                            name="location"
                                            value={form.location}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2 mb-2"
                                        />

                                        <textarea
                                            name="description"
                                            value={form.description}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2 mb-2"
                                        />

                                        <input
                                            name="price"
                                            value={form.price}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2 mb-3"
                                        />

                                        <div className="flex justify-between">

                                            <button
                                                onClick={saveEdit}
                                                className="flex items-center gap-2 text-green-600"
                                            >
                                                <FaSave /> Save
                                            </button>

                                            <button
                                                onClick={cancelEdit}
                                                className="flex items-center gap-2 text-gray-500"
                                            >
                                                <FaTimes /> Cancel
                                            </button>

                                        </div>
                                    </>

                                ) : (

                                    <>
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {exp.title}
                                        </h2>

                                        <p className="text-gray-500 text-sm mt-1">
                                            {exp.location}
                                        </p>

                                        <p className="text-gray-600 mt-3">
                                            {exp.description}
                                        </p>

                                        {exp.price && (
                                            <p className="text-yellow-500 font-bold mt-3">
                                                ${exp.price}
                                            </p>
                                        )}

                                        <div className="flex justify-between mt-5">

                                            <button
                                                onClick={() => startEdit(exp)}
                                                className="flex items-center gap-2 text-blue-600"
                                            >
                                                <FaEdit /> Edit
                                            </button>

                                            <button
                                                onClick={() => deleteExperience(exp._id)}
                                                className="flex items-center gap-2 text-red-500"
                                            >
                                                <FaTrash /> Delete
                                            </button>

                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}