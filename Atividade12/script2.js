const nomeC = prompt("Digite o nome da conta corrente:");
const bancoC = prompt("Digite qual o banco da conta corrente:");
const numC = prompt("Digite o número da conta corrente:");
const saldoC = parseFloat(prompt("Digite o saldo da conta corrente:")); 
const saldoEsp = parseFloat(prompt("Digite o saldo especial da conta corrente:")); 

const nomeP = prompt("Digite o nome da conta poupança: ");
const bancoP = prompt("Digite o banco da conta poupança: ");
const numP = prompt("Digite o número da conta poupança: ");
const saldoP = parseFloat(prompt("Digite o saldo da conta poupança: "));
const jurosP = parseFloat(prompt("Digite a taxa de juros da conta poupança: "));
const venc = prompt("Digite a data de vencimento da conta poupança: ");
    
class Conta {
    constructor(nome, banco, num, saldo) {
        this.nome = nome;
        this.banco = banco;
        this.num = num;
        this.saldo = saldo;
    }
    
    getnome() {
        return nome;
    }

    getBanco() {
        return banco;
    }

    getnum() {
        return num;
    }

    getSaldo() {
        return saldo;
    }
}

class Corrente extends Conta {
    constructor(nomeC, bancoC, numC, saldo, saldoEsp) {
        super(nomeC, bancoC, numC, saldo);
        this.saldoEsp = saldoEsp; 
    }
    getSaldoC() {
        return saldoC;
    }
}

class Poupanca extends Conta {
    constructor(nomeP, bancoP, numP, saldoP, jurosP, venc) {
        super(nomeP, bancoP, numP, saldoP);
        this.jurosP = jurosP; 
        this.venc = venc; 
    }

    getjurosP (){
        return jurosP;
    } 
    getVenc (){
        return venc;
    } 
        
}



const contaCorrente = new Corrente(nomeC, bancoC, numC, saldoC, saldoEsp);
const contaPoupanca = new Poupanca(nomeP, bancoP, numP, saldoP, jurosP, venc);

   alert("Dados da Conta Corrente:" + 
    "\nnome: " + contaCorrente.getnomeC() +
    "\nbanco: " + contaCorrente.getBanco() +
    "\nnumero da conta: " + contaCorrente.getnumC() + 
    "\nSaldo da conta: " +   contaCorrente.getSaldo() +
    "\nSaldo especial da conta: " +   contaCorrente.getSaldoEsp()
);
   alert("Dados da Conta Poupança:" + 
    "\nnome: " + contaPoupanca.getnomeC() +
    "\nbanco: " + contaPoupanca.getBanco() +
    "\nnumero da conta: " + contaPoupanca.getnumC() + 
    "\nSaldo da conta: " +   contaPoupanca.getSaldo() +
    "\nJuros da conta: " +   contaCorrente.getjurosP() +
    "\nVencimento dos juros da conta: " +   contaCorrente.getVenc()
   );

