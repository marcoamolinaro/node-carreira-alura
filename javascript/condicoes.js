const nome = 'Marco'

if (nome) {
    console.log('Olá, ' + nome)
} else {
    console.log('Ainda não sabemos seu nome')
}

const idade = 15

// if (idade != null && idade >= 18) {
//     console.log("É maior de idade")
// } else if (idade != null && idade < 18) {
//     console.log("É menor de idade")
// } else {
//     console.log("Ainda não sabemos sua idade")
// }

if (idade != null) {
    if (idade >= 18) {
        console.log("É maior de idade") 
    } else {
        console.log("É menor de idade")
    }
} else {
    console.log("Ainda não sabemos sua idade")
}