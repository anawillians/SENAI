
let filmes = [
    {titulo: "pantera negra", ano: 2012, genero: "ação"},
    {titulo: "carros 3", ano: 2014, genero: "animação"},
    {titulo: "toy story 5", ano: 2026, genero:"animação"}
]


filmes.forEach(function(filme){
    console.log(`${filme.titulo} - ${filme.ano} - ${filme.genero}`)
})