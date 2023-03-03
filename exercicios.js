// DOM -> manipulação do html pelo js

var cidades = ["Curitiba", "Pinhais", "Araucaria", "Colombo"];

function imprimir()
{
    var div = document.getElementById("resposta");    
    console.log(div);

    // limpa o div
    div.innerHTML = "";

    var ini = 0;
    var fim = cidades.length;

    while (ini < fim)
    {
        div.innerHTML += cidades[ini] + "<br>";
        // div.innerHTML = div.innerHTML + cidades[ini];
        ini += 1;
        // ini = ini + 1;
    }
}

function ordenado()
{
    var div = document.getElementById("resposta");
    div.innerHTML = "";
    
    cidades.sort();
    var fim = cidades.length;

    for (var ini = 0; ini < fim; ini += 1)
    {
        div.innerHTML += cidades[ini] + "<br>";
    }

}