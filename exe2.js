
// coloca a primeira em maiuscula
// edir -> Edir
// EDIR -> Edir
// eDIr -> Edir
function exe1()
{
    console.log('exe1');

    var resultado = document.getElementById("resultado");
    var texto = document.getElementById("texto");

    var letra = texto.value.charAt(0);
    var resto = texto.value.substr(1);
    var palavra = letra.toUpperCase() + resto.toLowerCase();

    resultado.innerHTML = palavra;
    texto.value = "";
}

// inverte um texto
// edir -> ride
// EDIR -> RIDE
function exe2()
{
    var resultado = document.getElementById("resultado");
    var texto = document.getElementById("texto");

    var fim = 0;
    var ini = texto.value.length; // 4
    // novo -> ovon
    // 0123 -> 3210

    while(ini >= fim)
    {
        resultado.innerHTML += texto.value.charAt(ini)
        ini -= 1; 
    }
    
}

// oculta o cpf
// 123.123.123-00 -> 123.***.***-00
// 222.222.222-33 -> 222.***.***-33
function exe3()
{
    var resultado = document.getElementById("resultado");
    var texto = document.getElementById("texto");

    var primeiros = texto.value.slice(0, 3);
    //var ultimos = texto.value.slice(-2)
    var ultimos = texto.value.slice(12)

    resultado.innerHTML = primeiros + ".***.***-" + ultimos;
}