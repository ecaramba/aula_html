
// partida
var n1 = 1;

// ponto de parada
while ( n1 <= 10) 
{
    console.log("valor de n1" + n1)
    // contador
    n1 = n1 + 1;
} 

// equivalente
for (var n1 = 1; n1 < 10; n1 = n1 + 1)
{
    console.log("valor de n1" + n1)
}


/*
    função é subprograma

    E -> P -> S
    
*/
function soma(n1, n2)
{
    var resultado = n1 + n2;

    return resultado;
}

var res = soma(2, 5);