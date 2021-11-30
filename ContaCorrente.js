import { Client } from './Client.js' 

export class ContaCorrente {
  static numContas = 0;
  agency;
  _client;

  set client(novoValor) {
    if(novoValor instanceof Client) {
      this._client = novoValor;
    }
  }

  get client() {
    return this._client;
  }

  _balance = 0;

  get balance() {
    return this._balance;
  }

  constructor(agency, client) {
    this.agency = agency;
    this.client = client;
    ContaCorrente.numContas += 1;
  }

  sacar(valor) {
    if(this._balance >= valor) {
      this._balance -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if(valor <= 0 ) 
    return;
    this._balance += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor) 
    conta.depositar(valorSacado); 
  }

}
