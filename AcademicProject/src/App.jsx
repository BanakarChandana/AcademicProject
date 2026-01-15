import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainpage from "./Component1/Mainpage";
import HomePage from "./HomePage";
import LoginPage from "./Component1/LoginPage";
import SignupPage from "./Component1/SignupPage";
import RithuDes from "./RithuDes";
import LocateStore from "./LocateStore";
import Contect from "./Contect";
import Whishlist from "./Whishlist";
import AnitaDongre from "./AnitaDongre.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import Neetlulla from "./Component1/Component2/Neetlulla.jsx";
import LehengaTabs from "./Component1/Component2/LehengaTabs.jsx";
import ProductPage from "./ProductPage.jsx";
import Velvet from "./Component1/Component3/Velvet";
import Denim from "./Component1/Component3/Denim";
import Georgette from "./Component1/Component3/Georgette";
import Srees from "./Component1/Component3/Sarees";
import Livin from "./Component1/Component3/Livin";
import Silk from "./Component1/Component3/Silk";
import SkirtsShorts from "./Component1/Component3/SkirtsShorts";


export default function App() {
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist_sarees_v1")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("wishlist_sarees_v1", JSON.stringify(wishlist));
    } catch { }
  }, [wishlist]);

  const toggleWishlist = (id) =>
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Mainpage />} />
        <Route path="/Home" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/Anita"
          element={<AnitaDongre wishlist={wishlist} toggleWishlist={toggleWishlist} />}
        />

        {/* ✔ Directly show Neeta content without NeetaPage.jsx file */}
        <Route
          path="/Neeta"
          element={
            <>
              <Neetlulla />
              <LehengaTabs wishlist={wishlist} toggleWishlist={toggleWishlist} />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductPage wishlist={wishlist} toggleWishlist={toggleWishlist} />}
        />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/Rithu" element={<RithuDes />} />
        <Route path="/LocateStore" element={<LocateStore />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Whishlist" element={<Whishlist />} />
        <Route path="/velvet" element={<Velvet />} />
        <Route path="/denim" element={<Denim />} />
        <Route path="/georgette" element={<Georgette />} />
        <Route path="/srees" element={<Srees />} />
        <Route path="/livin" element={<Livin />} />
        <Route path="/silk" element={<Silk />} />
        <Route path="/skirts-shorts" element={<SkirtsShorts />} />

      </Routes>
    </Router>
  );
}
