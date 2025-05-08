import { useState } from "react";
import { Container } from "react-bootstrap";
import PromotionBanner from "../components/layout/PromotionBanner";
import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import CallToAction from "../components/home/CallToAction";
import ProductList from "../components/products/ProductList";
import Modal from "../components/common/Modal";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    price: 24000,
    desc: "High-quality cotton tee.",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    name: "SweetPants ",
    price: 35000,
    desc: "Men's Casual Versatile Drawstring Waist Sweatpants",
    img: "https://th.bing.com/th/id/OIP.glcm-KNorBBuJU-ntKpEFQHaJ4?w=197&h=263&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    id: 3,
    name: "Casual Trainer Sneakers",
    price: 35000,
    desc: "Unisex Casual Shoes, Size 36-45, Lace-Up Soft",
    img: "https://th.bing.com/th/id/OIP.t_jCA0sJmmQNOPO-ZFUNYQHaFZ?w=272&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    id: 4,
    name: "Couple Shoes Women Casual Sneakers",
    price: 45000,
    desc: "New Fashionable Lace-Up Sport Casual Shoes, Unisex",
    img: "https://th.bing.com/th/id/OIP.wdFXU3Z60rpaINB4REsrUQHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    id: 5,
    name: "Premium | Minimalist Brown T-Shirt Gucci",
    price: 35000,
    desc: "Solid Brown Regular T-Shirt",
    img: "https://th.bing.com/th/id/OIP.6sU_njdkMFh-su6VDgc3ewHaHa?w=184&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    id: 6,
    name: "PremiumT-Shirt-for-men",
    price: 98000,
    desc: "Premium silk texture T-Shirt for men",
    img: "https://th.bing.com/th/id/OIP.GiWQuvSp2OLDhwsY4yZUYQHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setQuantity(1);
  };

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
