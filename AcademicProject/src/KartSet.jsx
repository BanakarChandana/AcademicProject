
import React, { useState } from "react";
import VeletKart from './VeletKart';
import SilkCart from'./SilkKart';
import GeorgetteKart from './GeorgetteKart';
function KartSet() {
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
      </div>

      {/* Conditional Rendering */}
      <div>
        {activeTab === "velvet" && <VeletKart />}
        {activeTab === "silk" && < SilkCart/>}
        {activeTab === "georgette" && <GeorgetteKart />}
      </div>
       
     
    </div>
  );
}
  

export default KartSet
