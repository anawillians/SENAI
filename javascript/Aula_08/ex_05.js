let produtos = [
    { id: 1, nome: "Fone", preco: 59, categoria: "Eletrônica" },
    { id: 2, nome: "Geladeira", preco: 2599, categoria: "Eletroeletrônico" },
    { id: 3, nome: "Mouse", preco: 2109, categoria: "Informática" },
    { id: 4, nome: "Teclado", preco: 299, categoria: "Informática" },
    { id: 5, nome: "Fogão", preco: 599, categoria: "Eletro" }
];


let nomes = produtos.map(function(item) {
    return item.nome;
});


console.log(nomes);


let eletro = produtos.filter(function(item){
    return item.categoria === "eletro"
})
console.log (eletro)

let encontrado = produtos.find(function(item){
    return item.id ===3
})

console.log(encontrado)

let nomesMaiores = produtos.filter(function(item){
    return item.preco>500
}).map(function(item){
    return item.nome
})

console.log(nomeMaiores)
