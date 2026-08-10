const conteudo = document.querySelector("#conteudo");
const btn = document.querySelector("#btnInserir");

btn.addEventListener("click", function() {
    conteudo.innerHTML = "<strong>Negrito</strong> e <em>Itálico</em>";
});