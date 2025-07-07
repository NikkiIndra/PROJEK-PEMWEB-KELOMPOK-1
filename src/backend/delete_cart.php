<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");

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
$conn->query("DELETE FROM cart_items WHERE product_id = $productId");

$conn->close();
echo json_encode(["success" => true]);
