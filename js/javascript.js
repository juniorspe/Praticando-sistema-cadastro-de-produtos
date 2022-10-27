const btn = document.querySelector("#button")
const btnLer = document.querySelector("#ler");
const btnAtt = document.querySelector("#editar");
const form = document.querySelector("#cco");
const edti = document.querySelector("#botao-edit");
const btnBuscar = document.querySelector("#buscar")
const botao_vender = document.querySelector("#botao_vender")
const form_vender = document.querySelector("#form_vender") 


function limparCampos(){
  document.querySelector("#nomeP").value =""
  document.querySelector("#valoI").value=""
  document.querySelector("#margen").value =""
  document.querySelector("#codigoB").value=""
  document.querySelector("#quanti").value=""
  document.querySelector("#editar").value=""
}


function limparResposta(){
  document.querySelector("#resposta").innerHTML = ""
  document.querySelector("#heder").innerHTML = ""
}

const listarProduto = async() => {
  const dados = await fetch("./server/ler.php");
  const response = await dados.json();
  
  limparImg()
  console.log(response)
  document.querySelector("#resposta").innerHTML = response 
}

function limparImg(){
  document.querySelector("#img").innerHTML = ""
}

async function buscarProduto(){
  
  form_buscas()
  let dadosParaBack = document.querySelector("#buscarEsteCodigo").value
  // let dados = "codigoBarras=" + dadosParaBack;
    const dados = await fetch(`./server/buscar.php?busca=${dadosParaBack}`,{   
  })
  const resposta = await dados.json();
  for(const dados of resposta){
    const linha = `
    <tr><td id='valor_nome${dados.id}'>${dados.nome}</td>
    <td id = 'valor_valor${dados.id}'>${dados.valorS}</td>
    <td id = 'valor_quantidade${dados.id}'>${dados.quantidade}</td><td id = 'valor_codigo$'>${dados.codigoBarras}</td>
    <td> <button class='btn btn-success'onclick = 'edit_produto(${dados.id})' id='botao-edit${dados.id}' >Editar</button>
    <button class='btn btn-success'onclick = 'salvar_produto(${dados.id})' id='botao-salvar${dados.id}'>Salvar</button></td>
    </tr>;
    `
    document.querySelector("#resposta").innerHTML = linha
  }
  
}
const formBUsca =document.querySelector("#formBusca")
function  form_buscas (){
  formBUsca.addEventListener("submit", function (e){
    e.preventDefault()
  })

}

function edit_produto(id){
  let quantidade = document.querySelector("#valor_quantidade"+ id)
  let nome = document.querySelector("#valor_nome" + id);
  let valor = document.querySelector("#valor_valor" + id);
  nome.innerHTML = "<input type= 'text' id='nome_text" + id + "'value='" + nome.innerHTML + "'>";
  valor.innerHTML = "<input type= 'number' id='valor_text" + id + "'value='" + valor.innerHTML + "'>";
  quantidade.innerHTML = "<input type= 'text' id='quantidade_text" + id + "'value='" + quantidade.innerHTML + "'>";
}

async function salvar_produto(id){

  let valor = document.querySelector("#valor_text" +id).value
  let nome = document.querySelector("#nome_text" +id).value
  let quantidade = document.querySelector("#quantidade_text" +id).value
  let dados = "id=" + id + "&nome=" + nome + "&valor=" + valor +"&quantidade=" + quantidade ;

  document.querySelector("#valor_valor" + id).innerHTML= valor
  document.querySelector("#valor_nome" + id).innerHTML= nome
  document.querySelector("#valor_quantidade" + id).innerHTML= quantidade
  
  const dadosBack = await fetch("./server/editar.php",{
    method: "POST",
    headers: {'content-type':'application/x-www-form-urlencoded'},
    body: dados,
    
  })
  
  const resposta = await dadosBack.json();


}
let tabela = document.querySelector("#corpoDaTabela")
const faturamento = async() => {
  const dados = await fetch("./server/FaturamentoDoDia.php");
  const response = await dados.json();
  tabela.innerHTML = response
 console.log(totallll)
}
let h1 = document.querySelector("#respstaDeTodosValores")
async function totalDasVendas(){
  const dados = await fetch("./server/totalDeVendas.php");
  const resposta = await dados.json()
  for (const key in resposta) {
    if (resposta.hasOwnProperty.call(resposta, key)) {
      const element = resposta[key];
       let final = element.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      h1.innerHTML = `Total de Vendas: ${final}`
    }
  }
  
} 
btnLer.addEventListener("click",listarProduto)
btnBuscar.addEventListener("click",buscarProduto)

 




