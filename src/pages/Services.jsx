import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const services = [
  {
    title: 'Title here',
    desc: 'Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum...',
    img: 'https://via.placeholder.com/300x200?text=Image+1',
  },
  {
    title: 'Title here',
    desc: 'Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum...',
    img: 'https://via.placeholder.com/300x200?text=Image+2',
  },
  {
    title: 'Title here',
    desc: 'Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum...',
    img: 'https://via.placeholder.com/300x200?text=Image+3',
  },
  {
    title: 'Title here',
    desc: 'Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum...',
    img: 'https://via.placeholder.com/300x200?text=Image+4',
  },
];

const ServicesPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Services Section */}
      <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
        <h2 className="text-center mb-5" style={{ color: '#ff6600', fontWeight: 'bold' }}>
          Services Title
        </h2>
        <Row className="w-100 justify-content-center">
          {services.map((service, index) => (
            <Col md={6} lg={3} className="mb-4" key={index}>
              <Card className="shadow-sm h-100 text-center border-0">
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem', color: '#777' }}>
                    {service.desc}
                  </Card.Text>
                  <Button
                    variant={index === 2 ? 'warning' : 'light'}
                    className={`mt-2 px-4 ${index === 2 ? 'text-white' : 'text-dark'}`}
                  >
                    READ MORE
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-white mt-auto">
        <Container className="py-4 d-flex flex-column justify-content-center align-items-center text-center">
          <Row className="w-100">
            <Col lg={4} className="mb-4 mb-lg-0 d-flex justify-content-center">
              <div style={{ color: '#00bfa5' }}>
                {/* Sample SVG logo */}
                <svg
                  className="h-8"
                  height="32"
                  viewBox="0 0 118 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </Col>

            <Col lg={4} className="mb-4 mb-lg-0 d-flex flex-column align-items-center">
              <p className="mb-1">© {new Date().getFullYear()} Your Company</p>
              <p className="text-muted">All rights reserved.</p>
            </Col>

            <Col lg={4} className="d-flex flex-column align-items-center">
              <a href="#privacy" className="text-decoration-none text-muted mb-2">
                Privacy Policy
              </a>
              <a href="#terms" className="text-decoration-none text-muted">
                Terms of Service
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default ServicesPage;
