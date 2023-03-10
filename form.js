
$(document).ready(function(){

    // plugin calendario
    $("#data").datepicker({
        format: "dd/mm/yyyy",
        endDate: "now",
        language: "pt-BR"
    }); //plugin

    // mascara no telefone
    $("#telefone").mask("(00) 0000-0000");

    // monitora teclado
    $("#cpf").keydown(function(ev)
    {
        console.log(ev.key);
        var teclas = "1234567890.-";

        if (teclas.includes(ev.key) == false)
        {
            return false;
        }
       
    });

    // clica no botao cadastrar
    $("#btn-cadastrar").click(function()
    {

        // reseta todos os inputs
        $("input").removeClass("is-invalid");

        var email = $("#email").val();

        if (email == "")
        {
            $("#email").addClass("is-invalid");
        }

        if ( $("#nome").val() == "" )
        {
            $("#nome").addClass("is-invalid");
        }

        if ( $("#cpf").val() == "" )
        {
            $("#cpf").addClass("is-invalid");
        } 

        if ( $("#telefone").val() == "" )
        {
            $("#telefone").addClass("is-invalid");
        }

        if ( $("#cidade").val() == "0" )
        {
            $("#cidade").addClass("is-invalid");
        } 

        if ( $("[name=sexo]:checked").val() == undefined )
        {
            $("[name=sexo]").addClass("is-invalid");
        }

        if ( $("#data").val() == "" )
        {
            $("#data").addClass("is-invalid");
        } 


    }); // fim do click casdatrar

});