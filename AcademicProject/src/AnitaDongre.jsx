// src/Components/AnitaDongre.jsx
import React from "react";
import ShopByOccasion from "./ShopByOccasion";

export default function AnitaDongre({ wishlist, toggleWishlist }) {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Anita Dongre</h1>

      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-2/6">
          <img src="/ad.png" alt="Anita Dongre" className="h-180 rounded-2xl shadow-xl border-4 border-gray-200" />
        </div>

        <div className="w-full md:w-2/3 p-6">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <b> <span className="text-4xl">A</span>nita Dongre </b> is one of India’s most influential fashion designers and the founder of the House of Anita Dongre, which includes popular brands such as AND, Global Desi, and her luxury couture label. She is widely admired for her ability to blend traditional Indian craftsmanship with modern, contemporary designs, especially in bridal wear and couture collections.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A strong advocate of sustainability, she promotes eco-friendly fabrics and ethical fashion, while also empowering rural artisans through her foundation, which supports handloom weaving and traditional crafts. Her creations have gained <b>global recognition</b> and have been worn by international personalities.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <b>A saree designer</b> is a fashion professional <b>who specializes in creating unique, stylish, and innovative sarees while preserving the essence of this traditional Indian attire.</b> Saree designers experiment with fabrics such as <b>silk, cotton, georgette, chiffon, and organza</b>.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Anita Dongre's work has received international recognition. Over the years, she has won several awards and has been featured in Forbes lists of powerful women entrepreneurs.
          </p>
           <p className="text-lg text-gray-700 leading-relaxed mb-4"> Anita Dongre is often called the <b>"Queen of Prêt"</b> in India because she revolutionized the ready-to-wear market for women. Unlike many designers who only focused on luxury couture, she made fashionable clothes affordable and accessible to everyday working women through her brands AND and Global Desi. </p> 


          <p className="text-lg text-gray-700 leading-relaxed">
            Today, saree designers are seen as cultural ambassadors, taking an age-old garment and transforming it into a versatile fashion piece that blends tradition with modern style.
          </p>
        </div>
      </div>

      <ShopByOccasion wishlist={wishlist} toggleWishlist={toggleWishlist} />
    </div>
  );
}