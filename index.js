// campos ou atributos, property => dentro das classification
import { Client } from './Client.js';
import { ContaCorrente } from './ContaCorrente.js';

const client1 = new Client("Agnês", 11122233309);
const client2 = new Client("Lavinia", 88822233309);


const contaCorrenteAgnes = new ContaCorrente(1001, client1);
contaCorrenteAgnes.depositar(500);
const contaCorrenteLavinia = new ContaCorrente(1009, client2);

let valor = 200;
contaCorrenteAgnes.transferir(valor, contaCorrenteLavinia)

console.log(ContaCorrente.numContas);