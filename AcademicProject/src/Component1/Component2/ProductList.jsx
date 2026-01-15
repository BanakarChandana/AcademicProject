import React from "react";
import { useNavigate } from "react-router-dom";
//import { products } from "../data/products";

export default function ProductList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        New Arrivals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-500 line-through text-sm">
                ₹{product.price}
              </p>
              <p className="text-red-600 font-medium">
                Now at ₹{product.offerPrice} with EXTRA10
              </p>
              <p className="text-yellow-500 mt-1 text-sm">⭐ {product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}