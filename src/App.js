// App.js
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import HowToShop from "./pages/HowToShop";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import BestSellerPage from "./components/products/BestSellerPage";
import AboutPage from "./pages/About";
import ProfilePage from "./pages/Profile";
import "./styles/layout.css"; // File CSS tambahan

function App() {
  return (
    <div className="app-container">
      <CartProvider>
        <Routes>
          <Route path="/best-seller" element={<BestSellerPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/HowToShop" element={<HowToShop />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
