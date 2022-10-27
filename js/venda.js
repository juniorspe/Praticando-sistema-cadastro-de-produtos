const botao_vender = document.querySelector("#buscarVendas")
const form_vender = document.querySelector("#formBusca") 
function submitForme_venda(){

    form_vender.addEventListener("submit", function(e){
      e.preventDefault()
    })
}

let totalValores = []

let Produto=[]
async function editarQuantidade(id){
  let btnt = document.querySelector("#trocou")
  let quantidad = document.querySelector("#quantidade" + id).value
  let valorValor = document.querySelector("#valor_valor" + id).value
  let nome = document.querySelector("#nome"+ id).value
  let quantidadeB = document.querySelector("#quantidadeB"+ id).textContent

  let quantidade = parseInt(quantidadeB)-parseInt(quantidad)
  console.log(quantidadeB)
  let totall = parseFloat(quantidad) * parseFloat(valorValor)
  totalValores.push(totall)
  tota = 0
  for(i=0;i<totalValores.length;i++){
    tota = tota + totalValores[i]
  }

  let valores={
    nome:nome, 
    quantidade:quantidad,
    valor:valorValor,
    total:tota
  }
  Produto.push(valores)
  let totallV= totall.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  let totaFo = valorValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  let totaFormatado = tota.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.querySelector("#valor" + id).innerHTML = `${totaFo} | ${totallV}`
  document.querySelector("#total").innerHTML =`<span id='total'>Total ${totaFormatado}</span>`
  document.querySelector("#valor_nome"+id).innerHTML =nome
  document.querySelector("#valor_quantidade" + id).innerHTML = `<td id='quantidade'>${quantidad}</td>`
  let dado = "id=" + id + "&nome=" + nome + "&valor=" + valorValor +"&quantidade=" +quantidade;
    
  function trocao(){
    let troco = document.querySelector("#troco").value
    let totaFinal =parseFloat(troco) - parseFloat(tota)
    console.log(totaFinal)
    let totalFinalComCTroco=totaFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.querySelector(".clientTroco").innerHTML =`Troco ${totalFinalComCTroco}` 

    }
  btnt.addEventListener("click",trocao)
}
async function venda(){   
    submitForme_venda()
    // let dados = "codigoBarras=" + dadosParaBack;
    
    const codigoBarras = document.querySelector("#codigoBArras_vender").value
    dados = await fetch(`../server/buscar.php?busca=${codigoBarras}`)  
    let response = await dados.json()
    const tabela = document.querySelector("#respostaVenda")
    // edit_produto()
   
    for(const dados of response){ 
    
      const linha = `
      <tr><td id='valor_nome${dados.id}'><input type='text' value='${dados.nome}'id='nome${dados.id}'><span class='sumir' id = 'quantidadeB${dados.id}'value=''>${dados.quantidade}</span></td>
      <td class='quantidadi' id = 'valor_quantidade${dados.id}'><input id='quantidade${dados.id}'value='1' type='number' > <input class='btn btn-success'value='X'type='button' onclick='editarQuantidade(${dados.id})'></td>
      <td class='info-valor${dados.id}' id ='valor${dados.id}'><input type='number'id = 'valor_valor${dados.id}' value='${dados.valorS}'></td>
      </tr>
      
      `
      tabela.innerHTML = tabela.innerHTML+ linha  
    }
    document.querySelector("#codigoBArras_vender").focus()
    document.querySelector("#codigoBArras_vender").value=''
  

}    

async function cadastraVenda(){
  dados = JSON.stringify(Produto)
  daddos=dados.replace('[', ' ')
  dados2=daddos.replace(']' , ' ')
  
  try {
    const url = "../server/cadastrarVendas.php"
    const body = dados
    const opcoes = {
      method: "POST",
      body, 
    }
    await fetch(url, opcoes) 
    
    location.reload('js/venda.js')

  } catch (erro) {
    alert("Erro no servidor: " + erro.message)
    return
  }


}


botao_vender.addEventListener("click",venda)
