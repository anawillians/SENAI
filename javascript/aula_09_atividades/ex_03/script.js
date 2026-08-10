const btn = document.querySelector('#btnAcao');
const infoBotao = document.querySelector('#infoBotao');

    botao.addEventListener('click', function() {
      infoBotao.textContent = btn.textContent;
    });