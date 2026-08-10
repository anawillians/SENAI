const titulo = document.querySelector("h1");
const btn = document.querySelector("#btnMostrar");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", function() {
    resultado.textContent = titulo.textContent;
});