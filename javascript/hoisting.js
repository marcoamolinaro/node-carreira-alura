console.log("Minha idade atual é", idade)

var idade = 62;
// variável global não pode ser referenciada antes da declaração 
// var -> exibe 'undefined' quando é referenciada antes da declaração e deve ser evitado
// let e const -> ReferenceError: Cannot access 'idade' before initialization

console.log("Minha idade depois de declarar a variável é", idade)
