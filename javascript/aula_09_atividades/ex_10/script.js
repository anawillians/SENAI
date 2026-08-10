const paragrafo = document.querySelector("#paragrafo");
const botaoMostrarOcultar = document.querySelector("#botaoMostrarOcultar");

botaoMostrarOcultar.addEventListener("click", function() {
   paragrafo.classList.toggle("oculto");
});