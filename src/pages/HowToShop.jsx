import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HowToShop() {
  return (
    <div className="p-3">
      {/* Header bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fs-3 fw-bold mb-0">Cara Belanja</h1>
        <Link to="/" className="text-decoration-none">
          <Button variant="outline-primary" size="sm">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>

      {/* Accordion */}
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Bagaimana cara memesan barang?</Accordion.Header>
          <Accordion.Body>
            Kamu bisa menambahkan barang ke keranjang, lalu lanjut ke checkout
            dan ikuti langkah-langkah pembayaran.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque sesuatu.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque sesuatu.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
