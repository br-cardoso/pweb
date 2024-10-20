var alt = prompt("Digite sua altura em centímetros");
var pes = prompt("Digite seu peso em quilogramas")


alt = alt / 100;
var imc = pes / (alt * alt);
var result;

if (imc < 18.5)
    result="Magreza";
else if (imc < 24.9)
    result="Normal";
else if (imc < 29.9)
    result="Sobrepeso \n Grau 1";
else if (imc < 39.9)
    result="Obesidade \n Grau 2";
else
    result="Obesidade grave \n Grau 3";

imc=Math.trunc(imc);

alert(result + "\nIMC:" + imc);