const saudacao = require('./minhaSaudacao');
const apresentarPessoa = require('./apresentarPessoa');
const calcularIMC = require('./calculaIMC');    

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

saudacao();

rl.question('Qual é o seu nome? ', (nome) => {
    rl.question('Qual é a sua idade? ', (idade) => {
        rl.question('Qual é o seu peso? ', (peso) => {
            rl.question('Qual é a sua altura? ', (altura) => {
                apresentarPessoa(nome, idade);
                const imc = calcularIMC(peso, altura);
                console.log(`Seu IMC é: ${imc.toFixed(2)}`);
                rl.close();
            });
        });
    });
}); 
