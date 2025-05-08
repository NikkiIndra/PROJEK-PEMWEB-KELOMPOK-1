import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
  Badge,
  Modal,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const BestSellerPage = () => {
  const navigate = useNavigate();
  const { cartCount, addToCart } = useCart();
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct;
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const products = Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    title: `Produk Best ${i + 1}`,
    desc: `Deskripsi produk best seller ${i + 1}`,
    price: Math.floor(Math.random() * 500000) + 50000,
    img: `https://picsum.photos/300/200?random=${i + 100}`,
  }));

  const formatRupiah = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  return (
    <Container fluid className="py-4 px-3 px-md-4 h-100">
      {/* Modal untuk Beli Sekarang */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.title || "Produk"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedProduct?.desc || "Deskripsi produk tidak tersedia."}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() =>
              window.open(
                `https://wa.me/6289531000012?text=Halo%20saya%20ingin%20bertanya%20tentang%20produk%20${encodeURIComponent(
                  selectedProduct?.title || ""
                )}`,
                "_blank"
              )
            }
          >
            Via WhatsApp
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Header */}
      <div
        className="w-100 mb-4 shadow-sm"
        style={{ backgroundColor: "#e8f0fe", padding: "1rem 1.5rem" }}
      >
        <div className="d-flex justify-content-between align-items-center gap-3">
          <h2 className="h4 fw-bold text-primary mb-0 flex-grow-1">
            Produk Best Seller
          </h2>
          <div className="d-flex gap-3 justify-content-end">
            <InputGroup style={{ maxWidth: "350px", minWidth: "300px" }}>
              <InputGroup.Text className="bg-white">
                <FaSearch className="text-muted" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Cari produk best seller..."
                className="border-start-0"
              />
            </InputGroup>
            <Button
              variant="outline-secondary"
              className="position-relative"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart />
              {cartCount > 0 && (
                <Badge
                  pill
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => navigate("/")}
            >
              Beranda
            </Button>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div className="mb-5">
          {/* <h5 className="mb-2">Produk yang Anda pilih:</h5> */}
          <Card className="shadow-sm border-0 overflow-hidden">
            <Row className="g-0">
              <Col md={6}>
                <div className="h-100 d-flex align-items-center bg-white">
                  <Card.Img
                    src={selectedProduct.img}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    className="p-3"
                  />
                </div>
              </Col>
              <Col md={6}>
                <Card.Body className="h-100 d-flex flex-column p-4">
                  <div>
                    <Card.Title className="h4 mb-3">
                      {selectedProduct.title}
                    </Card.Title>
                    <Card.Text className="text-muted mb-4">
                      {selectedProduct.desc}
                    </Card.Text>
                    <div className="d-flex align-items-center mb-4">
                      <h5 className="text-primary mb-0 me-3">
                        {formatRupiah(selectedProduct.price)}
                      </h5>
                      <Badge bg="success" className="fs-6">
                        Best Seller
                      </Badge>
                    </div>
                    <Form.Group className="mb-4">
                      <Form.Label>Jumlah:</Form.Label>
                      <InputGroup style={{ width: "120px" }}>
                        <Button variant="outline-secondary">-</Button>
                        <Form.Control
                          type="number"
                          value={quantity}
                          min={1}
                          className="text-center"
                          readOnly
                        />
                        <Button variant="outline-secondary">+</Button>
                      </InputGroup>
                    </Form.Group>
                  </div>
                  <div className="mt-auto d-flex gap-3">
                    <Button
                      variant="primary"
                      className="flex-grow-1"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      <FaShoppingCart className="me-2" />
                      Tambah ke Keranjang
                    </Button>

                    <Button
                      variant="outline-primary"
                      className="ms-2 text-indigo text-decoration-none"
                      onClick={handleShowModal}
                      style={{ color: "indigo", textDecoration: "none" }}
                    >
                      Beli Sekarang
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      )}

      {/* Product List */}
      <Row xs={2} sm={3} md={4} lg={4} xl={5} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={product.img}
                style={{ height: "180px", objectFit: "cover" }}
                className="cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h6 mb-2 text-truncate">
                  {product.title}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fw-bold text-primary">
                    {formatRupiah(product.price)}
                  </span>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="d-flex align-items-center gap-1"
                  >
                    <FaPlus size={12} />
                    <span>Keranjang</span>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Load More */}
      <div className="text-center mt-4">
        <Button variant="outline-primary">Muat Lebih Banyak</Button>
      </div>
    </Container>
  );
};

export default BestSellerPage;
