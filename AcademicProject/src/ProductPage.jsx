// src/Components/ProductPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProducts, cottonProducts, banarasiProducts, weddingProducts } from "./ProductsData";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import AdminDashboard from "./AdminDashboard";

export default function ProductPage({ wishlist, toggleWishlist }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === parseInt(id, 10));

  if (!product) return <div className="p-6">Product not found</div>;

  const categoryProducts =
    cottonProducts.some((p) => p.id === product.id)
      ? cottonProducts
      : banarasiProducts.some((p) => p.id === product.id)
      ? banarasiProducts
      : weddingProducts;

  const relatedProducts = categoryProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        Go Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5 relative">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover rounded-lg shadow-lg" />
          <button onClick={() => toggleWishlist(product.id)} className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
            {wishlist.includes(product.id) ? <FaHeart className="text-red-500 text-lg" /> : <FaRegHeart className="text-gray-500 text-lg" />}
          </button>
        </div>

        <div className="md:w-3/5 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm flex items-center">
              <FaStar className="mr-1" /> {product.rating}
            </span>
            <span className="text-gray-500 text-sm">({product.reviews} ratings & reviews)</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-gray-800">₹{product.finalPrice}</p>
            {product.oldPrice && <p className="line-through text-gray-400">₹{product.oldPrice}</p>}
            {product.discount && <p className="text-red-500">{product.discount} OFF</p>}
          </div>
          <p className="text-gray-600 text-sm">Inclusive of all taxes</p>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Premium quality fabric</li>
              <li>Elegant & comfortable drape</li>
              <li>Perfect for weddings, parties & festivals</li>
              <li>Handcrafted details</li>
              <li>Eco-friendly & sustainable</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold">Buy Now</button>
            <button onClick={() => toggleWishlist(product.id)} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold">
              {wishlist.includes(product.id) ? "Remove from Wishlist" : "Add to Cart"}
            </button>
          </div>

          <div className="mt-6 text-gray-600 text-sm space-y-1">
            <p><b>Delivery:</b> Delivered within 5-7 business days</p>
            <p><b>Return Policy:</b> 7 days return, no questions asked</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((relProd) => (
            <div key={relProd.id} onClick={() => navigate(`/product/${relProd.id}`)} className="cursor-pointer border rounded-lg p-2 hover:shadow-lg transition">
              <img src={relProd.img} alt={relProd.name} className="w-full h-48 object-cover rounded-lg" />
              <p className="mt-2 text-sm font-medium text-gray-800">{relProd.name}</p>
              <p className="text-red-600 font-semibold">₹{relProd.finalPrice}</p>
              <div className="flex items-center gap-1 text-yellow-500 mt-1">
                <FaStar className="text-xs" />
                <span className="text-xs">{relProd.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <AdminDashboard />
      </div>
    </div>
  );
}