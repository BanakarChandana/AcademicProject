import React from "react";

function ProductCard({ item }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-200  object-cover rounded-xl"
                />

                <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-4xl">
                    ♥
                </button>
            </div>
            <div className="p-3">
                <h3 className="text-gray-800 font-medium">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-600 font-semibold">₹{item.price}</span>
                    <span className="line-through text-gray-500">₹{item.oldPrice}</span>
                    <span className="text-green-600">{item.discount}</span>
                </div>
                <p className="text-sm text-red-600">
                    Now at <span className="font-semibold">₹{item.flatPrice}</span> with
                    FLAT15
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
