<?php
require_once("database.php");

$querry= "SELECT SUM(total)  FROM vendas";
$preo = $conn->prepare($querry);
$preo->execute();
$todosValores = $preo->fetch(PDO::FETCH_ASSOC);
$valores = json_encode($todosValores);

echo($valores);