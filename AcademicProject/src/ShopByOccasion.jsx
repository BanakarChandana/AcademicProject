// src/Components/ShopByOccasion.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart } from "react-icons/fa";
import { cottonProducts, banarasiProducts, weddingProducts, allProducts } from "./ProductsData";

export default function ShopByOccasion({ wishlist, toggleWishlist }) {
  const [selectedCategory, setSelectedCategory] = useState("cotton");
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, [selectedCategory]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  const productsToShow =
    selectedCategory === "cotton" ? cottonProducts : selectedCategory === "banarasi" ? banarasiProducts : selectedCategory === "wedding" ? weddingProducts : allProducts;

  const containerClass = selectedCategory === "all" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4" : "flex space-x-4 overflow-x-auto scroll-smooth px-8 custom-scrollbar";

  return (
    <div className="w-full bg-white p-6 relative">
      <h2 className="text-2xl font-bold text-center mb-6">Shop by Occasion</h2>

      <div className="flex gap-3 justify-center mb-6 flex-wrap">
        <button onClick={() => setSelectedCategory("cotton")} className={`h-[40px] w-[140px] border-2 rounded-md ${selectedCategory === "cotton" ? "bg-black text-white" : "bg-white"}`}>Cotton Saree</button>
        <button onClick={() => setSelectedCategory("banarasi")} className={`h-[40px] w-[180px] border-2 rounded-md ${selectedCategory === "banarasi" ? "bg-black text-white" : "bg-white"}`}>Banarasi Silk Saree</button>
        <button onClick={() => setSelectedCategory("wedding")} className={`h-[40px] w-[200px] border-2 rounded-md ${selectedCategory === "wedding" ? "bg-black text-white" : "bg-white"}`}>Grand Wedding Saree</button>
      </div>

      <button onClick={() => scroll("left")} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100"><FaChevronLeft /></button>

      <div ref={scrollRef} className={containerClass}>
        {productsToShow.map((product) => (
          <div key={product.id} className={`${selectedCategory === "all" ? "border rounded-xl shadow-sm bg-white p-3" : "min-w-[250px] border rounded-xl shadow-sm bg-white p-2 hover:shadow-lg transition-all duration-300"}`}>
            <div className="relative overflow-hidden rounded-lg h-[300px] cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
              <img src={product.img} alt={product.name} className="w-full h-full object-cover object-center transition-transform hover:scale-110" />
              <button onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }} className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                {wishlist.includes(product.id) ? <FaHeart className="text-red-500 text-lg" /> : <FaRegHeart className="text-gray-500 text-lg" />}
              </button>
            </div>
            <div className="p-2">
              <p className="font-medium text-gray-800">{product.name}</p>
              <div className="mt-1 text-sm text-gray-600">
                <span className="font-semibold">₹{product.price}</span>
                {product.oldPrice && <span className="ml-2 line-through text-gray-400">₹{product.oldPrice}</span>}
                {product.discount && <span className="ml-2 text-red-500">{product.discount}</span>}
              </div>
              <p className="text-red-600 text-sm">Now at ₹{product.finalPrice}</p>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-yellow-500 flex items-center"><FaStar className="mr-1" /> {product.rating}</span>
                <span className="ml-2 text-gray-500">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => scroll("right")} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100"><FaChevronRight /></button>

      <div className="flex justify-center mt-6">
        <button onClick={() => setSelectedCategory("all")} className={`px-6 py-2 border border-gray-700 rounded-md ${selectedCategory === "all" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"} transition`}>VIEW ALL</button>
      </div>
    </div>
  );
}