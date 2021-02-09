console.log(`Trabalhando com loops`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

listaDeDestinos.push('Curitiba');

console.log("Destinos possíveis");

//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }

    contador++;
}

console.log("Destino existe: " + destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
}
else {
    console.log("Desculpe tivemos um erro!");
}

