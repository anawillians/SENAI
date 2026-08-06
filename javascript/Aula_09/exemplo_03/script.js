const titulo = document.querySelector(".titulo");
const btnAdicionar = document.querySelector(".btnAdicionar");
const lista = document.querySelector(".lista");

btnAdicionar.addEventListener("click" , function(){
    constli = document.createElement("li")
    li.textContent = "o farmador de Aura, adicionou mais um item!"
    lista.appendChild(li)
})