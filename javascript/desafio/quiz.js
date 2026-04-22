const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let acertos = 0;

rl.question(
    '1) Qual palavra usamos para criar uma funcão em JavaScript?\na) define\nb) function\nc) create\n>', (resposta1) => {
        if (resposta1.toLowerCase() === 'b') {
            acertos++;
        }

        rl.question(
            '2) Qual dessas é uma estrutura de repetição?\na) loopar\nb) repeat\nc) for\n>', (resposta2) => {
                if (resposta2.toLowerCase() === 'c') {
                    acertos++;
                }

                rl.question(
                    '3) Qual valor é considerado falsy em JavaScript?\na) 0\nb) "false"\nc) []\n>', (resposta3) => {
                        if (resposta3.toLowerCase() === 'a') {
                            acertos++;
                        }
                        
                        switch (acertos) {
                            case 0:
                                console.log('Você acertou 0 de 3 perguntas. Tente novamente!'); 
                                break;
                            case 1:
                                console.log('Você acertou 1 de 3 perguntas. Quase lá!');
                                break;
                            case 2:
                                console.log('Você acertou 2 de 3 perguntas. Muito bom!');   
                                break;
                            case 3:
                                console.log('Parabéns! Você acertou todas as perguntas!');
                                break;
                        }
                        rl.close();
                    }
                );
            }
        );
    }
);