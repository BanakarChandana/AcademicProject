import React, { useState } from "react";

function ProductCard({ item }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="
        w-64 sm:w-72 md:w-80 lg:w-96   /* responsive width */
        bg-white shadow-lg rounded-2xl overflow-hidden
        transform transition duration-700
        hover:scale-105 hover:-translate-y-3 hover:shadow-2xl
        animate-slideUp
      "
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-64 sm:h-72 md:h-96 lg:h-[28rem] object-cover rounded-t-2xl"
        />

        {/* Like Button with Heart Pop Animation */}
        <button
          onClick={() => {
            setLiked(!liked);
          }}
          className={`absolute top-3 right-3 text-2xl sm:text-3xl md:text-4xl transition-transform duration-300 ${
            liked
              ? "text-red-500 animate-heartBeat"
              : "text-gray-600 hover:text-red-400"
          }`}
        >
          ♥
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5 text-center">
        <h3 className="text-gray-800 font-semibold text-lg sm:text-xl md:text-2xl">
          {item.title}
        </h3>

        <div className="flex justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg mt-2">
          <span className="text-red-600 font-bold">₹{item.price}</span>
          <span className="line-through text-gray-500">₹{item.oldPrice}</span>
          <span className="text-green-600">{item.discount}</span>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-red-600 mt-2">
          Now at <span className="font-semibold">₹{item.flatPrice}</span> with{" "}
          <span className="text-purple-700 font-bold">FLAT15</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;