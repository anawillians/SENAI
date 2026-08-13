const lista = document.querySelector("#minhaLista");
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    const item = document.createElement("li");

    item.textContent = "Item " + (lista.children.length + 1);

    lista.appendChild(item);
});