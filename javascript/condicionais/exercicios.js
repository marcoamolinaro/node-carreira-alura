// IF ELSE
// Definir fluxo para somar ou multiplicar dois numeros usando IF ELSE

const num1 = 2;
const num2 = 4;

const operacao = 'divisao';

if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicacao') {
    console.log(num1 * num2);
} else {
    console.log('Operação inválida!');
}

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salarіо = 12000;

if (salarіо >= 11000) {
    console.log('Bônus de 3%');
} else if (salarіо < 11000 && salarіо >= 7000) {
    console.log('Bônus de 5%');
} else if (salarіо < 7000 && salarіо >= 4008) {
    console.log('Bônus de 7%');
} else {
    console.log('Bônus de 9%');
}   

// Verificar se um anos é bissexto ou não.
const ano = 1992;

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(`${ano} é um ano bissexto.`);
} else {
    console.log(`${ano} não é um ano bissexto.`);
}

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 

const nome = "Roberta";
const nota = 8;
const faltas = 2;

const recebeBonus = (nota >= 8) && (faltas <= 2) 
    ? `${nome} recebe bônus!` 
    : `${nome} não recebe bônus!`;

console.log(recebeBonus);

// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const user = 'premium';

switch(user){
    case 'free':
        console.log('Acesso limitado ao app');
        break;  
    case 'premium':
        console.log('Acesso a todas as funções');
        break;
    case 'super premium':
        console.log('Acesso total e bônus especiais');
        break;
}