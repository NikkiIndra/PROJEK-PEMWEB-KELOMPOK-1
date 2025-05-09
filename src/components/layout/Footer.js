import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 border-top">
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <div className="mb-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFFofPxsjIBj2-mv7lDWSOIoK6As6bgBG7g&s"
                alt="Logo"
                style={{ height: "40px" }}
              />
            </div>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>
            <div className="d-flex gap-3 mt-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaGithub />
              <FaDribbble />
            </div>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li>1on1 Coaching</li>
              <li>Company Review</li>
              <li>Accounts Review</li>
              <li>HR Consulting</li>
              <li>SEO Optimisation</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Meet the Team</li>
              <li>Accounts Review</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold mb-3">Helpful Links</h6>
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>FAQs</li>
              <li>Live Chat</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li>Accessibility</li>
              <li>Returns Policy</li>
              <li>Refund Policy</li>
              <li>Hiring-3 Statistics</li>
            </ul>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col
            className="text-center text-muted"
            style={{ fontSize: "0.85rem" }}
          >
            © 2022. UnderGround INC. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
