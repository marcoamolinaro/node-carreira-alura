const pessoa = {
    nome: 'João',
    idade: 30,
    pets: ['Rex', 'Mia'],
    nacionalidade: 'Brasileira',
}

for(const chave in pessoa) {
    console.log('Chave:', chave, '| Valor:', pessoa[chave]); // Imprime as chaves e valores do objeto
}

const chaves = Object.keys(pessoa); // Retorna um array com as chaves do objeto
console.log('Chaves do objeto:', chaves);   

const valores = Object.values(pessoa); // Retorna um array com os valores do objeto
console.log('Valores do objeto:', valores);

const entradas = Object.entries(pessoa); // Retorna um array de arrays, onde cada sub-array é um par chave-valor
console.log('Entradas do objeto:', entradas);