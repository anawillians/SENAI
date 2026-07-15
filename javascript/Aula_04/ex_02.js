let livro = {
  titulo: 'Dom Casmurro',
  autor: 'Machado de Assis',
  ano: 1899,
  paginas: 256
};


livro.editora = 'Garnier';


livro.ano = 1900;


delete livro.paginas;


console.log(livro);


