const pessoa = {
    nome: 'João',
    idade: 30,
    temCNH: true,
}

pessoa.sobrenome = 'Silva'; // Adiciona uma nova propriedade ao objeto

console.log('Nome completo: ' + pessoa.nome + ' ' + pessoa.sobrenome); // Imprime o nome completo da pessoa

const livro = {
    titulo: 'O Senhor dos Anéis',
    anoPublicacao: 1954,
    paginas: 1216,
}

livro.publicado = true; // Adiciona uma nova propriedade ao objeto
livro.idiomas = ['Inglês', 'Português', 'Espanhol']; // Adiciona uma nova propriedade com um array

console.log(livro);

livro.idiomas.push('Francês'); // Adiciona um novo idioma ao array de idiomas
livro.idiomas.push('Alemão'); // Adiciona um novo idioma ao array de idiomas

console.log('Livro antes:', livro);

delete livro.paginas; // Remove a propriedade 'paginas' do objeto
console.log('Livro depois:', livro);

console.log('Autor do livro: ' + livro['autor']); // Imprime o autor do livro

console.log('Editora', livro['editora']); // Tenta acessar uma propriedade inexistente, resultando em undefined

const autor = {
    nome: 'J.K. Rowling',
    nacionalidade: 'Britânica',
    idade: 55, 
    livros: ['Harry Potter e a Pedra Filosofal', 'Harry Potter e a Câmara Secreta', 'Harry Potter e o Prisioneiro de Azkaban']
}

console.log('Autor: ', autor); // Imprime o nome do autor

livro.autor = autor; // Adiciona o objeto autor como uma propriedade do objeto livro

console.log('Livro com autor:', livro); // Imprime o livro com o autor incluído

const livro1 = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  paginas: 310
};

const propriedade = "autor";
console.log(livro1[propriedade]); // Imprime: J.R.R. Tolkien

