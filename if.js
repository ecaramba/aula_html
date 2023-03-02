
/*
    > - maior
    < - menor
    == - igual
    >= - maior ou igual
    <= - menor ou igual
    != - diferente

*/
function idade()
{
    var idade = prompt("digite sua idade");

    if(idade >= 18)
    {
        console.log("A idade é maior que 18")
    } else if(idade >= 12)
    {
        console.log("é um adolescente") 
    } else 
    {
        console.log("é uma criança")
    }
}