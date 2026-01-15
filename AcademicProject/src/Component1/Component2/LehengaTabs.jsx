import React, { useState } from "react";
import VelvetLehenga from "./velvetLenenga.jsx";   // fixed
import SilkLehenga from "./SilkLehenga.jsx";
import GeorgetteLehenga from "./GeorgetteLehenga.jsx";
import ProductList from "./ProductList.jsx";

function LehengaTabs() {
  const [activeTab, setActiveTab] = useState("velvet");

  return (
    <div className="p-5">
      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("velvet")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "velvet"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Velvet
        </button>

        <button
          onClick={() => setActiveTab("silk")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "silk"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Silk
        </button>

        <button
          onClick={() => setActiveTab("georgette")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "georgette"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Georgette
        </button>

        <button
          onClick={() => setActiveTab("productList")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "productList"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          All Products
        </button>
      </div>

      {/* Conditional Rendering */}
      <div>
        {activeTab === "velvet" && <VelvetLehenga />}
        {activeTab === "silk" && <SilkLehenga />}
        {activeTab === "georgette" && <GeorgetteLehenga />}
        {activeTab === "productList" && <ProductList />}
      </div>
    </div>
  );
}

export default LehengaTabs;
