const frutas = ["banana", "maçã", "laranja", "uva"];

console.log(frutas); // Acessa o primeiro elemento do array  

console.log('Total de frutas: ' + frutas.length); // Acessa o terceiro elemento do array

frutas.push("abacaxi"); // Adiciona um novo elemento ao final do array

console.log(frutas); // Imprime o array atualizado

console.log('Total de frutas: ' + frutas.length); // Acessa o terceiro elemento do array

console.log('Última fruta: ' + frutas[frutas.length - 1]); // Acessa o último elemento do array

frutas.splice(2, 1); // Cria um novo array com os elementos do índice 2 ao 3 (exclusivo)

console.log(frutas); // Imprime o array original, que permanece inalterado

console.log('Usando for para acessar os elementos do array:');
for (let i = 0; i < frutas.length; i++) {
    console.log(i + ': ' + frutas[i]); // Acessa cada elemento do array usando um loop
} 

console.log('Usando forEach para acessar os elementos do array:');
frutas.forEach((fruta, index) => {
    console.log(index + ': ' + fruta); // Acessa cada elemento do array usando forEach
});

console.log('Usando for...of para acessar os elementos do array:');
for (const fruta of frutas) {
    console.log(fruta); // Acessa cada elemento do array usando for...of    
}