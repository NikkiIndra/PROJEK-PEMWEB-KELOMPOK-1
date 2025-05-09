import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const services = [
  {
    title: "Akun Premium",
    desc: "Dapatkan gratis ongkir dan diskon 10% untuk akun premium",
    img: "https://th.bing.com/th/id/OIP.h4p6bkIhzAMFLxeLSWduyQAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    title: "Hapus Iklan",
    desc: "Hapus seluruh iklan yang mengganggu anda dalam berbelanja",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36dWb6i9Hk_8Oxa5oKpAxECpO_74ZfU479g&s",
  },
  {
    title: "Bank Transfer",
    desc: "Kaitkan akun bank anda , untuk pengalaman belanja yang lebih mudah",
    img: "data:image/png;base64,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",
  },
  {
    title: "Hubungi",
    desc: "Hubungi Kami Jika Ada Bug Atau Kesalahan ,untuk kenyamanan anda",
    img: "data:image/png;base64,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",
  },
];

const ServicesPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      {/* Services Section */}
      <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
        <h2
          className="text-center mb-5"
          style={{ color: "#333", fontWeight: "bold" }}
        >
          Services For You
        </h2>
        <Row className="w-100 justify-content-center">
          {services.map((service, index) => (
            <Col md={6} lg={3} className="mb-4" key={index}>
              <Card className="shadow-sm h-100 text-center border-0">
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text style={{ fontSize: "0.9rem", color: "#777" }}>
                    {service.desc}
                  </Card.Text>
                  <Button className="read-more-btn mt-2 px-4">READ MORE</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default ServicesPage;
