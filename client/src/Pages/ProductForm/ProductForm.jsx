
import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';

function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [unit, setUnit] = useState("");

  const submitProduct = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please upload an image");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("unit", unit);

    try {
      const response = await axios.post('/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log("Response:", response.data);
      alert("Product added successfully!");

      setTitle("");
      setDescription("");
      setPrice("");
      setImage(null);
      setUnit("");
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 px-2">
        <div className="w-full max-w-md bg-white p-5 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-center text-blue-700 mb-4">Add Product</h2>

          <form onSubmit={submitProduct} className="space-y-3">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-sm border rounded-md resize-none focus:ring-2 focus:ring-blue-400 outline-none"
              rows={2}
              required
            />

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-1/2 px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <input
                type="number"
                placeholder="Unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-1/2 px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm border rounded-md px-3 py-2 file:py-1 file:px-3 file:rounded-full file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
