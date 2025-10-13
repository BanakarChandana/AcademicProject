import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag
} from "react-icons/fi";
import {
  FaChevronLeft,
  FaChevronRight 
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Contect from "./Contect"; // 👈 import popup

// Banner Images
const images = [
  "https://images.pexels.com/photos/6347952/pexels-photo-6347952.jpeg",
  "https://images.pexels.com/photos/8770070/pexels-photo-8770070.jpeg",
  "https://images.pexels.com/photos/5710222/pexels-photo-5710222.jpeg"
];

// Categories
const categories = [
  {
    name: "Ritu Kumar",
    img: "https://images.pexels.com/photos/5692479/pexels-photo-5692479.jpeg",
    path: "/Rithu"
  },
  {
    name: "Anita Dongre",
    img: "https://images.pexels.com/photos/3738087/pexels-photo-3738087.jpeg",
    path: "/Anita"
  },
  {
    name: "Rohit Bal",
    img: "https://images.pexels.com/photos/10509860/pexels-photo-10509860.jpeg",
    path: "/Rohit"
  },
  {
    name: "Neeta Lulla",
    img: "https://images.pexels.com/photos/5908822/pexels-photo-5908822.jpeg",
    path: "/Neeta"
  }
];

// Marquee Component
function MarqueeText({ text }) {
  const repeated = Array(30).fill(text).join(" • ");
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-4">
      <div className="inline-block animate-marquee text-lg font-semibold px-8">
        {repeated}
      </div>
    </div>
  );
}

// Store Locator Banner
function StoreLocatorBanner() {
  const locations = ["Wakad, Pune", "Baner, Pune", "Kothrud, Pune", "Andheri, Mumbai"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [locations.length]);

  return (
    <div className="w-full bg-gray-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-light">
          FIND THE <span className="font-bold">NEAREST STORE</span>
        </h2>
        <div className="mt-4 flex flex-col items-center md:items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 22s8-7.58 8-13a8 8 0 10-16 0c0 5.42 8 13 8 13z" />
          </svg>
          <p className="text-lg md:text-xl font-medium mt-2">
            {locations[currentIndex]}
          </p>
          <button
            className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
            onClick={() => navigate("/LocateStore")}
          >
            LOCATE STORE
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg"
          alt="Store Model"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

// Home Page
function HomePage() {
  const navigate = useNavigate();
  const [showImg, setImg] = useState(0);
  const [showContect, setShowContect] = useState(false); // 👈 modal state

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setImg((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex items-center justify-between px-2 py-3 bg-white shadow-md">
        <div className="text-2xl font-bold">TrendyThreads</div>
        <div className="relative w-64">
          <FiSearch className="absolute top-2.5 left-3 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="flex gap-4 text-xl items-center">
          <FiHeart
            className="cursor-pointer transform transition duration-300 hover:scale-125"
            onClick={() => navigate('/Whishlist')}
          />
          <FiUser
            className="cursor-pointer transform transition duration-300 hover:scale-125"
            onClick={() => setShowContect(true)} // 👈 open popup
          />
          <div className="relative cursor-pointer">
            <FiShoppingBag onClick={() => navigate('/AddCart')} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
          <RxHamburgerMenu className="cursor-pointer transform transition duration-300 hover:scale-125" />
        </div>
      </div>

      
      {/* Banner Carousel */}
      <div className="relative w-full overflow-hidden mt-4">
        <img
          src={images[showImg]}
          alt="carousel banner"
          className="w-full object-cover transition-all duration-500"
        />
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Marquee */}
      <MarqueeText text="Designed For Indian Curves" />

      {/* Categories */}
      <div className="relative w-full py-8">
        <h2 className="text-4xl font-semibold px-6 mb-4">Designers Category</h2>
        <div className="flex gap-6 overflow-x-auto scroll-smooth px-12 py-4 no-scrollbar">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="min-w-[120px] cursor-pointer flex flex-col items-center"
              onClick={() => navigate(cat.path)}
            >
              <div className="w-28 h-28 ml-40 rounded-2xl overflow-hidden border shadow-md transform transition duration-300 hover:scale-110">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 ml-40 text-sm font-medium text-center">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Store Locator */}
      <StoreLocatorBanner />

      {/* Contact Popup */}
      {showContect && <Contect onClose={() => setShowContect(false)} />}

      {/* Footer */}
      <Footer />
      {/* 👇 Back to Main Page Button */}
      <div className="px-4 ">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition shadow"
        >
          ← Back to Main
        </button>
      </div>

    </div>
  );
}

export default HomePage;
