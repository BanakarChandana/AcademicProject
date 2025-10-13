import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const georgetteProducts = [
  {
    id: 1,
    img:  "https://i.pinimg.com/originals/7b/72/1b/7b721be40daa79eb03e535e337fd785a.jpg",
    title: "SilkKart 1",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 2,
    img:     "https://www.wholesalecatalog.in/images/product/sub_images/2022/09/anju-silk-affair-catalog-designer-silk-kurti-pant-with-dupatta-2-2022-09-05_12_57_53.jpg",
    title: "SilkKart 2",
    price: 2100,
    oldPrice: 2500,
    discount: "20% OFF",
    flatPrice: 2000,
  },
  {
    id: 3,
    img:     "https://stylesatlife.com/wp-content/uploads/2021/08/Satin-Silk-Kurtis-for-Parties.jpg",
    title: "SilkKart 3",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 4,
    img: "https://i.pinimg.com/originals/0b/7d/c8/0b7dc80d284c5b62f49b5fe3059b75ee.jpg",
    title: "SilkKart 4",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 5,
    img:     "https://i.pinimg.com/originals/fe/e4/7d/fee47d839b552b02574e92a561bb80dc.jpg",
    title: "SilkKart 5",
    price: 2300,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 6,
    img:  "https://i.pinimg.com/originals/8c/d5/65/8cd5654722fafd94c25da2c0c8ba1ab3.jpg",
    title: "SilkKart 6",
    price: 2500,
    oldPrice: 3400,
    discount: "5% OFF",
    flatPrice: 2000,
  },
  {
    id: 7,
    img: "https://tse4.mm.bing.net/th/id/OIP.1rwWhSvd2ApJTme2gC-ugQHaJ1?pid=Api&P=0&h=180",
    title: "SilkKart 7",
    price: 1900,
    oldPrice: 2000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 8,
    img:  "https://tse2.mm.bing.net/th/id/OIP.ZQg3eWwPwmkxEu8yd6XgEgHaJQ?pid=Api&P=0&h=180",
    title: "SilkKart 8",
    price: 3500,
    oldPrice: 4800,
    discount: "20% OFF",
    flatPrice: 2000,
  },
  {
    id: 9,
    img: "https://yaamidesigns.com/wp-content/uploads/2022/09/Untitled-4.jpg",
    title: "SilkKart 9",
    price: 1500,
    oldPrice: 2000,
    discount: "5% OFF",
    flatPrice: 2000,
  },
  {
    id: 10,
    img:  "https://i.pinimg.com/originals/fd/56/22/fd56229b2e3bc3e94d3544a5c05bd5f1.jpg",
    title: "SilkKart 10",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 11,
    img:      "https://i.pinimg.com/originals/e1/ed/12/e1ed12645b484a0646d1685565823a90.jpg",
    title: "SilkKart 11",
    price: 1000,
    oldPrice: 1500,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 12,
    img:  "https://i.pinimg.com/originals/a1/fc/9c/a1fc9c118d607a56ebc5a67d58837b37.jpg",
    title: "SilkKart 12",
    price: 2500,
    oldPrice: 4300,
    discount: "20% OFF",
    flatPrice: 2000,
  },
   {
    id: 13,
    img: "https://assets0.mirraw.com/images/7683032/DSC_4437_zoom.jpg?1577361330",
    title: "SilkKart 13",
    price: 950,
    oldPrice:1300,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 14,
    img:"https://i.pinimg.com/originals/45/ec/4c/45ec4c473533ea4eb14ca6537d33c3cc.jpg",
    title: "SilkKart 14",
    price:850,
    oldPrice: 1800,
    discount: "20% OFF",
    flatPrice: 2000,
  },
   {
    id: 15,
    img: "https://i.pinimg.com/originals/93/c0/25/93c02562fde74650ded763574aafc9f5.jpg",
    title: "SilkKart 15",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 16,
    img: "https://i.pinimg.com/originals/75/88/98/75889859b358e7ce8a82538d722de2d6.jpg",
     title: "SilkKart 16",
    price: 1500,
    oldPrice: 2000,
    discount: "15% OFF",
    flatPrice: 2000,
  },
   {
    id: 17,
    img: "https://i.pinimg.com/originals/08/89/05/08890557a2b33180710ad886902a6607.jpg",
    title: "SilkKart 17",
    price: 2100,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 18,
    img: "https://assets0.mirraw.com/images/7683004/DSC_4371_zoom.jpg?1577361272",
    title: "SilkKart 18",
    price: 3500,
    oldPrice: 3800,
    discount: "15% OFF",
    flatPrice: 2000,
  },
   {
    id: 19,
    img:"https://d2x02matzb08hy.cloudfront.net/img/project_photo/image/10226993/55932/103.jpg",
    title: "SilkKart 19",
    price: 2500,
    oldPrice: 2900,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 20,
    img:"https://i.pinimg.com/originals/d9/f9/c0/d9f9c0fb5d3d619eeda2f730503c5790.jpg",
    title: "SilkKart 20",
    price: 3500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 21,
    img:"https://assets0.mirraw.com/images/7201560/image_zoom.jpeg?1562943449",
    title: "SilkKart 21",
    price: 2400,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id:22,
    img: "https://assets0.mirraw.com/images/5649172/image_zoom.jpeg?1515304562",
    title: "SilkKart 22",
    price: 2100,
    oldPrice:2000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 23,
    img:"https://assets0.mirraw.com/images/7606082/image_zoom.jpeg?1575378230",
    title: "SilkKart 23",
    price: 2200,
    oldPrice: 2500,
    discount: "10% OFF",
    flatPrice: 2000,
  },
];

function SilkKart() {
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
        SilkKart
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

export default SilkKart;