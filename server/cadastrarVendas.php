<?php
require_once("database.php");




$dadosjs = file_get_contents("php://input");
$Produto = json_decode($dadosjs, true);



foreach($Produto as  $chave  => $Produtop){
    try{
    $result_msg_pro = "INSERT INTO vendas(nome, quantidade, valor, total) 
    VALUES(:nome, :quantidade, :valor, :total) ";
    $insertPro = $conn->prepare($result_msg_pro);
    $insertPro->bindParam(':nome', $Produtop['nome']);
    $insertPro->bindParam(':valor', $Produtop['valor']);
    $insertPro->bindParam(':quantidade', $Produtop['quantidade']);
    $insertPro->bindParam(':total', $Produtop['total']);

    $insertPro->execute();
    }catch(Exception $e){
         echo 'daddos nao cadastrados:', $e->getMessage(), "\n";
    }
}













