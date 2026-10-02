const corInicial = "#0080c0";
const inputCor = document.getElementById("inputCor");
const objeto = document.getElementById("objeto");
const altura = document.getElementById("altura");
const largura = document.getElementById("largura");
const inputTexto = document.getElementById("inputTexto");
const para = document.getElementById("para");
const btnBorda = document.getElementById("btnBorda");
const inputBorda = document.getElementById("inputBorda");
const raio = document.getElementById("raio");

inputCor.value = corInicial;
objeto.style.background = corInicial;

function mudarAltura(event) {
  objeto.style.height = event.target.value + "em";
}

function mudarLargura(event) {
  objeto.style.width = event.target.value + "em";
}

function mudarCor(event) {
  objeto.style.background = event.target.value;
}

function escrever(event) {
  para.textContent = event.target.value;
}

function adicionarBorda() {
  objeto.classList.toggle("borda");
}

function mudarCorBorda(event) {
  objeto.style.setProperty("--cor-borda", event.target.value);
}

function alterarRaio(event) {
  objeto.style.borderRadius = event.target.value + "%";
}

inputCor.addEventListener("input", mudarCor);
altura.addEventListener("input", mudarAltura);
largura.addEventListener("input", mudarLargura);
inputTexto.addEventListener("input", escrever);
btnBorda.addEventListener("click", adicionarBorda);
inputBorda.addEventListener("input", mudarCorBorda);
raio.addEventListener("input", alterarRaio);
