
    var max = 45;
    var idades = [];
    var contf = 0, contm = 0, somaidade = 0, op, ot=0, bom=0, re=0, pe=0, velho=0, novo=100;

for (var i = 0; i<max ; i++){
    alert("Essa é a pesquisa: " + (i+1) + "/" + max);


    idades[i]=prompt("digite sua idade");
    idades[i]= Number(idades[i]);
    somaidade+=idades[i];
    (idades[i]>velho)?velho=idades[i]: velho;
    (idades[i]<novo)?novo=idades[i]: novo;

    var sexo = prompt("Sexo (F ou M)");
    sexo.toUpperCase;
    (sexo == "F")?contf++:contm++;

    op=prompt("O que achou do filme? \n 1. Péssimo \n 2. Regular \n 3. Bom \n 4. Ótimo");
    (op==1)?pe++:(op==2)?re++:(op==3)?bom++:ot++;

    alert("Digite enter para encerrar a pesquisa.")
}

var media = somaidade/max;
media = media.toFixed(2);
var bomot = (bom + ot) * ( 100/max);
bomot = bomot.toFixed(2);
alert("A média de idade foi: " + media + 
    "\n A pessoa mais velha tem: " + velho +
    "anos \n A pessoa mais nova tem: " + novo +
    "anos \n A quantidade que respondeu 'péssimo': " + pe +
    "\n A porcentagem que respondeu 'bom' ou 'otimo': " + bomot + "%" +
    "\n O número de homens: " + contm + "\n O número de mulheres: " + contf) ;