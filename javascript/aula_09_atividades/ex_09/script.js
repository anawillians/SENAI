const areaTexto = document.querySelector("#areaTexto");
const botaoAplicarEstilo = document.querySelector("#botaoAplicarEstilo");

botaoAplicarEstilo.addEventListener("click", function() {
    areaTexto.style.backgroundColor = "yellow";
    areaTexto.style.border = "2px solid black";
    areaTexto.style.padding = "20px";
});