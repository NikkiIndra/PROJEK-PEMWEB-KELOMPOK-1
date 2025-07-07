<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['product_id']) || !isset($data['qty'])) {
  echo json_encode(["error" => "Invalid data"]);
  exit;
}

$conn = new mysqli("localhost", "root", "", "db_user");

if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "DB connection failed"]);
  exit;
}

$productId = $data['product_id'];
$newQty = $data['qty'];

$stmt = $conn->prepare("UPDATE cart_items SET qty = ? WHERE product_id = ?");
$stmt->bind_param("ii", $newQty, $productId);
$stmt->execute();
$stmt->close();

$conn->close();

echo json_encode(["success" => true]);
