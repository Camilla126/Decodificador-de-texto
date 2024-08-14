document
  .querySelector("#digitar")
  .addEventListener("input", function (bloqueioDigitar) {
    let areaDigitar = bloqueioDigitar.target;
    areaDigitar.value = areaDigitar.value.replace(/[^a-z\s]/g, "");
  });

function criptografarEEsconder() {
  document.querySelector("#menino-lupa").style.display = "none"; 
  document.querySelector("#textos").style.display = "none"; 
  document.querySelector("#resultado").style.display = "block"; 
  document.querySelector("#botao-copiar").style.display = "block"; 

  let textoDigitado = document.querySelector("#digitar").value; 
  let textoCriptografado = textoDigitado 
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.querySelector("#digitar").value = ""; 
  document.querySelector("#resultado").value = textoCriptografado; 
}

function copiarEApagarTexto() {
  textarea = document.querySelector("#resultado"); 
  textarea.select(); 
  navigator.clipboard.writeText(textarea.value); 
  textarea.value = ""; 
  document.querySelector("#digitar").value = ""; 
}

function descriptografarTexto() {
  let textoDigitado = document.querySelector("#digitar").value; 
  let textoDescriptografado = textoDigitado 
    .replace(/enter/g, "e") 
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.querySelector("#resultado").value = textoDescriptografado; 
}

function reordenar() {
  if (window.innerWidth >= 1023) {
    return;
  } else {
    document.querySelector("footer").style.gridRow = "8"; 
    document.querySelector("footer").style.alignSelf = "start"; 
    document.querySelector("#caixa-vazia").style.height = "343px"; 
    document.querySelector("#caixa-vazia").style.alignSelf = "start"; 
  }
}

function reordenarCelular() {
  if (window.innerWidth >= 767) {
    return;
  } else {
    document.querySelector("footer").style.gridRow = "9"; 
    document.querySelector("footer").style.alignSelf = "center"; 
    document.querySelector("#caixa-vazia").style.height = "343px";
    document.querySelector("#caixa-vazia").style.alignSelf = "start";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 767) {
    alert("Para melhor visualização, use o tema claro em seu navegador!");
  }
});
