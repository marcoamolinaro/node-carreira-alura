// HOF - Higher Order Function ===> A function that takes another function as an argument or returns a function as a result.    

function calcucalar(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
}

function somar(numero1, numero2) {
    return numero1 + numero2;
}

function divisao(numero1, numero2) {
    return numero1 / numero2;
}

const resultadoSoma = calcucalar(10, 5, somar);
console.log(resultadoSoma); // Retorna 15       

const resultadoDivisao = calcucalar(10, 5, divisao);
console.log(resultadoDivisao); // Retorna 2

