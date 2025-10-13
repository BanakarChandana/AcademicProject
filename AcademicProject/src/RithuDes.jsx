import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import KartSet from "./KartSet";

function RithuDes() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="p-8 bg-gray-50 min-h-screen relative">
      {/* Back Button */}
      <button
        onClick={() => navigate("/Home")} // Navigate to home page
        className="absolute top-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Ritu Kumar
      </h1>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Image Section */}
        <div className="w-full md:w-2/6">
          <img
            src="https://images.pexels.com/photos/5692479/pexels-photo-5692479.jpeg"
            alt="Ritu Kumar Design"
            className="h-180 rounded-2xl"
          />
        </div>

        {/* Description Section */}
        <div className="w-full md:w-2/3 p-6">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <b>
              <span className="text-4xl">R</span>itu Kumar
            </b>{" "}
            is one of India’s most celebrated fashion designers, known as a
            pioneer of the Indian fashion industry. She started her journey in
            the late 1960s, reviving India’s rich textile heritage with
            hand-block printing, embroidery, and natural fabrics. 
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Her designs beautifully combine traditional craftsmanship with
            modern aesthetics. She has designed wardrobes for Miss India 
            contestants, Bollywood stars, and even international celebrities
            including <b>Princess Diana</b>. Her work is recognized for
            redefining bridal wear and ethnic fashion in India.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            In recognition of her immense contribution to Indian fashion, she
            was awarded the prestigious <b>Padma Shri</b> in 2013. Her brand
            today includes <b>Ritu Kumar (Couture)</b>, <b>Ri (Prêt)</b>, and{" "}
            <b>Label Ritu Kumar</b>, making her a global name in fashion.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ritu Kumar’s philosophy has always been rooted in preserving Indian
            culture while making it relevant to modern lifestyles. She draws
            inspiration from ancient Indian art, folk traditions, and royal
            costumes, transforming them into contemporary fashion statements.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Over the decades, she has played a key role in empowering rural
            artisans by creating sustainable employment opportunities. By
            reviving crafts like zardozi, block-printing, and handloom weaving,
            she has given global recognition to Indian craftsmanship.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Today, Ritu Kumar’s designs are seen on red carpets, fashion weeks,
            and weddings worldwide. Her unique ability to blend heritage with
            modern elegance continues to inspire a new generation of designers
            and fashion lovers alike.
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="flex items-center justify-center mt-6">
        <p className="text-4xl">Ritu Kumar Designs</p>
      </div>

      {/* KartSet Component */}
      <div>
        <KartSet />
      </div>
    </div>
  );
}

export default RithuDes;
