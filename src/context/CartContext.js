// Import React hook dan axios
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Buat konteks global untuk keranjang belanja
const CartContext = createContext();

// Komponen provider yang membungkus seluruh aplikasi agar bisa mengakses cart
export function CartProvider({ children }) {
  // State utama untuk menyimpan daftar produk di keranjang
  const [cart, setCart] = useState(() => {
    // Ambil data cart dari localStorage saat pertama kali dijalankan
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : []; // Jika ada, gunakan, jika tidak, mulai dengan array kosong
  });

  // Setiap kali cart berubah, simpan ke localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fungsi untuk menambahkan produk ke dalam cart
  const addToCart = (product, quantity = 1) => {
    const exists = cart.find((item) => item.id === product.id); // Cek apakah produk sudah ada

    // Jika sudah ada, tambahkan jumlahnya; jika belum, buat baru
    const updatedItem = exists
      ? { ...product, qty: (product.qty || 0) + quantity }
      : { ...product, qty: quantity };

    // Update cart dengan item baru atau jumlah yang ditambahkan
    const newCart = exists
      ? cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        )
      : [...cart, updatedItem];

    setCart(newCart); // Simpan ke state

    // Simpan juga ke server menggunakan PHP backend
    axios
      .post(
        "http://localhost/Template-Ecommers-Pemweb/src/backend/save_cart.php",
        [updatedItem]
      )
      .then((res) => console.log("✅ Disimpan ke DB:", res.data))
      .catch((err) => console.error("❌ Gagal simpan:", err));
  };

  // Hitung total item dalam cart (untuk ditampilkan di ikon cart)
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  // Fungsi untuk menambah jumlah qty dari produk tertentu
  const addQty = (id) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );

      const updatedItem = updatedCart.find((item) => item.id === id);

      // Kirim update qty ke server
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

  // Fungsi untuk menyimpan seluruh keranjang ke server secara manual
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

  // Fungsi untuk mengurangi jumlah qty dari produk tertentu
  const reduceQty = (id) => {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.id === id) {
          // Jika qty tinggal 1, konfirmasi untuk menghapus
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

              return []; // Hapus item dari cart
            }
            return [item]; // Kalau tidak dihapus, tetap tampilkan item
          }

          // Kurangi qty dan update ke database
          const updatedItem = { ...item, qty: item.qty - 1 };

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

        return [item]; // Item selain yang dimodifikasi tetap
      })
    );
  };

  // Kirim semua fungsi dan data cart ke komponen lain
  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartCount, addQty, reduceQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook agar bisa digunakan di mana saja
export function useCart() {
  return useContext(CartContext);
}
