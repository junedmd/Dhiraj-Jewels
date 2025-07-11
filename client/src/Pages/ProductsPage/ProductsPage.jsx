

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
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-6">All Products</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center">No products found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white shadow-md rounded-md overflow-hidden">
                {product.image && (
                  <img
                    src={Array.isArray(product.image) ? product.image[0] : product.image}
                    alt={product.title}
                    className="w-full h-60 object-cover object-center rounded-t-md"
                  />
                )}

                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <div className="mt-2 text-blue-600 font-semibold">₹{product.price}</div>
                  <p className="text-sm text-gray-500">Units: {product.unit}</p>
                  <Link
                    to={`/edit-product/${product._id}`}
                    className="text-blue-500 hover:underline text-sm mt-2 block"
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
