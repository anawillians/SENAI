let produtos = [
    { id: 1, nome: "Fone", preco: 59, categoria: "Eletrônica" },
    { id: 2, nome: "Geladeira", preco: 2599, categoria: "Eletroeletrônico" },
    { id: 3, nome: "Mouse", preco: 2109, categoria: "Informática" },
    { id: 4, nome: "Teclado", preco: 299, categoria: "Informática" },
    { id: 5, nome: "Fogão", preco: 599, categoria: "Eletro" }
];

let produtosAcimaDoPreco = produtos.filter(function(produto) {
  return produto.preco > 60;
})

console.log(produtosAcimaDoPreco);