const pessoa = {
    nome: 'João',
    idade: 30,
    temCNH: true,
}

pessoa.sobrenome = 'Silva'; // Adiciona uma nova propriedade ao objeto

console.log('Nome completo: ' + pessoa.nome + ' ' + pessoa.sobrenome); // Imprime o nome completo da pessoa

const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    paginas: 1216,
}

livro.publicado = true; // Adiciona uma nova propriedade ao objeto
livro.idiomas = ['Inglês', 'Português', 'Espanhol']; // Adiciona uma nova propriedade com um array

console.log(livro);