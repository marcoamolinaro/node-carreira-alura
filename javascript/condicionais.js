const idade = 62
 
// if (idade >= 18) {
//     console.log("É maior de idade")
// }

// if (idade < 18) {
//     console.log("É menor de idade")
// }

// if (idade >= 18) {
//     console.log("É maior de idade")
// } else {
//     console.log("É menor de idade")
// }

idade >= 18 ? console.log("É maior de idade") : console.log("É menor de idade")

// Entre 9 e 10: excelente
// Entre 7 e 8: bom
// Entre 4 e 6: médio
// Entre 0 e 3: ruim

const notaDoAluno = 3

// if (notaDoAluno >= 9 && notaDoAluno <= 10) {
//     console.log("Excelente")
// } else if (notaDoAluno >= 7 && notaDoAluno < 9) {
//     console.log("Bom")
// } else if (notaDoAluno >= 4 && notaDoAluno < 7) {
//     console.log("Médio")
// } else if (notaDoAluno >= 0 && notaDoAluno < 4) {
//     console.log("Ruim")
// }

if (notaDoAluno >= 9) {
    console.log("Excelente")
} else if (notaDoAluno >= 7) {
    console.log("Bom")
} else if (notaDoAluno >= 4) {
    console.log("Médio")
} else {
    console.log("Ruim")
}

