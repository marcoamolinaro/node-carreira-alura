let camila1 = {
    nome: 'Camila',
    idade: 25,
    profissao: 'Designer', 
}

const camila2 = camila1; // camila2 é uma referência ao mesmo objeto que camila1

camila2.idade = 26; // Modifica a idade através de camila2

console.log(camila1);
console.log(camila2);

camila3 = { ...camila1 }; // camila3 é um novo objeto com as mesmas propriedades de camila1

camila3.idade = 27; // Modifica a idade de camila3  

console.log(camila1);
console.log(camila3);   

camila1 = {
    ...camila2, // Copia as propriedades de camila2
    profissao: 'Desenvolvedora', // Sobrescreve a propriedade profissao
    possuiCNH: true, // Adiciona uma nova propriedade
}

console.log(camila1); // Imprime o objeto camila1 atualizado

const {nome, ...resto} = camila1; // Desestruturação para extrair o nome e o restante das propriedades

console.log('Nome:', nome);
console.log('Resto das propriedades:', resto);