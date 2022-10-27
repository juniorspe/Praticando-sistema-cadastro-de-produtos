<?php

  use Symfony\Component\Console\Input\Input;

  require_once("database.php");


  $query = "SELECT  * FROM produto LIMIT 10";
  $stmt = $conn->prepare($query);
  $stmt->execute();
  $dados = "";

  while ($linha = $stmt->fetch(PDO::FETCH_ASSOC)) {
    extract($linha);  
    $dados .= "<tr><td id='valor_nome$id'>$nome</td>
    <td id = 'valor_valor$id'>".$valorS."</td>
    <td >$quantidade</td><td id = 'valor_codigo$id'>$codigoBarras</td>
      <td class='d-flex'>
  
      </td>
    </tr>";

  }

  echo json_encode($dados) ;

  