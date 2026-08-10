const h2 = document.querySelector("h2");
const btn = document.querySelector("button");
const analise = document.querySelector("#analise");

btn.addEventListener('click', function() {
    const texto = h2.textContent;
    const htmlInterno = h2.innerHTML;
    const cor = h2.style.color;

    analise.innerHTML = `
        Texto: ${texto}<br>
        HTML: ${htmlInterno}<br>
        Cor: ${cor}
    `;
});