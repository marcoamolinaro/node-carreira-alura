
let pessoa = { 

nome: 'Maria', 

idade: 28, 

apresentar: function() { 

console.log('Olá, meu nome é ' + this.nome); 

} 

}; 

 

pessoa.apresentar(); // Resultado: Olá, meu nome é Maria 



let outraPessoa = { 

nome: 'João', 

apresentar: pessoa.apresentar 

}; 

 

outraPessoa.apresentar(); // Resultado: Olá, meu nome é João


let pessoa1 = { 

nome: 'Ana', 

apresentar: () => { 

console.log('Olá, meu nome é ' + this.nome); 

} 

}; 

 

pessoa1.apresentar(); // Resultado: Olá, meu nome é undefined 