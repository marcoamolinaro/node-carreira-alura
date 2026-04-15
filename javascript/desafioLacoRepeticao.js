// contar quantos número impares e pares existem entre 0 e 100
let numeroPar = 0
let numeroImpar = 0

for (let numero = 0; numero <= 100; numero++) {
    numero % 2 == 0 ? numeroPar++ : numeroImpar++
}

console.log('Número de Pares Encontrados: ' , numeroPar)
console.log('Número de Ímpares Encontrados: ' , numeroImpar)
