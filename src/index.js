const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }   
    quebraEmParagrafos(data);
    //verificaPalavrasDuplicadas(data);  
});

// criar um array de palavras
// contar as ocorrencias 
// montar um objeto com o resultado

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');

    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo.trim()) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    });
    console.log(contagem);
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    });
    return resultado;
}