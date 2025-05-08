import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
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
      img: "https://th.bing.com/th/id/OIP.7KIsOvAVm-GVDcAL3QdYdwAAAA?w=197&h=197&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    },
    {
      id: 3,
      name: "Casual Trainer Sneakers",
      price: 35000,
      desc: "Unisex Casual Shoes, Size 36-45, Lace-Up Soft",
      img: "https://th.bing.com/th/id/OIF.BJoScG62VtD6oJinRJ8SQg?w=151&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
    },
    {
      id: 4,
      name: "Couple Shoes Women Casual Sneakers",
      price: 45000,
      desc: "New Fashionable Lace-Up Sport Casual Shoes, Unisex",
      img: "https://th.bing.com/th/id/OIP.r4e_rFTIid5jddksQBla6QHaJ2?w=154&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    },
    {
      id: 5,
      name: "Premium | Minimalist Brown T-Shirt",
      price: 35000,
      desc: "Solid Brown Regular T-Shirt",
      img: "https://th.bing.com/th/id/OIP.dVIfy7vvU-6aiLfA8YXaGgHaE7?w=286&h=192&c=7&r=0&o=5&dpr=1.1&pid=1.7", // perhatikan huruf besar dan ".png"
    },
    {
      id: 6,
      name: "Elegant Shirt",
      price: 98000,
      desc: "Boxy Crew-Neck",
      img: "https://th.bing.com/th/id/OIP.VpwsZRbfR_h5xfi4kXCJOAHaJ3?w=197&h=263&c=7&r=0&o=5&dpr=1.1&pid=1.7",
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
                  objectFit: "contain",
                  padding: "1rem",
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
                  {product.title}
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

export default CallToAction;
