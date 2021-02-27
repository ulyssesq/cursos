class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        
        this.#saldo += valor;
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ulysses";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

cliente2.nome = "Juana";
cliente2.cpf = 88822233309;

const contaCorrenteUlysses = new ContaCorrente();
contaCorrenteUlysses.agencia = 1001;
contaCorrenteUlysses.depositar(10000);
console.log(contaCorrenteUlysses);

const valorSacado = contaCorrenteUlysses.sacar(50);
console.log(valorSacado);

//console.log(cliente1);
//console.log(cliente2);