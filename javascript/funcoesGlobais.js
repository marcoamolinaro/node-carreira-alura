function saudacao() {
    console.log("Olá, seja bem-vindo ao meu site! Beleza, né? :)");
}

setTimeout(saudacao, 2000);

let contador = 0;

const id = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
    if (contador == 10) {
        clearInterval(id);
    }
}, 1000);

