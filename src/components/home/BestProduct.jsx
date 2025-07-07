import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BestProduk = () => {
  const navigate = useNavigate();

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
      img: "https://images.ctfassets.net/hnk2vsx53n6l/3Tk1bjmKZNyQzvvhc0tO49/654a3fd92bb4960bc4222f96a2f8d80f/n0dynx1fl586seodjrzs.png?w=960&h=1200&fm=avif&f=center&fit=fill&q=80",
    },
    {
      id: 3,
      name: "Casual Trainer Sneakers",
      price: 35000,
      desc: "Unisex Casual Shoes, Size 36-45, Lace-Up Soft",
      img: "https://assets.pikiran-rakyat.com/crop/0x189:1200x941/720x0/webp/photo/2024/12/20/1854051616.jpg",
    },
    {
      id: 4,
      name: "Couple Shoes Women Casual Sneakers",
      price: 45000,
      desc: "New Fashionable Lace-Up Sport Casual Shoes, Unisex",
      img: "https://asset.kompas.com/crops/DyFCRCPmYx6KIYtr1yHFJqnz1c4=/54x7:848x537/1200x800/data/photo/2023/07/27/64c1e505229b5.jpg",
    },
    {
      id: 5,
      name: "Premium | Minimalist Brown T-Shirt",
      price: 35000,
      desc: "Solid Brown Regular T-Shirt",
      img: "https://afraz.pk/cdn/shop/files/Coffeebrowncrewneckplaint-shirtformen_BuyonlinePakistan_Frontview_46753254244664.jpg?v=1721759181&width=713", // perhatikan huruf besar dan ".png"
    },
    {
      id: 6,
      name: "Elegant Shirt",
      price: 98000,
      desc: "Boxy Crew-Neck",
      img: "https://www.merchology.com/cdn/shop/products/5290P-Black-HTF_1024x1024.jpg?v=1699657662",
    },
  ];

  return (
    <div
      style={{
        padding: "60px 24px",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <Container>
        <h2 className="text-white mb-5">Fashion & Clothing</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              onClick={() =>
                navigate("/best-seller", {
                  state: { selectedProduct: product },
                })
              }
              style={{
                backgroundColor: "#1e293b",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "12px",
              }}
            >
              <Card.Img
                variant="top"
                src={product.img}
                style={{
                  height: "160px",
                  objectFit: "cover",
                  backgroundColor: "#f8fafc",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <Card.Body>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                    marginBottom: "0.25rem",
                  }}
                >
                  {product.category}
                </div>
                <Card.Title
                  style={{ fontSize: "0.95rem", marginBottom: "0.3rem" }}
                >
                  {product.name}
                </Card.Title>
                <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                  {product.price}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BestProduk;
