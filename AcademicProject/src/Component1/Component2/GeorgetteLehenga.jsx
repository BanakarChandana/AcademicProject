import React, { useState } from "react";
// Assuming ProductCard is defined in a separate file, but we'll define a simple one here for completeness.
// import ProductCard from "./ProductCard"; 
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowLeft } from "react-icons/fa";

// --- Dummy ProductCard Component (Required for the code to run) ---
const ProductCard = ({ item, onClick }) => (
    <div 
        className="w-full h-150 max-w-sm bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.03]"
        onClick={() => onClick(item)}
    >
        <img 
            className="w-full h-150 object-cover" 
            src={item.img} 
            alt={item.title} 
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold truncate">{item.title}</h3>
            <div className="flex items-baseline mt-2">
                <span className="text-xl font-bold text-gray-900 mr-2">
                    ₹{item.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                    ₹{item.oldPrice}
                </span>
            </div>
        </div>
    </div>
);
// -----------------------------------------------------------------


// --- ProductImageGallery Component (Provided in the prompt) ---
const ProductImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]); 

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Thumbnail column */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
        {images.map((image, index) => (
          <div
            key={index}
            className={`
              w-24 h-20 md:w-28 md:h-28 flex-shrink-0
              border-2 rounded-lg cursor-pointer
              hover:border-gray-400
              ${mainImage.src === image.src ? 'border-gray-800' : 'border-gray-200'}
              transition-all duration-200 ease-in-out
            `}
            onClick={() => handleThumbnailClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Main image display */}
      <div className="flex-grow">
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          className="w-full h-auto object-contain rounded-lg shadow-md max-h-[600px]"
        />
      </div>
    </div>
  );
};
// -----------------------------------------------------------------


// --- ProductPage Component (Modified to accept a product item and use its data) ---
const ProductPage = ({ product, onBack }) => {
    // For demonstration, we'll create a simple 'images' array from the main product image.
    // In a real application, the product data would contain multiple image URLs.
    const productImages = [
        { src: product.img, alt: `${product.title} - Main View` },   
        // Add dummy alternative views
        { src: 'https://via.placeholder.com/300/f0f0f0?text=View+2', alt: 'Product View 2' },
        { src: 'https://via.placeholder.com/300/e0e0e0?text=View+3', alt: 'Product View 3' },
    ];

    return (
        <div className="container mx-auto mt-8 p-4">
            <button
                onClick={onBack}
                className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-4"
            >
                <FaArrowLeft className="mr-2" /> Back to All Lehengas
            </button>
            <h1 className="text-3xl font-bold text-center mb-6">{product.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="md:col-span-1">
                    <ProductImageGallery images={productImages} />
                </div>

                {/* Product Details */}
                <div className="md:col-span-1 p-4">
                    <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        <span className="line-through text-gray-500">₹{product.oldPrice.toLocaleString()}</span>{' '}
                        <span className="text-red-600 font-bold">₹{product.price.toLocaleString()}</span>
                        <span className="text-green-600 ml-2">({product.discount})</span>
                    </p>
                    <p className="text-gray-600 mb-4">
                        Beautifully crafted georgette lehenga with intricate work. A perfect addition to your festive wardrobe.
                    </p>
                    
                    {/* Dummy Details */}
                    <div className="mt-6">
                        <h3 className="text-xl font-medium mb-2">Available Sizes:</h3>
                        <div className="flex gap-2">
                            {['S', 'M', 'L', 'XL'].map(size => (
                                <button
                                    key={size}
                                    className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="mt-8 w-full bg-purple-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
// -----------------------------------------------------------------


// --- GeorgetteLehenga Component (Renamed/Modified to handle detail view) ---

// Sample Products (kept as is)
const georgetteProducts = [
   {
    id: 1,
    img:  "https://getethnic.com/wp-content/uploads/2022/09/Silk_Lehenga_2.jpeg",
    title: "Georgette Lehenga 1",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 2,
    img:     "https://i.pinimg.com/originals/4c/87/60/4c87607483e5ac98d6af95b8032045dc.jpg",
    title: "Georgette Lehenga 2",
    price: 2100,
    oldPrice: 2500,
    discount: "20% OFF",
    flatPrice: 2000,
  },
   {
    id: 3,
    img:     "https://img.klothtrend.com/imgbook/product/wc/20230310/16784534211429691913.webp",
    title: "Georgette Lehenga 3",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 4,
    img: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/a12781a7f2ccb3d663f7fd01e1bd2e4e/r/a/rani-pink-silk-embroidered-bridal-lehenga-llcv113297-1.jpg",
    title: "Georgette Lehenga 4",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 5,
    img:     "https://udaipurbazar.com/images/thumbs/0002041_black-velvet-sequins-lehenga_510.jpeg",
    title: "Georgette Lehenga 5",
    price: 2300,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 6,
    img:  "https://i.pinimg.com/originals/45/33/9b/45339bc3a351cccac83ce21b7bcff907.jpg",
    title: "Georgette Lehenga 6",
    price: 2500,
    oldPrice: 3400,
    discount: "5% OFF",
    flatPrice: 2000,
  },
  {
    id: 7,
    img: "https://img.faballey.com/images/Product/XLH50700Z/d4.jpg",
    title: "Georgette Lehenga 7",
    price: 1900,
    oldPrice: 2000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 7,
    img: "https://img.faballey.com/images/Product/XLH50700Z/d4.jpg",
    title: "Georgette Lehenga 7",
    price: 1900,
    oldPrice: 2000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 8,
    img:  "https://www.sareespalace.com/image/cache/data-2025/green-mirror-a-line-lehenga-choli-326533-1000x1375.jpg",
    title: "Georgette Lehenga 8",
    price: 3500,
    oldPrice: 4800,
    discount: "20% OFF",
    flatPrice: 2000,
  },
  {
    id: 9,
    img: "https://omsaraimages.s3.eu-west-2.amazonaws.com/wp-content/uploads/20191111223642/40021.jpg",
    title: "Georgette Lehenga 9",
    price: 1500,
    oldPrice: 2000,
    discount: "5% OFF",
    flatPrice: 2000,
  },
  {
    id: 10,
    img:  "https://www.pngitem.com/pimgs/b/513-5130316_lehenga-png.png",
    title: "Georgette Lehenga 10",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
    {
    id: 11,
    img:      "https://5.imimg.com/data5/SELLER/Default/2022/4/VB/MK/UX/18451800/whatsapp-image-2022-04-16-at-6-31-49-pm-500x500.jpeg",
    title: "Georgette Lehenga 11",
    price: 1000,
    oldPrice: 1500,
    discount: "10% OFF",
    flatPrice: 2000,
  },
  {
    id: 12,
    img:  "https://i.pinimg.com/736x/54/26/dc/5426dca4e2221b7d343ae2cbee552ef3.jpg",
    title: "Georgette Lehenga 12",
    price: 2500,
    oldPrice: 4300,
    discount: "20% OFF",
    flatPrice: 2000,
  },
   {
    id: 13,
    img: "https://i.pinimg.com/736x/33/82/f4/3382f42badc5246bdbe620569884deb0.jpg",
    title: "Georgette Lehenga 13",
    price: 950,
    oldPrice:1300,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 14,
    img:"https://assets2.andaazfashion.com/media/catalog/product/s/t/stone-work-embroidered-velvet-dark-purple-lehenga-llcv09967-1.jpg",
    title: "Georgette Lehenga 14",
    price:850,
    oldPrice: 1800,
    discount: "20% OFF",
    flatPrice: 2000,
  },
   {
    id: 15,
    img: "https://shaadiwish.com/blog/wp-content/uploads/2021/11/bridal-lehenga-designs.jpg",
    title: "Georgette Lehenga 15",
    price: 2500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 16,
    img: "https://tse1.mm.bing.net/th/id/OIP.TmYEC2WYfT4u1Z1vKt1DHQAAAA?pid=Api&P=0&h=180",
     title: "Georgette Lehenga 16",
    price: 1500,
    oldPrice: 2000,
    discount: "15% OFF",
    flatPrice: 2000,
  },
   {
    id: 17,
    img: "https://i.pinimg.com/originals/08/89/05/08890557a2b33180710ad886902a6607.jpg",
    title: "Georgette Lehenga 17",
    price: 2100,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 18,
    img: "https://www.rajwadi.com/image/cache/data/designer-chiffon-lehenga-choli-for-women-41879-800x1100.jpg",
    title: "Georgette Lehenga 18",
    price: 3500,
    oldPrice: 3800,
    discount: "15% OFF",
    flatPrice: 2000,
  },
  {
    id: 19,
    img:"https://clothsvilla.com/cdn/shop/products/Bridallehengadesign_900x_0fdcba1c-a302-4dd3-9651-1fc2f0442ec6_1024x1024.jpg?v=1655191111",
    title: "Georgette Lehenga 19",
    price: 2500,
    oldPrice: 2900,
    discount: "10% OFF",
    flatPrice: 2000,
  },
   {
    id: 20,
    img:"https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-net-lehenga-in-sky-blue-v1-luf3378.jpg",
    title: "Georgette Lehenga 20",
    price: 3500,
    oldPrice: 3800,
    discount: "10% OFF",
    flatPrice: 2000,
  },
{
    id: 21,
    img:"https://cdn.sareeka.com/image/data2023/purple-sequins-gown-262405.jpg",
    title: "Georgette Lehenga 21",
    price: 2400,
    oldPrice: 3000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
    {
    id:22,
    img: "https://cdn.shopify.com/s/files/1/0285/1004/collections/image_93c2090f-9c0b-416e-8dfb-210b7d377553.jpg?v=1645873709",
    title: "Georgette Lehenga 22",
    price: 2100,
    oldPrice:2000,
    discount: "10% OFF",
    flatPrice: 2000,
  },
 {
    id: 23,
    img:"https://i.pinimg.com/736x/18/5b/0e/185b0eaccd4dd741e94bcde2a5945e81.jpg",
    title: "Georgette Lehenga 23",
    price: 2200,
    oldPrice: 2500,
    discount: "10% OFF",
    flatPrice: 2000,
  },
 {
    id: 24,
    img:      "https://5.imimg.com/data5/SELLER/Default/2022/4/VB/MK/UX/18451800/whatsapp-image-2022-04-16-at-6-31-49-pm-500x500.jpeg",
    title: "Georgette Lehenga 11",
    price: 1000,
    oldPrice: 1500,
    discount: "10% OFF",
    flatPrice: 2000,
  },



]


   

function GeorgetteLehenga({ onProductSelect }) {
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
                Georgette Lehenga
            </h2>

            {/* ✅ View All Mode */}
            {viewAll ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {georgetteProducts.map((item) => (
                        <ProductCard key={item.id} item={item} onClick={onProductSelect} />
                    ))}
                </div>
            ) : (
                <>
                    {/* ✅ Slider Mode */}
                    <div className="flex justify-center gap-4">
                        {visibleProducts.map((item) => (
                            <ProductCard key={item.id} item={item} onClick={onProductSelect} />
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
// -----------------------------------------------------------------


// --- Main Wrapper Component to manage state (Exported) ---
function ProductDisplayWrapper() {
    // State to track the selected product for the detail view
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Handler to switch to the Product Page
    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    };

    // Handler to switch back to the Listing Page
    const handleBack = () => {
        setSelectedProduct(null);
    };

    if (selectedProduct) {
        // Render Product Detail Page (ProductPage) if a product is selected
        return <ProductPage product={selectedProduct} onBack={handleBack} />;
    } else {
        // Render Product Listing/Slider (GeorgetteLehenga)
        return <GeorgetteLehenga onProductSelect={handleProductSelect} />;
    }
}

export default ProductDisplayWrapper;