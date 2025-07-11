<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "db_user");

if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "Connection failed"]);
  exit;
}

$result = $conn->query("SELECT id, name, price, description, image_url FROM tb_produk");

$products = [];

while ($row = $result->fetch_assoc()) {
  $products[] = [
    "id" => $row["id"],
    "name" => $row["name"],
    "price" => (int) $row["price"],
    "desc" => $row["description"],
    "img" => $row["image_url"]
  ];
}

$conn->close();
echo json_encode($products);
