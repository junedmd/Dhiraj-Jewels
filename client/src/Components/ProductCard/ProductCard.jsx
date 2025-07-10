import React from "react";
import Img from "./jewel.jpg"
const ProductCard = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-all">
      <img
        src={Img}
        alt="wedding ring"
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-3 text-sm font-medium text-gray-800">
        14k White Gold 2.0mm Traditional Slightly Curved Wedding Ring
      </h3>
      <p className="text-xl font-bold mt-1">$ 20/-</p>
      <div className="mt-1 text-sm text-gray-600">Colors -</div>
      <div className="flex gap-1 mt-1">
        <span className="w-4 h-4 rounded-full bg-yellow-300 inline-block"></span>
        <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>
        <span className="w-4 h-4 rounded-full bg-pink-400 inline-block"></span>
      </div>
      <div className="mt-2 text-yellow-400 text-lg">★★★★★</div>
    </div>
  );
};

export default ProductCard;
