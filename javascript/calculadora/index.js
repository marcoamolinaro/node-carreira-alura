//const readline = require('readline');

import {createInterface} from 'readline';
import {soma, subtracao} from './operacoesMatematicas.js';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite o primeiro núnero:\n> ', (numero1) => {
    leitor.question('Digite a operação:\n+) soma\n-) subtração\n> ', (operacao) => {   
        leitor.question('Digite o segundo número:\n> ', (numero2) => {

            const num1 = Number(numero1);
            const num2 = Number(numero2);

            let resultado = null;

            (operacao === '+') ? resultado = soma(num1, num2) :
            (operacao === '-') ? resultado = subtracao(num1, num2) :
            console.log('Operação inválida!');

            if (resultado != null) {  
                console.log('Resultado: ' + resultado);
            }

            leitor.close();
        });
    });
});

