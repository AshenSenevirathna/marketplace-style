"use client";

import mediaUpload from "@/utils/mediaUpload";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaDollarSign, FaCloudUploadAlt } from "react-icons/fa"

export default function CreateExperience() {

  //const [listId, setListId] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  //const [price, setPrice] = useState<Number | null>(null);
  const router = useRouter();

  async function addList() {

    // const token = localStorage.getItem("token");
    // if (token == null) {
    //   router.push("/login");
    //   return;
    // }

    // Upload images to Supabase
    const promises = []
    for (let i = 0; i < images.length; i++) {
      promises[i] = mediaUpload(images[i]);
    }

    try {
      const urls = await Promise.all(promises);

      // Send data to backend
      const list = {
        //listId : listId,
        title: title,
        location: location,
        images: urls,
        description: description,
        price: price
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/lists`, list, {
        // headers: {
        //   Authorization: "Bearer " + token
        // }
      });

      toast.success("Travel experience created successfully");
      router.push("/");

    } catch (error) {
      toast.error("Error creating experience")
    }
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-900">
            Create Travel Experience
          </h1>
          <p className="text-gray-500 mt-2">
            Share your unique travel adventure with travelers worldwide
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8">

          {/* <form className="space-y-6"> */}

          {/* Experience Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Experience Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Sunset Boat Tour"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Location
            </label>

            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input
                type="text"
                name="location"
                placeholder="Bali, Indonesia"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full py-3 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Experience Image
            </label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl h-48 cursor-pointer hover:border-yellow-400 transition">


              {/* <img
                    //alt="preview"
                    className="w-full h-full object-cover rounded-xl"
                  /> */}

              <div className="text-center">
                <FaCloudUploadAlt className="text-4xl text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">
                  Click to upload an image
                </p>
                <p className="text-sm text-gray-400">
                  PNG, JPG, or JPEG
                </p>
              </div>


              <input
                type="file"
                multiple

                className="hidden"
                onChange={(e) => {
                  const files = e.target.files;
                  if (files) {
                    setImages(Array.from(files));
                  }
                }}
              />
            </label>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Short Description
            </label>
            <textarea
              name="description"
              placeholder="Enjoy a beautiful sunset while sailing along the coastline..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Price (Optional)
            </label>

            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <FaDollarSign className="text-gray-400 mr-2" />
              <input
                type="number"
                name="price"
                placeholder="45"
                value={price ?? ""}
                onChange={(e) =>
                  setPrice(e.target.value ? Number(e.target.value) : undefined)
                }
                // value={price}
                // onChange={(e) =>
                //   setPrice(e.target.value === "" ? "" : Number(e.target.value))
                // }
                className="w-full py-3 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={addList}
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg transition shadow-md"
          >
            Publish Experience
          </button>

          {/* </form> */}
        </div>
      </div>
    </section>
  )
}


// "use client"

// import { useState } from "react"
// import { FaMapMarkerAlt, FaImage, FaDollarSign } from "react-icons/fa"

// export default function CreateExperience() {
//   const [form, setForm] = useState({
//     title: "",
//     location: "",
//     image: "",
//     description: "",
//     price: "",
//   })

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e: any) => {
//     e.preventDefault()
//     console.log(form)
//   }

//   return (
//     <section className="min-h-screen bg-gray-50 py-16 px-6">
//       <div className="max-w-3xl mx-auto">

//         {/* Title */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold text-blue-900">
//             Create Travel Experience
//           </h1>
//           <p className="text-gray-500 mt-2">
//             Share your unique travel experience with the world
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white shadow-xl rounded-2xl p-8">

//           <form onSubmit={handleSubmit} className="space-y-6">

//             {/* Experience Title */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Experience Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Sunset Boat Tour"
//                 value={form.title}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//                 required
//               />
//             </div>

//             {/* Location */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Location
//               </label>

//               <div className="flex items-center border border-gray-300 rounded-lg px-3">
//                 <FaMapMarkerAlt className="text-gray-400 mr-2" />
//                 <input
//                   type="text"
//                   name="location"
//                   placeholder="Bali, Indonesia"
//                   value={form.location}
//                   onChange={handleChange}
//                   className="w-full py-3 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Image URL */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Image URL
//               </label>

//               <div className="flex items-center border border-gray-300 rounded-lg px-3">
//                 <FaImage className="text-gray-400 mr-2" />
//                 <input
//                   type="text"
//                   name="image"
//                   placeholder="https://images.unsplash.com/..."
//                   value={form.image}
//                   onChange={handleChange}
//                   className="w-full py-3 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Short Description
//               </label>
//               <textarea
//                 name="description"
//                 placeholder="Enjoy a beautiful sunset while sailing along the coastline..."
//                 value={form.description}
//                 onChange={handleChange}
//                 rows={4}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//                 required
//               />
//             </div>

//             {/* Price */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Price (Optional)
//               </label>

//               <div className="flex items-center border border-gray-300 rounded-lg px-3">
//                 <FaDollarSign className="text-gray-400 mr-2" />
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="45"
//                   value={form.price}
//                   onChange={handleChange}
//                   className="w-full py-3 focus:outline-none"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg transition shadow-md"
//             >
//               Publish Experience
//             </button>

//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { useState } from "react"
// import { createListing } from "../../services/api"

// export default function CreateListing() {

//   const [form, setForm] = useState({
//     title: "",
//     location: "",
//     imageUrl: "",
//     description: "",
//     price: ""
//   })

//   const submit = async (e: React.FormEvent) => {

//     e.preventDefault()

//     const token = localStorage.getItem("token") || ""

//     await createListing(form, token)

//     alert("Listing created")

//     window.location.href = "/"
//   }

//   return (
//     <form onSubmit={submit}>

//       <h2>Create Experience</h2>

//       <input
//         placeholder="Title"
//         onChange={(e) =>
//           setForm({ ...form, title: e.target.value })
//         }
//       />

//       <input
//         placeholder="Location"
//         onChange={(e) =>
//           setForm({ ...form, location: e.target.value })
//         }
//       />

//       <input
//         placeholder="Image URL"
//         onChange={(e) =>
//           setForm({ ...form, imageUrl: e.target.value })
//         }
//       />

//       <textarea
//         placeholder="Description"
//         onChange={(e) =>
//           setForm({ ...form, description: e.target.value })
//         }
//       />

//       <input
//         placeholder="Price"
//         onChange={(e) =>
//           setForm({ ...form, price: e.target.value })
//         }
//       />

//       <button type="submit">
//         Publish
//       </button>

//     </form>
//   )
// }