const nomeProduto = "Teclado Mecânico";
let precoBase = 350.00;
let descontoPorcentagem = 10; 

let valorDesconto = (precoBase * descontoPorcentagem) / 100;
let precoFinal = precoBase - valorDesconto;

console.log(`Produto: ${nomeProduto}`);
console.log(`Preço original: R$ ${precoBase.toFixed(2)}`);
console.log(`Desconto aplicado: R$ ${valorDesconto.toFixed(2)} (${descontoPorcentagem}%)`);
console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);
