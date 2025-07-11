<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$input = json_decode(file_get_contents("php://input"), true);

if (!isset($input['product_id'])) {
  echo json_encode(["error" => "Missing product_id"]);
  exit;
}

$conn = new mysqli("localhost", "root", "", "db_user");

if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "DB connection failed"]);
  exit;
}

$productId = $input['product_id'];

// 🔁 Ambil data dulu sebelum hapus
$res = $conn->query("SELECT * FROM cart_items WHERE product_id = $productId");
$product = $res->fetch_assoc();

if ($product) {
  // Masukkan ke tb_delete jika belum ada
  $stmt = $conn->prepare(
    "INSERT IGNORE INTO tb_delete (product_id, name, description, image_url, price, qty)
     VALUES (?, ?, ?, ?, ?, ?)"
  );
  $stmt->bind_param(
    "isssdi",
    $product['product_id'],
    $product['name'],
    $product['description'],
    $product['image_url'],
    $product['price'],
    $product['qty']
  );
  $stmt->execute();
  $stmt->close();
}

// Hapus data dari cart_items
$conn->query("DELETE FROM cart_items WHERE product_id = $productId");

$conn->close();

echo json_encode(["success" => true]);
