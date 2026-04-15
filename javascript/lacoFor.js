// Estrutura do laço de repetição for
for (let contador = 1; contador <= 10; contador++) {
    console.log('Número Atual: ' ,  contador)
}

for (let numero =0; numero <= 15; numero++) {
    if (numero % 2 == 0) {
        console.log('Número Par Encontrado  : ' , numero)
    }
}

for (let numero =0; numero <= 15; numero++) {
    if (numero % 2 > 0) {
        console.log('Número Ímpar Encontrado  : ' , numero)
    }
}


const palavra = 'calopsita'

for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador])
}