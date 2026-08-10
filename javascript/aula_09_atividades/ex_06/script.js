const btn = document.querySelector('#btn-alterar');
const titulo = document.querySelector('#titulo-principal');

btn.addEventListener('click', function() {
    titulo.textContent = 'Título Modificado com Sucesso!';
});