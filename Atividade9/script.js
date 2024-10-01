var escolha = prompt("Escolha uma das funções a seguir \n 1. Encontrar o maior" +
    "\n 2. Ordenar \n 3. Palindromo? \n 4. Triângulo?")

switch(escolha){
    case "1" : 
        var maior = 0; 
        var numberstring1 = prompt("Digite 4 numeros inteiros, separados por espaço: ")
        var numberint1 = numberstring1.split(" ");
        for (var i = 0; i<4; i++)
            (numberint1[i]>maior)?maior=numberint1[i]:maior=maior;

        alert("O maior é: " + maior);
        break;
    case "2" : 
        var numberstring2 = prompt("Digite 4 numeros inteiros, separados por espaço: ")
        var numberint2 = numberstring2.split(" "); 
        numberint2.sort( function (a, b) {
            return (a-b); });
        alert(numberint2);
        break;
    case "3" :
        const stringpal = prompt("Digite uma frase e descubra se ela é palíndroma.")
        
        stringpal.toLowerCase();
        var stringrev = stringpal.split("").reverse().join(""); 

        if(stringpal == stringrev)
            alert("Esta é uma palíndroma");
        else
            alert("Não é uma palíndroma")
        
        break
    case "4" :
        var tri = prompt("Digite as medidas dos três lados de um triângulo.")
        tri = tri.split(" ");
        a= Number (tri[0]);
        b= Number (tri[1]);
        c= Number (tri[2]);

        function verifica(i, j, k) {
            return ((i+j)>k && (i+k)>j && (j+k)>i);
        } 

        alert(verifica(a,b,c)?"v":"f");

        if (verifica(a,b,c)){

            function tipo(i, j, k){
                return ((i==j && j==k)?"Equilátero": (i==j || i==k || k==j)?"Isósceles":"Escaleno")
            }

            alert("Este é um triângulo: " + tipo(a,b,c) )
        }
        else
            alert("Essas medidas não formam um triângulo");
         
}