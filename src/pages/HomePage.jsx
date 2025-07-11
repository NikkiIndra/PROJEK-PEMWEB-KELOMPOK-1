import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PromotionBanner from "../components/layout/PromotionBanner";
import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import CallToAction from "../components/home/BestProduct";
import ProductList from "../components/products/ProductList";
import Modal from "../components/common/Modal";
import axios from "axios";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setQuantity(1);
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost/Template-Ecommers-Pemweb/src/backend/get_products.php"
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("❌ Gagal load produk:", err));
  }, []);

  return (
    <div className="home-page">
      <PromotionBanner />
      <Header />
      <Container fluid="md" className="main-content">
        <HeroSection />
        <CallToAction />
        {/* Hanya satu bagian Produk Terbaik */}
        <section id="products" className="py-5">
          <h2 className="text-center mb-4">Produk Pilihan Kami</h2>

          <ProductList
            products={products}
            onAddToCart={openModal}
            cols={{ xs: 2, md: 3, lg: 4, xl: 5 }}
          />
        </section>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}
