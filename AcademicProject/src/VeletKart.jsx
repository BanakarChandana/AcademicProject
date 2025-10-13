import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const georgetteProducts = [
  {
    id: 1,
    img: "https://trendia.co/cdn/shop/products/DSC6986.jpg?v=1749618785",
    title: "      Velvet Karts 1",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 2,
    img:  "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/k/r/kr4351.jpg",
    title: "      Velvet Karts 2",
    price: 2100,
    oldPrice: 2500,
    discount: "20% OFF",
    flatPrice: 2000,
  },
  {
    id: 3,
    img:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgO9Fbt88ffAh6TAmortoXa3YSmew1UXbh5LMQufLrl7FSmMWlZHWZqiOyStyHQVmCUT0&usqp=CAU",
    title: "      Velvet Karts 3",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 4,
    img: "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/1/_/1_80345.jpg",
    title: " Velvet Karts 4",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 5,
    img:     "https://www.shauryasanadhya.com/cdn/shop/products/DSC7030_1400x.jpg?v=1745482264",
    title: " Velvet Karts 5",
    price: 2300,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 6,
    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8g4ObqvjDvGujAZuCYg8ifyyVoRb7Hgmu6GLVcj3zqh2pToNzNY9vBGaNW6iw8creFw&usqp=CAU",
    title: "Velvet Karts 6",
    price: 2500,
    oldPrice: 3400,
    discount: "5% OFF",
    flatPrice: 2000,
  },
  {
    id: 7,
    img: "https://rajiramniq.com/cdn/shop/files/FAR-022-A.jpg?v=1751867682",
    title: " Velvet Karts 7",
    price: 1900,
    oldPrice: 2000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 8,
    img:  "https://www.hasli.in/cdn/shop/products/IMG_8559_800x.jpg?v=1668012145",
    title: "      Velvet Karts 8",
    price: 3500,
    oldPrice: 4800,
    discount: "20% OFF",
    flatPrice: 2000,
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnP2ZRJZ6Z_wQdt9-QH7KdAFJU8jYQvSiiw&s",
    title: "      Velvet Karts 9",
    price: 1500,
    oldPrice: 2000,
    discount: "5% OFF",
    flatPrice: 2000,
  },
  {
    id: 10,
    img: "https://ciceroni.in/cdn/shop/products/yasmin-velvet-kurta-set-of-3label-shreya-sharmakurta-set-festive-wearciceroni-252415.jpg?v=1702117514&width=1365" ,
    title: "      Velvet Karts 10",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/618aRtTUHJL._UY1100_.jpg",
    title: "      Velvet Karts 11",
    price: 1000,
    oldPrice: 1500,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 12,
    img: "https://sureenachowdhri.com/cdn/shop/files/Plum-Kalidaar-Silk-Velvet-Kurta-Set-7.jpg?v=1724817373" ,
    title: " Velvet Karts 12",
    price: 2500,
    oldPrice: 4300,
    discount: "20% OFF",
    flatPrice: 2000,
  },
   {
    id: 13,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GiTz3YfVVGEU3KgcF97YKAe9p3-hA8X0G8U8zD3IK7ZPWC01ZIkKKM8uW3OWTQAhOF8&usqp=CAU" ,
    title: "      Velvet Karts 13",
    price: 950,
    oldPrice:1300,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 14,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHcON5sFTfPArWMzpRZfIZ9x-vHT8xzsMX1ueG_tYSJ8pG_dOzhH35xu-e1YZGVXXCPk&usqp=CAU",
    title: "      Velvet Karts 14",
    price:850,
    oldPrice: 1800,
    discount: "20% OFF",
    flatPrice: 2000,
  },
   {
    id: 15,
    img:"https://imagescdn.jaypore.com/img/app/product/3/39709139-14607583.jpg?w=500&auto=format",
    title: "      Velvet Karts 15",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 16,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXDhsBVqWFmvOS7kAV7h48XatQRl7Y1bowkgOicAp38nqo15MJCViTk3bDCHgCRU53II&usqp=CAU",
     title: "      Velvet Karts 16",
    price: 1500,
    oldPrice: 2000,
    discount: "15% OFF",
    flatPrice: 2000,
  },
   {
    id: 17,
    img: "https://andaazbyjyotidhawan.com/cdn/shop/products/andaaz-Midnight-Black-Velvet-Kurta-Set-3.jpg?v=1638035732&width=1946",
    title: "      Velvet Karts 17",
    price: 2100,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 18,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFgaCq8VCAJAcI4mKSFwW-xkXr1tZZI2KehJlbOmPuNsaR7ZNOmoPTntBZE0ELpJ_9Ik&usqp=CAU",
    title: "      Velvet Karts 18",
    price: 3500,
    oldPrice: 3800,
    discount: "15% OFF",
    flatPrice: 2000,
  },
   {
    id: 19,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPi0RDFkDxYNmyhx2fZ0mzEY5ML5VsVbAwJsEE5KbQjGyLeicPsY0fBxmZxOgaM2Pwns&usqp=CAU",
    title: "      Velvet Karts 19",
    price: 2500,
    oldPrice: 2900,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 20,
    img:"https://www.talkingthreads.in/cdn/shop/files/TT-1467KS-LF10_2_800x.jpg?v=1756477950",
    title: "      Velvet Karts 20",
    price: 3500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 21,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUsbYANv8d2QwU3KAYacD_m5VGs8kYqt88g&s",
    title: "      Velvet Karts 21",
    price: 2400,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id:22,
    img: "https://www.sanskrutihomes.in/cdn/shop/files/IMGL5596_a8d9e07b-4481-4e04-8cb4-380c109d0543.jpg?v=1755583076&width=2048",
    title: "      Velvet Karts 22",
    price: 2100,
    oldPrice:2000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 23,
    img:"https://www.misri.in/cdn/shop/files/1WineVelvetEmpireLineDastaanKurtaSet_8.jpg?v=1703267303&width=800",
    title: "      Velvet Karts 23",
    price: 2200,
    oldPrice: 2500,
    discount: "10% OFF",
    flatPrice: 2000,
  },
];

function VelvetKart() {
  const [current, setCurrent] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const itemsToShow = 3;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % georgetteProducts.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + georgetteProducts.length) % georgetteProducts.length);
  };

  const visibleProducts = georgetteProducts.slice(current, current + itemsToShow);

  if (visibleProducts.length < itemsToShow) {
    visibleProducts.push(...georgetteProducts.slice(0, itemsToShow - visibleProducts.length));
  }

  return (
    <div className="relative p-5">
      <h2 className="text-3xl font-bold text-center mb-6">
        VelvetKart
      </h2>

      {/* ✅ View All Mode */}
      {viewAll ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {georgetteProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <>
          {/* ✅ Slider Mode */}
          <div className="flex justify-center gap-4">
            {visibleProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full shadow p-2"
          >
            <FaArrowAltCircleLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full shadow p-2"
          >
            <FaArrowAltCircleRight size={28} />
          </button>
        </>
      )}

      {/* Toggle Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setViewAll(!viewAll)}
          className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition"
        >
          {viewAll ? "Back to Slider" : "View All"}
        </button>
      </div>
    </div>
  );
}

export default VelvetKart;