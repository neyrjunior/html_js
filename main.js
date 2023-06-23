const form = document.getElementById('formulario');
const campoUm = document.getElementById('pri');
const campoDois = document.getElementById('seg');
const sucesso = 'Aprovado!'
const recusado = 'Recusado'

function getMaiorValor(valor1, valor2) {
  return (valor1 < valor2) } 


form.addEventListener('submit', function(e) {
  e.preventDefault();
    if(getMaiorValor(campoUm.value, campoDois.value)) {
      const caixaMensagemVerde = document.querySelector('.verde');
      caixaMensagemVerde.innerHTML = sucesso;
      caixaMensagemVerde.style.display = 'block'
      
    
  } else {
    const caixaMensagemVermelho = document.querySelector('.vermelho');
    caixaMensagemVermelho.innerHTML = recusado;
    caixaMensagemVermelho.style.display ='block'
    
   
  }
})
