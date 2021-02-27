import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const clienteUlysses = new Cliente();
clienteUlysses.nome = "Ulysses";
clienteUlysses.cpf = 11122233309;
clienteUlysses.rg = 123456789;

const cliente2 = new Cliente();
cliente2.nome = "Juana";
cliente2.cpf = 88822233309;

const contaCorrenteUlysses = new ContaCorrente();
contaCorrenteUlysses.agencia = 1001;
contaCorrenteUlysses.cliente = clienteUlysses;
contaCorrenteUlysses.depositar(10000);
console.log(contaCorrenteUlysses);

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 102;
contaCorrente2.cliente = cliente2;
console.log(contaCorrente2);

const valorSacado = contaCorrenteUlysses.sacar(50);
console.log(valorSacado);

contaCorrenteUlysses.tranferir(200, contaCorrente2);
console.log(contaCorrente2);

//console.log(cliente1);
//console.log(cliente2);