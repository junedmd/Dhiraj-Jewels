import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../utils/axiosInstance";


import Navbar from "../../Components/Navbar/Navbar";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Fetch existing product details
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products`);
        const found = res.data.data.find((p) => p._id === id);
        if (found) {
          setTitle(found.title);
          setDescription(found.description);
          setPrice(found.price);
          setUnit(found.unit);
        }
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("unit", unit);
    if (image) {
      formData.append("image", image); // only if user uploads a new one
    }

    try {
      await axios.put(`/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product updated successfully!");
      navigate("/productpage"); 
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Update failed!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto bg-white mt-10 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Product</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            rows={3}
            required
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="number"
            placeholder="Units"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-4 py-2 border rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Update Product
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProductPage;
