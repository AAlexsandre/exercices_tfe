<?php
$host = 'localhost';
$db = 'citys';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int) $e->getCode());
}

//echo json_encode(["ciyciyc","test","133"]);

$search_name = $_GET["name"];

$stmt = $pdo->prepare("SELECT city_name FROM names WHERE city_name LIKE :name");
$stmt->execute(["name" => "%" . $search_name . "%"]);

$cities = $stmt->fetchAll(PDO::FETCH_COLUMN);

echo json_encode($cities);
?>