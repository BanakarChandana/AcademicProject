import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="p-8 text-center">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 mb-6 hover:underline"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
        />

        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-yellow-500">⭐ {product.rating}</p>
          <p className="text-gray-500 line-through">₹{product.price}</p>
          <p className="text-red-600 text-xl font-medium">
            Now at ₹{product.offerPrice} with EXTRA10
          </p>
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}