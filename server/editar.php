<!-- <?php
require_once ("database.php");
 

$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);




if(empty($dados['id'])){
   $retorna = ['status'=> false, 'msg'=> "<div class='alert alert-danger'
   role='alert'>Erro: Necessario enviar o id!</div>"];
}elseif(empty($dados['nome'])){
    $retorna = ['status'=> false, 'msg'=> "<div class='alert alert-danger'
   role='alert'>Erro: Necessario enviar o nome!</div>"];
}elseif(empty($dados['valor'])){
    $retorna = ['status'=> false, 'msg'=> "<div class='alert alert-danger'
    role='alert'>Erro: Necessario enviar o valor!</div>"];

   
}else{
    $query_produto = "UPDATE produto set nome=:nome, valorS=:valor, quantidade=:quantidade  WHERE id=:id ";
    $editaProduto = $conn->prepare($query_produto);
    
    $editaProduto->bindParam(':nome',$dados['nome']);
    $editaProduto->bindParam(':valor',$dados['valor']);
    $editaProduto->bindParam(':id',$dados['id']);
    $editaProduto->bindParam(':quantidade',$dados['quantidade']);
    
    if($editaProduto->execute()){
        $retorna = ['status'=> true, 'msg'=> "<div class='alert alert-success'
        role='alert'>Erro: Produto editado com Sucesso!</div>"];

    }else{
        $retorna = ['status'=> false, 'msg'=> "<div class='alert alert-danger'
        role='alert'>Erro: Necessario enviar o valor!</div>"];
    }

}
echo json_encode($retorna);

