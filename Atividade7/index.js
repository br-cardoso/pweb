var escolha = prompt(" PEDRA(1) PAPEL(2) TESOURA(3)")

function numAle(min, max) {
    return Math.floor(Math.random() * (max - min + 1) +1);
}

var ale = numAle(1, 3);

if (escolha == ale) 
    alert("Empate!")
else if (escolha == 1 ) {
    if(ale == 2)
        alert("Voce perdeu :( o computador escolheu papel.")
    else
        alert("Voce venceu :) o cumputador escolheu tesoura.")
}
else if (escolha == 2) {
    if(ale == 1)
        alert("Voce venceu :) o computador escolheu pedra.")
    else
        alert("Voce perdeu :( o cumputador escolheu tesoura.")
}
else {
    if(ale == 3)
        alert("Voce perdeu :( o computador escolheu pedra.")
    else
        alert("Voce venceu :) o cumputador escolheu papel.")
}

