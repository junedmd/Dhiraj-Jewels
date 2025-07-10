import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/ProductCard/ProductCard";

const GoldPage = () => {
  return (
    <>

      <Navbar />
      <div className="bg-gray-50 py-10 px-4">
        <h2 className="text-center text-3xl font-cursive mb-8">Classic Gold Jewelry</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default GoldPage;
