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

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
    }
    else {
        console.log("Destino não existe");
    }

    contador++;
}

console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}
else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);