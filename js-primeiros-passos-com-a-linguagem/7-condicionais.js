console.log(`Trabalhando com condicionais`);

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
const temPassagemComprada = true;

listaDeDestinos.push('Curitiba');

console.log("Destinos possíveis");

//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(1, 1);
}
else {
    console.log(`Não é maior de idade e não posso vender`);
}


console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}
else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);