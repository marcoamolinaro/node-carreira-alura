const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor',
}

const { nome, idade, profissao } = pessoa; // Desestruturação para extrair as propriedades do objeto

console.log('Nome:', nome);
console.log('Idade:', idade);
console.log('Profissão:', profissao);   


function saudacao({ nome, idade }) { // Desestruturação para extrair apenas a propriedade nome
    console.log('Olá, ' + nome);

    if (idade >= 18) {
        console.log('Você é maior de idade.');
    }

}

saudacao(pessoa); // Resultado: Olá, João

const frutas = ['Maçã', 'Banana', 'Laranja'];

const [primeira, segunda] = frutas; // Desestruturação para extrair os itens do array

console.log('Primeira fruta:', primeira);
console.log('Segunda fruta:', segunda);

