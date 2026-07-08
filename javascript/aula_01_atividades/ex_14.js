// 1. Declaração das variáveis (SEM atribuição de valor)
let nome;
let idade;
let altura;
let casado;
let temFilhos;

// 2. Exibição ANTES da atribuição (Surgirá 'undefined' no console)
console.log("--- ANTES DA ATRIBUIÇÃO ---");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Casado:", casado);
console.log("Tem Filhos:", temFilhos);

// 3. Atribuição de valores
nome = "Ana Clara";
idade = 30;
altura = 1.75;
casado = true;
temFilhos = false;

// 4. Exibição DEPOIS da atribuição (Surgirão os valores reais)
console.log("\n--- DEPOIS DA ATRIBUIÇÃO ---");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Casado:", casado);
console.log("Tem Filhos:", temFilhos);
