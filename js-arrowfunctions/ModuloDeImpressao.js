class ModuloDeImpressao {
    constructor(){
        this._codigo = 10;
    }

    imprime(nomes){
        console.log(this._codigo);
        nomes.forEach(function(nome) {
            console.log(`${this._codigo}: ${nome}`);
        }.bind(this));
    }
}

const professores = ['Ulysses', 'Juana', 'Vera'];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);