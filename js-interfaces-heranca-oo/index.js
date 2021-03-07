import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Ulysses", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Juana",    5000, 12345678901);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Vera", 66345678901, "456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(clienteEstaLogado);