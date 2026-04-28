const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numerosPares = numeros.filter(num => num % 2 === 0) // Imprime os números pares do array

console.log('Números pares: ' + numerosPares);

numerosImpares = numeros.filter(num => num % 2 !== 0) // Imprime os números ímpares do array

console.log('Números ímpares: ' + numerosImpares);  

const numerosDobrados = numeros.map((numero) => numero * 2); // Cria um novo array com os números dobrados

console.log('Números dobrados: ' + numerosDobrados);

const mistura = [1, 'dois', true, {chave: 'valor'}, () => 'funcao']; // Array com diferentes tipos de dados

mistura.forEach(item => {
    if (typeof item === 'function') {
        console.log('Item é uma função: ' + item());
    } else {
        console.log('Item: ' + item);
    }
}); // Imprime cada item do array com seu índice    