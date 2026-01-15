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
    img: "https://getethnic.com/wp-content/uploads/2022/09/Silk_Lehenga_2.jpeg",
    title: "Silk Lehenga 1",
    price: 1610,
    oldPrice: 1895,
    discount: "15% OFF",
    flatPrice: 1369,
  },

  {
    id: 2,
    img: "https://i.pinimg.com/originals/2e/d9/68/2ed968238a69571f45d83a411d1699ab.jpg",
    title: "Silk Lehenga 2",
    price: 2300,
    oldPrice: 2695,
    discount: "16% OFF",
    flatPrice: 1917,
  },
  {
    id: 3,
    img: "https://i.pinimg.com/originals/8e/c3/ca/8ec3cac8dc7b3c46cb4b46b1b41ed931.jpg",
    title: "Silk Lehenga 3",
    price: 1000,
    oldPrice: 1500,
    discount: "10% OFF",
    flatPrice: 1500,
  },
  {
    id: 4,
    img: "https://i.etsystatic.com/34948069/r/il/e27539/4813383777/il_1080xN.4813383777_1jsn.jpg",
    title: "Silk Lehenga 4",
    price: 1510,
    oldPrice: 1895,
    discount: "15% OFF",
    flatPrice: 1300,
  },
  {
    id: 5,
    img: "https://getethnic.com/wp-content/uploads/2022/09/Silk_Lehenga_11.jpg",
    title: "Silk Lehenga 5",
    price: 1610,
    oldPrice: 1895,
    discount: "15% OFF",
    flatPrice: 1369,
  },

  {
    id: 6,
    img: "https://i.pinimg.com/originals/16/8c/0e/168c0e62f97fd7bc928c4fabe0ea34e7.jpg",
    title: "Silk Lehenga 6",
    price: 1800,
    oldPrice: 1895,
    discount: "15% OFF",
    flatPrice: 1369,
  },
  {
    id: 7,
    img: "https://i.pinimg.com/736x/0e/5e/e1/0e5ee15206a85dcd9b405022291ef404.jpg",
    title: "Silk Lehenga 7",
    price: 1610,
    oldPrice: 1895,
    discount: "15% OFF",
    flatPrice: 1369,
  },
  {
    id: 8,
    img: "https://i.pinimg.com/originals/8c/1b/6a/8c1b6aa025ee0880852dcde3c6c06252.jpg",
    title: "Silk Lehenga 8",
    price: 1510,
    oldPrice: 1995,
    discount: "15% OFF",
    flatPrice: 1369,
  },
  {
    id: 9,
    img: "https://i.pinimg.com/originals/b6/99/5d/b6995d6c0872ca48ad0a096cdb9296fc.jpg",
    title: "Silk Lehenga 9",
    price: 1400,
    oldPrice: 1600,
    discount: "10% OFF",
    flatPrice: 1369,
  },
  {
    id: 10,
    img: "https://i.pinimg.com/originals/d6/18/5d/d6185dfd69cd4a6e5fb8cdc63cddaf1c.jpg",
    title: "Silk Lehenga 10",
    oldPrice: 1300,
    discount: "10% OFF",
    flatPrice: 1369,
  },
  {
    id: 11,
    img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2020/01/72084076_805621813187268_5427156768233435022_n.jpg",
    title: "Silk Lehenga 11",
    price: 1600,
    oldPrice: 1795,
    discount: "10% OFF",
    flatPrice: 1369,
  },
   {
    id: 12,
    img: "https://images.indianweddingsaree.com/product-image/2024104/1.jpg",
    title: "Silk Lehenga 12",
    price: 1610,
    oldPrice: 1895,
    discount: "15% OFF",
    flatPrice: 1369,
  },
   {
    id: 13,
    img:"https://getethnic.com/wp-content/uploads/2023/07/Silk_Lehenga_5-868x1024.jpeg",
    title: "Silk Lehenga 13",
    price: 2610,
    oldPrice: 2700,
    discount: "15% OFF",
    flatPrice: 1369,
  },
  {
  

    id: 14,
    img:"https://getethnic.com/wp-content/uploads/2023/07/Silk_Lehenga_19-600x710.jpeg",
    title: "Silk Lehenga 14",
    price: 1000,
    oldPrice: 1500,
    discount: "10% OFF",
    flatPrice: 1369,
  },
  {
    id: 15,
    img:"https://getethnic.com/wp-content/uploads/2023/07/Silk_Lehenga_1-600x844.jpeg",
    title: "Silk Lehenga 15",
    price: 900,
    oldPrice: 1000,
    discount: "10% OFF",
    flatPrice: 1369,
  },
   {
    id: 16,
    img: "https://tse3.mm.bing.net/th/id/OIP.tS_3whuRryhlHQF6z6kytQHaKL?pid=Api&P=0&h=180",
    title: "Silk Lehenga 16",
    price: 2610,
    oldPrice: 1895,
    discount: "15% OFF",
    flatPrice: 1369,
  },
  {
    id: 17,
    img: "https://i.pinimg.com/originals/0d/c7/aa/0dc7aa9d6838c53cef18330e184bc848.jpg",
    title: "Silk Lehenga 17",
    price: 2500,
    oldPrice: 1895,
    discount: "15% OFF",
    flatPrice: 1369,
  },
  {
    id: 18,
    img: "https://img.klothtrend.com/imgbook/product/wc/20220121/1642758436584166397.webp",
    title: "Silk Lehenga 18",
    price: 1500,
    oldPrice: 1895,
    discount: "15% OFF",
    flatPrice: 1369,
  },
   {
    id: 19,
    img:"https://tse2.mm.bing.net/th/id/OIP.CIfqcUkac6B85XFNz8DB_QHaKt?pid=Api&P=0&h=180",
    title: "Silk Lehenga 19",
    price: 3200,
    oldPrice:3500,
    discount: "10% OFF",
    flatPrice: 1369,
  },
  {
    id: 20,
    img: "https://i.pinimg.com/736x/81/d2/93/81d29309458d48d38285355dbf19183a.jpg",
    title: "Silk Lehenga 20",
    price: 1300,
    oldPrice: 1455,
    discount: "10% OFF",
    flatPrice: 1369,
  },
  {
    id: 21,
    img: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/001/523/836/new_medium/studio_2.0.jpg?1582286217",
    title: "Silk Lehenga 21",
    price: 1610,
    oldPrice: 1700,
    discount: "15% OFF",
    flatPrice: 1369,
  },
  {
    id: 22,
    img:"https://i.etsystatic.com/24156872/r/il/0a61b5/3862295723/il_1080xN.3862295723_hkjt.jpg",
    title: "Silk Lehenga 22",
    price: 1900,
    oldPrice: 2000,
    discount: "15% OFF",
    flatPrice: 1369,
  },
  {
    id: 23,
    img:"https://i.etsystatic.com/27466298/r/il/2a8367/5044865634/il_1080xN.5044865634_86ty.jpg",
    title: "Silk Lehenga 23",
    price: 2200,
    oldPrice: 2500,
    discount: "15% OFF",
    flatPrice: 1369,
  },
  {
    id: 24,
    img: "https://img.faballey.com/images/Product/XLH53903B/d4.jpg",
    title: "Silk Lehenga 24",
    price: 1400,
    oldPrice: 1600,
    discount: "15% OFF",
    flatPrice: 1369,
  },

  
];

   

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