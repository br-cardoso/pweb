
const base = parseFloat(prompt("Digite a base do retângulo:"));
const altura = parseFloat(prompt("Digite a altura do retângulo:"));

class Retangulo{
    constructor (base, altura) {
        this.base = base;
        this.altura = altura;
    }
    
    calcularArea = function() {
        return (base * altura);
    };
}

const ret = new Retangulo(base, altura);

alert("Área do Retângulo: " + ret.calcularArea());