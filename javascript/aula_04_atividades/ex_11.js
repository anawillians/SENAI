let filme = {
  titulo: "Interestelar",
  diretor: "Christopher Nolan",
  ano: 2014,
  genero: "Ficção Científica"
};

for (const chave in filme) {
  console.log(`${chave}: ${filme[chave]}`);
}
