const textoColorido = document.querySelector("#textoColorido");

const botaoVermelho = document.querySelector("#botaoVermelho");
const botaoAzul = document.querySelector("#botaoAzul");
const botaoVerde = document.querySelector("#botaoVerde");

botaoVermelho.addEventListener("click", function() {
    textoColorido.style.color = "red";
});

botaoAzul.addEventListener("click", function() {
    textoColorido.style.color = "blue";
});

botaoVerde.addEventListener("click", function() {
    textoColorido.style.color = "green";
});