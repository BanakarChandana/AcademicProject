import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const georgetteProducts = [
  {
    id: 1,
    img:  "https://tipsandbeauty.com/wp-content/uploads/2022/09/Ruffled-Georgette-Kurti-240x300.jpg",
    title: "GeorgetteKart 1",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 2,
    img:     "https://assets0.mirraw.com/images/4942321/image_long.jpeg?1537448522",
    title: "GeorgetteKart 2",
    price: 2100,
    oldPrice: 2500,
    discount: "20% OFF",
    flatPrice: 2000,
  },
  {
    id: 3,
    img:     "https://walusha.in/cdn/shop/files/7_beca3806-2e4a-4867-af7f-7b4acd1b5bdc.jpg?v=1692769831&width=1946",
    title: "GeorgetteKart 3",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 4,
    img: "https://assets0.mirraw.com/images/7321619/image_zoom.jpeg?1566565455",
    title: "GeorgetteKart 4",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 5,
    img:     "https://tse1.mm.bing.net/th/id/OIP.EaldqQA0iHONaTnl5PpqygHaKL?pid=Api&P=0&h=180",
    title: "GeorgetteKart 5",
    price: 2300,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 6,
    img:  "https://ik.imagekit.io/ldqsn9vvwgg/images/1604764.jpg",
    title: "GeorgetteKart 6",
    price: 2500,
    oldPrice: 3400,
    discount: "5% OFF",
    flatPrice: 2000,
  },
  {
    id: 7,
    img: "https://5.imimg.com/data5/VW/FX/MY-46097799/designer-georgette-kurti-500x500.jpg",
    title: "GeorgetteKart 7",
    price: 1900,
    oldPrice: 2000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 8,
    img:  "https://www.dfcsl.com/wp-content/uploads/2018/11/kurti-2.jpg",
    title: "GeorgetteKart 8",
    price: 3500,
    oldPrice: 4800,
    discount: "20% OFF",
    flatPrice: 2000,
  },
  {
    id: 9,
    img: "http://walusha.in/cdn/shop/files/12_dd244b8e-002c-4f5f-b5ca-b107895bbef9.jpg?v=1692770024",
    title: "GeorgetteKart 9",
    price: 1500,
    oldPrice: 2000,
    discount: "5% OFF",
    flatPrice: 2000,
  },
  {
    id: 10,
    img:  "https://tse4.mm.bing.net/th/id/OIP.Jy5G71q4X4kLzMT1Iq23mwHaJ4?pid=Api&P=0&h=180",
    title: "GeorgetteKart 10",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 11,
    img:      "https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/safa-fashion-1107-georgette-pakistani-kurti-4943.jpg",
    title: "GeorgetteKart 11",
    price: 1000,
    oldPrice: 1500,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 12,
    img:  "https://www.kashmirvilla.com/cdn/shop/files/pink-lining-kashmiri-kurti-multicolour-all-over-front-back-embroidery-georgette-kurtis-113.jpg?v=1719138173&width=800",
    title:" GeorgetteKart 12",
    price: 2500,
    oldPrice: 4300,
    discount: "20% OFF",
    flatPrice: 2000,
  },
   {
    id: 13,
    img: "https://i.pinimg.com/originals/20/59/7e/20597ef800251004dfb9f503cc9fa7fe.jpg",
    title: "GeorgetteKart 13",
    price: 950,
    oldPrice:1300,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 14,
    img:"https://assets2.andaazfashion.com/media/catalog/product/s/t/stone-work-embroidered-velvet-dark-purple-lehenga-llcv09967-1.jpg",
    title: "GeorgetteKart 14",
    price:850,
    oldPrice: 1800,
    discount: "20% OFF",
    flatPrice: 2000,
  },
   {
    id: 15,
    img: "https://2.bp.blogspot.com/-10mFubLUpTA/Vi74xStTquI/AAAAAAAADHo/8BXXYV7Lwag/s1600/19.jpg",
    title: "GeorgetteKart 15",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 16,
    img: "https://4.imimg.com/data4/BT/PP/ANDROID-10594601/product-500x500.jpeg",
     title: "GeorgetteKart 16",
    price: 1500,
    oldPrice: 2000,
    discount: "15% OFF",
    flatPrice: 2000,
  },
   {
    id: 17,
    img: "https://4.imimg.com/data4/SO/SI/MY-9496923/skz-22-500x500.jpg",
    title: "GeorgetteKart17",
    price: 2100,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 18,
    img: "https://www.rajwadi.com/image/cache/data/designer-chiffon-lehenga-choli-for-women-41879-800x1100.jpg",
    title: "GGeorgetteKart 18",
    price: 3500,
    oldPrice: 3800,
    discount: "15% OFF",
    flatPrice: 2000,
  },
   {
    id: 19,
    img:"https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/new-fancy-georgette-kurtis-7162.jpg",
    title: "GeorgetteKart 19",
    price: 2500,
    oldPrice: 2900,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 20,
    img:"https://i.pinimg.com/originals/19/2b/17/192b17428220631796399851f330f49c.jpg",
    title: "GeorgetteKart 20",
    price: 3500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 21,
    img:"https://cdn.sareeka.com/image/data2023/purple-sequins-gown-262405.jpg",
    title: "GeorgetteKart 21",
    price: 2400,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id:22,
    img: "https://i.pinimg.com/originals/03/10/6c/03106ccac47f9fc273bb32bf3b461198.jpg",
    title:" GeorgetteKart 22",
    price: 2100,
    oldPrice:2000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 23,
    img:"https://5.imimg.com/data5/WN/WU/MY-9693816/designer-georgette-kurti-1000x1000.jpeg",
    title: "GeorgetteKart 23",
    price: 2200,
    oldPrice: 2500,
    discount: "10% OFF",
    flatPrice: 2000,
  },
];

function GeorgetteKart() {
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
        GeorgetteKart
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

export default GeorgetteKart;