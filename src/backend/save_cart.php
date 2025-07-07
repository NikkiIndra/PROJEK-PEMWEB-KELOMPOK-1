<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

if (!is_array($data)) {
  echo json_encode(["error" => "Invalid input"]);
  exit;
}

$conn = new mysqli("localhost", "root", "", "db_user");

if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "DB Connection failed"]);
  exit;
}

foreach ($data as $item) {
  $stmt = $conn->prepare("INSERT INTO cart_items (product_id, name, description, image_url, price, qty) VALUES (?, ?, ?, ?, ?, ?)");
  $stmt->bind_param(
    "isssdi",
    $item['id'],
    $item['name'],
    $item['desc'],
    $item['img'],
    $item['price'],
    $item['qty']
  );
  $stmt->execute();
  $stmt->close();
}

$conn->close();
echo json_encode(["success" => true]);
