const btn = document.querySelector("#button")
const form = document.querySelector("#form")

const pegardados = btn.addEventListener("click", function(e){
  e.preventDefault()  
  const Produto = {
    nome : document.querySelector("#nomeP").value,
    valorEntrada: document.querySelector("#valoI").value,
    margemDeLucro: document.querySelector("#margen").value,
    quantidade : document.querySelector("#quanti").value,
    codigoBarras : document.querySelector("#codigoB").value
  }
  
  new valorFinal(Produto)
   
})

function valorFinal(Produto) {
  const valorSaida = parseFloat(Produto.valorEntrada)
  *parseInt(Produto.margemDeLucro)/100 + parseFloat(Produto.valorEntrada)
  Produto.valorS = valorSaida
  new CadastrarDaodos(Produto)  
}

function CadastrarDaodos(Produto){ 
  const dados = JSON.stringify(Produto)
  async function gravarDados() {
    try {
      const url = "./server/cadastro.php"
      const body = dados
      const opcoes = {
        method: "POST",
        body, 
      }
      await fetch(url, opcoes) 
      
      alert("Sucesso") 
      LimparCampos()
    } catch (erro) {
      alert("Erro no servidor: " + erro.message)
      return
    }
  }
 
  gravarDados()
}
 
function LimparCampos(){
  document.querySelector("#nomeP").value = ""
  document.querySelector("#valoI").value = ""
  document.querySelector("#margen").value = ""
  document.querySelector("#codigoB").value = ""
  document.querySelector("#quanti").value = ""
}
    
  
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
    
  
    
  
    
    
    
    
    
    
    
    
    