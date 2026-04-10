const idade = 15
const maiorDeIdade = idade >= 18
const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH

console.log("Pode dirigir: ", podeDirigir) // false

const podeViajar = maiorDeIdade || possuiCNH

console.log("Pode viajar: ", podeViajar) // false

const precisaDeAcompanhante = !maiorDeIdade

console.log("Precisa de acompanhante: ", precisaDeAcompanhante) // true