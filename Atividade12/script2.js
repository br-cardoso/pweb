// Classe Conta
class Conta {
    constructor(nome, banco, numConta, saldo) {
        this.nome = nome;
        this.banco = banco;
        this.numConta = numConta;
        this.saldo = saldo;
    }

    // Métodos get e set
    setnome(nome) {
        this.nome = nome;
    }

    setBanco(banco) {
        this.banco = banco;
    }

    setnumConta(numero) {
        this.numConta = numero;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(nome, banco, numConta, saldo, saldoEspecial) {
        super(nome, banco, numConta, saldo);
        this.saldoEspecial = saldoEspecial; 
    }
}

class Poupanca extends Conta {
    constructor(nome, banco, numConta, saldo, juros, dataVencimento) {
        super(nome, banco, numConta, saldo);
        this.juros = juros; 
        this.dataVencimento = dataVencimento; 
    }
}

function criarContas() {
    const nomeCorrente = prompt("Digite o nome do correntista da conta corrente:");
    const bancoCorrente = prompt("Digite o banco da conta corrente:");
    const numContaCorrente = prompt("Digite o número da conta corrente:");
    const saldoCorrente = parseFloat(prompt("Digite o saldo da conta corrente:"));
    
    const contaCorrente = new Corrente(nomeCorrente, bancoCorrente, numContaCorrente, saldoCorrente, 1000);

    const nomeP = prompt("Digite o nome do correntista da conta poupança:");
    const bancoP = prompt("Digite o banco da conta poupança:");
    const numP = prompt("Digite o número da conta poupança:");
    const saldoP = parseFloat(prompt("Digite o saldo da conta poupança:"));
    const jurosP = parseFloat(prompt("Digite a taxa de juros da conta poupança:"));
    const venc = prompt("Digite a data de vencimento da conta poupança:");

    const contaPoupanca = new Poupanca(nomeP, bancoP, numP, saldoP, jurosP, venc);

    console.log("Dados da Conta Corrente:", contaCorrente);
    console.log("Dados da Conta Poupança:", contaPoupanca);
}