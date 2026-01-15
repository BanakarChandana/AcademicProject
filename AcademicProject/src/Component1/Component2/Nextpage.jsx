import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function Nextpage() {
  return (
    <Router>
      <Routes>
        {/* Home with categories */}
        <Route path="/" element={<HomePage />} />

        {/* Dynamic category page */}
        <Route path="/category/:name" element={<CategoryPage />} />

        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Nextpage;