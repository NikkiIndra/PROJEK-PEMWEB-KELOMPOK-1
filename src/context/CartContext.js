import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    const exists = cart.find((item) => item.id === product.id);
    const updatedItem = exists
      ? { ...product, qty: (product.qty || 0) + quantity }
      : { ...product, qty: quantity };

    const newCart = exists
      ? cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        )
      : [...cart, updatedItem];

    setCart(newCart);

    axios
      .post(
        "http://localhost/Template-Ecommers-Pemweb/src/backend/save_cart.php",
        [updatedItem]
      )
      .then((res) => console.log("✅ Disimpan ke DB:", res.data))
      .catch((err) => console.error("❌ Gagal simpan:", err));
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  // Fungsi untuk menambah jumlah produk di keranjang
  const addQty = (id) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );

      const updatedItem = updatedCart.find((item) => item.id === id);

      // ✅ Kirim update ke database juga
      axios
        .post(
          "http://localhost/Template-Ecommers-Pemweb/src/backend/update_qty.php",
          {
            product_id: updatedItem.id,
            qty: updatedItem.qty,
          }
        )
        .then((res) => console.log("🆙 Qty bertambah di DB:", res.data))
        .catch((err) => console.error("❌ Gagal update qty:", err));

      return updatedCart;
    });
  };

  // Simpan keranjang ke server
  const saveCartToServer = async () => {
    try {
      const response = await fetch(
        "http://localhost/Template-Ecommers-Pemweb/src/backend/save_cart.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );

      const result = await response.json();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };

  const reduceQty = (id) => {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.id === id) {
          if (item.qty <= 1) {
            const confirmDelete = window.confirm("Jumlah 0. Hapus produk ini?");
            if (confirmDelete) {
              axios
                .delete(
                  "http://localhost/Template-Ecommers-Pemweb/src/backend/delete_cart.php",
                  {
                    data: { product_id: id },
                  }
                )
                .then((res) => console.log("🗑️ Dihapus dari DB:", res.data))
                .catch((err) => console.error("❌ Gagal hapus dari DB:", err));

              return [];
            }
            return [item];
          }

          const updatedItem = { ...item, qty: item.qty - 1 };

          // Kirim qty baru ke database
          axios
            .post(
              "http://localhost/Template-Ecommers-Pemweb/src/backend/update_qty.php",
              {
                product_id: updatedItem.id,
                qty: updatedItem.qty,
              }
            )
            .then((res) => console.log("🛠️ Qty diperbarui di DB:", res.data))
            .catch((err) => console.error("❌ Gagal update qty:", err));

          return [updatedItem];
        }

        return [item];
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartCount, addQty, reduceQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
