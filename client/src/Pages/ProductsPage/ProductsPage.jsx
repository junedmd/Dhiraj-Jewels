

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from "react-router-dom";
function ProductsPages() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      setProducts(res.data.data);
      console.log("Fetched products:", res.data.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      alert("Error fetching products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">All Products</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-600 ">No products found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product._id} className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-gray-200">
                {product.image && (
                  <img
                    src={Array.isArray(product.image) ? product.image[0] : product.image}
                    alt={product.title}
                    className="w-full h-52 object-cover object-center rounded-t-md"
                  />
                )}

                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                  <div className="text-blue-600 font-bold text-sm">₹{product.price}</div>
                  <p className="text-xs text-gray-500">Units: {product.unit}</p>
                  <Link
                    to={`/edit-product/${product._id}`}
                    className="inline-block mt-2 text-sm px-3 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}


      </div>
    </>
  );
}

export default ProductsPages;
