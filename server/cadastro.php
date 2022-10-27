<?php
require_once("database.php");




$dadosjs = file_get_contents("php://input");
$Produto = json_decode($dadosjs, true);

$nome = $Produto['nome'];
$valorEntrada = $Produto['valorEntrada'];
$margemDeLucro = $Produto['margemDeLucro'];
$quantidade = $Produto['quantidade'];
$valorS = $Produto['valorS'];
$codigoBarras = $Produto['codigoBarras'];

try{
$result_msg_pro = "INSERT INTO produto(nome, valorEntrada, margemDeLucro, quantidade, valorS, codigoBarras) 
     VALUES(:nome, :valorEntrada, :margemDeLucro, :quantidade, :valorS, :codigoBarras) ";

$insertPro = $conn->prepare($result_msg_pro);
$insertPro->bindParam(':nome', $nome);
$insertPro->bindParam(':valorEntrada', $valorEntrada);
$insertPro->bindParam(':margemDeLucro', $margemDeLucro);
$insertPro->bindParam(':quantidade', $quantidade);
$insertPro->bindParam(':valorS', $valorS);
$insertPro->bindParam(':codigoBarras', $codigoBarras);

$insertPro->execute();
}catch(Exception $e){
     echo 'daddos nao cadastrados:', $e->getMessage(), "\n";
}