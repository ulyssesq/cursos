import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const clienteUlysses = new Cliente("Ulysses", 11122233309);
const clienteJuana = new Cliente("Juana", 88822233309);


const contaCorrenteUlysses = new ContaCorrente(1001, clienteUlysses);
contaCorrenteUlysses.depositar(10000);
console.log(contaCorrenteUlysses);

const contaCorrente2 = new ContaCorrente(102, clienteJuana);
console.log(contaCorrente2);

const valorSacado = contaCorrenteUlysses.sacar(50);
console.log(valorSacado);

contaCorrenteUlysses.tranferir(200, contaCorrente2);
console.log(contaCorrente2);

//console.log(cliente1);
//console.log(cliente2);