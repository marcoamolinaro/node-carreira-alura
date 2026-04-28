
let respostaDoServidor = '{"nome":"João","idade":30}'; 


let objeto = JSON.parse(respostaDoServidor); 

console.log(objeto.nome); // Resultado: João 


let pessoa = { nome: 'João', idade: 30 }; 

let json = JSON.stringify(pessoa); 

 

console.log(json); // Resultado: '{"nome":"João","idade":30}' 
