const botao = document.getElementById("meuBotao");
const paragrafo = document.getElementById("mensagem");

function confirmarAcao() {
  paragrafo.textContent = "Ação confirmada!";
}

botao.addEventListener("click", confirmarAcao);