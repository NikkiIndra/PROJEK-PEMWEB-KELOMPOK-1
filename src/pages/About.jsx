import React from "react";
import {
  Container,
  Form,
  Button,
  Breadcrumb,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import {
  FaSquareCheck,
  FaQuoteLeft,
  FaUserGroup,
  FaLink,
  FaLocationDot,
  FaPaperPlane,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

import Header from "../components/layout/Header.js";

const testimonials = [
  {
    id: 1,
    name: "Maria Hernandez",
    location: "London, UK",
    image: "/assets/images/image_demo.png", // contoh gambar
    quote:
      "Suspendisse at urna fermentum, venenatis justo sed, interdum enim. Vivamus ut finibus est, et pulvinar odio.",
  },
  {
    id: 2,
    name: "John Doe",
    location: "New York, USA",
    image: "/assets/images/CEO.png", // contoh gambar
    quote: "Vivamus ut finibus est, et pulvinar odio.",
  },
  {
    id: 3,
    name: "Nikki Taslim",
    location: "New York, USA",
    image: "/assets/images/Designer1.png", // contoh gambar
    quote: "Vivamus ut finibus est, et pulvinar odio.",
  },
  {
    id: 4,
    name: "Indra Kusumardani",
    location: "Kamarang, Cirebon",
    image: "/assets/images/Designer2.png", // contoh gambar
    quote: "Vivamus ut finibus est, et pulvinar odio.",
  },
  {
    id: 5,
    name: "Rafael Struic",
    location: "Nedherlands",
    image: "/assets/images/CEO.png", // contoh gambar
    quote: "Vivamus ut finibus est, et pulvinar odio.",
  },
  {
    id: 6,
    name: "rangga",
    location: "Nedherlands",
    image: "/assets/images/image_demo.png", // contoh gambar
    quote: "Vivamus ut finibus est, et pulvinar odio.",
  },
  // tambah testimonial lainnya
];
const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="py-5 my-5">
          <Row>
            <Col md={6}>
              <div className="aos-item" data-aos="fade-up" data-aos-delay="200">
                <div className="aos-item__inner">
                  <h3 className="fw-bold pb-2">Why choose us?</h3>
                  <p>
                    Sed pellentesque leo urna, at maximus nunc tristique quis.
                    Sed vel eros laoreet, dictum quam eget, ornare magna.
                    Vivamus hendrerit massa vel arcu finibus varius.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <FaSquareCheck className="pe-1" /> Aliquam erat volutpat
                    </li>
                    <li>
                      <FaSquareCheck className="pe-1" /> Nam tincidunt sodales
                      fringilla.
                    </li>
                    <li>
                      <FaSquareCheck className="pe-1" /> Nulla nec sagittis
                      sapien.
                    </li>
                    <li>
                      <FaSquareCheck className="pe-1" /> Nulla tempus imperdiet
                      arcu vitae ultrices.
                    </li>
                  </ul>
                  <p>
                    Vivamus at nunc purus. Fusce et urna viverra, venenatis dui
                    ac, fringilla arcu. Sed vel dui dignissim, scelerisque justo
                    ac, aliquam metus. Donec eleifend tincidunt dignissim. Donec
                    efficitur ligula et ipsum ultrices pulvinar. Proin diam
                    erat, porta id odio quis, pretium ultricies quam.
                  </p>
                  <p>
                    Nulla nec sagittis sapien. Morbi laoreet dui sit amet magna
                    malesuada, nec malesuada lectus condimentum. Sed ultrices
                    justo nec nibh tristique, eget finibus neque tincidunt.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="aos-item" data-aos="fade-up" data-aos-delay="400">
                <div className="aos-item__inner">
                  <img
                    className="rounded"
                    src="https://assets.vogue.com/photos/66213ed150683f96ac57f188/master/w_1600,c_limit/PXL_20220619_164917333.jpg" // Gunakan `src` untuk menampilkan gambar
                    alt="Models at work" // Berikan alt text untuk aksesibilitas
                    width="100%" // Atur lebar gambar agar responsif
                    height="500"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="caption">
                    <figcaption className="figure-caption py-2">
                      A caption for the above image.
                    </figcaption>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="bg-light py-5 overflow-hidden">
          <div className="testimonial-wrapper overflow-hidden bg-light py-5">
            <Container>
              <h2 className="fw-bold pb-5">What people say?</h2>
              <div className="testimonial-marquee d-flex">
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <Card
                      key={index}
                      className="mx-3 p-4 text-secondary text-center"
                      style={{ minWidth: "300px" }}
                    >
                      <img
                        className="rounded-circle mx-auto"
                        src={testimonial.image}
                        alt={testimonial.name}
                        width="100"
                        height="100"
                      />
                      <h5 className="mt-3 mb-0">{testimonial.name}</h5>
                      <small>{testimonial.location}</small>
                      <p className="fst-italic mt-2">
                        <FaQuoteLeft className="me-2 fs-5" />
                        {testimonial.quote}
                      </p>
                    </Card>
                  )
                )}
              </div>
            </Container>
          </div>
        </div>

        <div className="py-5">
          <Container className="py-5">
            <h2 className="fw-bold pb-5">Our expert teams</h2>
            <Row className="g-4">
              <Col md={6} xl={3} sm={12}>
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="aos-item__inner">
                    <Card className="text-center border border-0 shadow-sm">
                      <img
                        className="rounded img-fluid"
                        src="https://helios-i.mashable.com/imagery/articles/06ki28pPMUwvwhioLFYtU4N/hero-image.fill.size_1248x702.v1623366826.jpg" // Gunakan `src` untuk menampilkan gambar
                        alt="Demo Image" // Berikan alt text untuk aksesibilitas
                        style={{
                          width: "100%",
                          height: "330px",
                          objectFit: "cover",
                        }}
                      />
                      <Card.Body>
                        <h4>Nkiiiiiii_</h4>
                        <small>bussines manager </small>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>
              <Col md={6} xl={3} sm={12}>
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="aos-item__inner">
                    <Card className="text-center border border-0 shadow-sm">
                      <img
                        className="rounded img-fluid"
                        src="https://gripdesign.com/wp-content/uploads/2020/04/how-to-hire-a-graphic-designer-rh-2018-1536x1024.jpg" // Gunakan `src` untuk menampilkan gambar
                        alt="Demo Image" // Berikan alt text untuk aksesibilitas
                        style={{
                          width: "100%",
                          height: "330px",
                          objectFit: "cover",
                        }}
                      />
                      <Card.Body>
                        <h4>Ninda</h4>
                        <small>Designer 1</small>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>
              <Col md={6} xl={3} sm={12}>
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="aos-item__inner">
                    <Card className="text-center border border-0 shadow-sm">
                      <img
                        className="rounded img-fluid"
                        src="https://gripdesign.com/wp-content/uploads/2020/04/1200x675-dlxblog_how-much-should-a-professional-logo-design-cost-1200x675-1.jpg"
                        alt="Demo Image"
                        style={{
                          width: "100%",
                          height: "330px",
                          objectFit: "cover",
                        }}
                      />
                      <Card.Body>
                        <h4>Aura Navs</h4>
                        <small>Designer 2</small>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>
              <Col md={6} xl={3} sm={12}>
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="aos-item__inner">
                    <Card className="text-center border border-0 shadow-sm">
                      <img
                        className="rounded img-fluid"
                        src="https://img.freepik.com/free-photo/interior-designer-working-out-office_23-2150379243.jpg?t=st=1746786632~exp=1746790232~hmac=b17578377c381207ed6fd6311c969736a8edfafd33a9fc19fb380d14f54b1be6&w=740"
                        alt="Demo Image"
                        style={{
                          width: "100%",
                          height: "330px",
                          objectFit: "cover",
                        }}
                      />
                      <Card.Body>
                        <h4>Nkiiiiiii_</h4>
                        <small>CEO & Founder</small>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>

      {/* Footer Block Start */}
      <footer id="site-footer">
        <div className="bg-light py-5">
          <Container>
            <Row>
              <Col md={6} xl={3} sm={12}>
                <h5 className="pb-3">
                  <FaUserGroup className="pe-1" /> About us
                </h5>
                <span className="text-secondary">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </span>
              </Col>
              <Col md={6} xl={3} sm={12}>
                <h5 className="pb-3">
                  <FaLink className="pe-1" /> Important links
                </h5>
                <ul>
                  <li>
                    <a href="#" className="text-decoration-none link-secondary">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none link-secondary">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none link-secondary">
                      Terms of services
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={6} xl={3} sm={12}>
                <h5 className="pb-3">
                  <FaLocationDot className="pe-1" /> Our location
                </h5>
                <span className="text-secondary">
                  Milannagar bazar
                  <br />
                  Tamluk, East Medinipore, West Bengal
                  <br />
                  720001, India
                  <br />
                </span>
              </Col>
              <Col md={6} xl={3} sm={12}>
                <h5 className="pb-3">
                  <FaPaperPlane className="pe-1" /> Stay updated
                </h5>
                <Form>
                  <Form.Control
                    type="text"
                    className="w-100 mb-2"
                    placeholder="Email ID"
                  />
                  <Button variant="dark" className="w-100">
                    Subscribe now
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-dark py-3">
          <Container>
            <Row>
              <Col md={6} sm={12}>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="btn btn-outline-secondary" href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-secondary" href="#">
                      <FaYoutube />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-secondary" href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-secondary" href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-secondary" href="#">
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={6} sm={12}>
                <span className="text-secondary pt-1 float-md-end float-sm-start">
                  Copyright &copy; 2023
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>

      <a href="#" className="scrollToTop btn btn-outline-secondary">
        Top
      </a>

      <style jsx>{`
        body {
          overflow-x: hidden;
        }
        #offcanvasTop {
          --bs-offcanvas-height: 80vh;
          background-color: #c5e1d4;
        }
        .scrollToTop {
          padding: 10px;
          color: #444;
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: none;
          z-index: 99;
        }
        .owl-item.active.center h5,
        .owl-item.active.center span {
          color: #000;
        }
        @media screen and (max-width: 1023px) {
          #myCarousel .carousel-item img {
            height: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;
