import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BestProduk = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost/Template-Ecommers-Pemweb/src/backend/get_products.php"
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("❌ Gagal fetch produk:", err));
  }, []);

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
                  Produk Unggulan
                </div>
                <Card.Title
                  style={{ fontSize: "0.95rem", marginBottom: "0.3rem" }}
                >
                  {product.name}
                </Card.Title>
                <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                  Rp {product.price.toLocaleString("id-ID")}
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
