let produtos = [
  { nome: 'Mouse', preco: 50 },
  { nome: 'Teclado', preco: 120 },
  { nome: 'Monitor', preco: 800 }
];

let nomes = produtos.map(p => p.nome);

console.log(nomes);
