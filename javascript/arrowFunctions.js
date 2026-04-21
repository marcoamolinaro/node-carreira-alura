const saudacao = (nome) => {
    console.log("Olá, seja bem-vindo!", nome);
}

saudacao("Marcão");

const calcucalarDobroDeUm = (numero) => {
    return numero * 2;
}

const numero = calcucalarDobroDeUm(5);
console.log(numero); // Retorna 10  

const saudacaoSimples = nome => console.log("Olá, seja bem-vindo!", nome);

saudacaoSimples("Marco Polo Polo");

const numeroSimples = numero => numero * 2;

console.log(numeroSimples(10)); // Retorna 20   