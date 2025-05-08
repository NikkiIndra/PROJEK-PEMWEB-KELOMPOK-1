import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Container, Button, Stack } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "../context/HistoryContext";

export default function CartPage() {
  const [showModal, setShowModal] = useState(false);
  const { cart } = useCart();
  const { addToHistory } = useHistory();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // Buat pesan WhatsApp berdasarkan isi keranjang
  const createWhatsAppMessage = () => {
    let message = "Halo! Saya ingin memesan produk berikut:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.qty} = ${formatRupiah(
        item.price * item.qty
      )}\n`;
    });
    message += `\nTotal: ${formatRupiah(total)}\n`;
    return encodeURIComponent(message);
  };

  const whatsappLink = `https://wa.me/628123456789?text=${createWhatsAppMessage()}`;

  return (
    <div className="bg-light min-vh-100">
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 mb-0">Keranjang Belanja</h1>
          <Button
            variant="outline-primary"
            size="sm"
            className="d-none d-sm-inline-block"
          >
            <Link to="/" className=" text-reset text-decoration-none">
              Kembali ke Beranda
            </Link>
          </Button>
        </div>

        <Stack gap={3}>
          {cart.length === 0 ? (
            <p className="text-center text-muted">Keranjang kosong</p>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </Stack>

        {cart.length > 0 && (
          <div className="text-end mt-4">
            <h2 className="h4">
              Total: <span className="fw-bold">{formatRupiah(total)}</span>
            </h2>
            <Button
              variant="primary"
              className="mt-3"
              onClick={() => setShowModal(true)}
            >
              Checkout
            </Button>
          </div>
        )}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Konfirmasi Pesanan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Informasi pesanan:</p>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} x {item.qty} ={" "}
                  {formatRupiah(item.price * item.qty)}
                </li>
              ))}
            </ul>
            <p className="mt-2 fw-bold">Total: {formatRupiah(total)}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              as="a"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                addToHistory(cart, total);
              }}
            >
              Via WhatsApp
            </Button>

            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
