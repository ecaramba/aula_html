// DOM -> manipulação do html pelo js

var cidades = ["Curitiba", "Pinhais", "Araucaria", "Colombo"];

function imprimir()
{

    var div = document.getElementById("resposta");
    console.log(div);

    var ini = 0;
    var fim = cidades.length;

    while (ini < fim)
    {
        div.innerHTML = cidades[ini]
        ini = ini + 1;
    }


}