let produtos = [
    {nome: "Tv", preco: 1999.99, categoria: "Eletro"},
    {nome: "Geladeira", preco: 3900, categoria:"branca"},
    {nome:"PS5", preco: 3500, categoria: "video game"},
    {nome: "varal", preco: 300, categoria: "casa"},
    {nome: "Forno", preco: 590, categoria: "branca"},
]

produtos.forEach(function(produto){
    console.log('nome: ${produto.nome} - preco: ${produto.preco}')

})

let total = 0

total = total + produto.preco;
