const frutas = ['maçã', 'banana', 'laranja'];

const maisFrutas = ['Uva', 'Abacaxi', 'Kiwi']; // Usando o operador spread para criar um novo array

const clone = [...frutas]; // Clonando o array frutas usando o operador spread

const todasFrutas = [...frutas, ...maisFrutas]; // Combinando os dois arrays usando o operador spread

frutas.push('morango'); // Adiciona uma nova fruta ao array frutas

console.log('Frutas:', frutas); // Imprime o array frutas atualizado
console.log('Mais Frutas:', maisFrutas); // Imprime o array maisFrutas
console.log('Clone de Frutas:', clone); // Imprime o clone do array frutas, que não foi afetado pela modificação do array original
console.log('Todas as Frutas:', todasFrutas); // Imprime o array combinado de frutas e maisFrutas

const [primeira, segunda, ...restante] = todasFrutas; // Usando o operador rest para desestruturar o array

console.log('Primeira fruta:', primeira); // Imprime a primeira fruta
console.log('Segunda fruta:', segunda); // Imprime a segunda fruta
console.log('Restante das frutas:', restante); // Imprime o restante das frutas em um array separado    