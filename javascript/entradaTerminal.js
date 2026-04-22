const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log(`Olá, ${nome} ! Boas vindas ao meu site! :)`);

    leitor.question('Qual é a sua idade? ', (idade) => {
        console.log(`Você tem ${idade} anos!`);

        idade >= 18 ? console.log('Você pode tirar sua CNH!') : 
                      console.log('Você não pode tirar sua CNH ainda!');
                      
        leitor.close();
    });
    
});

