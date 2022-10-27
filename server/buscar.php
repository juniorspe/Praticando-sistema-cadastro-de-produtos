<?php
require_once("database.php");

session_start();
$busca = isset($_GET['busca']) ? $_GET['busca'] : "";


$query = "SELECT id, nome, quantidade, valorS,  codigoBarras FROM produto WHERE codigoBarras LIKE $busca";
$stmt = $conn->prepare($query);
$stmt->execute();
$dados = [];
while($row_stmt = $stmt->fetch(PDO::FETCH_ASSOC)){
  $dados[] = $row_stmt;

}

// while($row_stmt = $stmt->fetch(PDO::FETCH_ASSOC)){
//   extract($row_stmt);
//   $dados .= "<tr><td id='valor_nome$id'>$nome</td>
//   <td id = 'valor_valor$id'>".number_format($valorS,2,',','.')."</td>
//   <td >$quantidade</td><td id = 'valor_codigo$id'>$codigoBarras</td>
//     <td class='d-flex'>
//     <button class='btn btn-success'onclick = 'edit_produto($id)' id='botao-edit$id' >Editar</button>
//     <button class='btn btn-success'onclick = 'salvar_produto($id)' id='botao-salvar$id'>Salvar</button>
//     </td>
//   </tr>";
//   
// }


echo json_encode($dados);


 
