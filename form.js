
$(document).ready(function(){

    // clica no botao cadastrar
    $("#btn-cadastrar").click(function()
    {

        var email = $("#email").val();

        if (email == "")
        {
            $("#email").addClass("is-invalid");
        } else {
            $("#email").removeClass("is-invalid");
        }

        if ( $("#nome").val() == "" )
        {
            $("#nome").addClass("is-invalid");
        } else {
            $("#nome").removeClass("is-invalid");
        }

        if ( $("#cpf").val() == "" )
        {
            $("#cpf").addClass("is-invalid");
        } else {
            $("#cpf").removeClass("is-invalid");
        }

        if ( $("#telefone").val() == "" )
        {
            $("#telefone").addClass("is-invalid");
        } else {
            $("#telefone").removeClass("is-invalid");
        }

        if ( $("#cidade").val() == "0" )
        {
            $("#cidade").addClass("is-invalid");
        } else {
            $("#cidade").removeClass("is-invalid");
        }

        if ( $("[name=sexo]:checked").val() == undefined )
        {
            $("[name=sexo]").addClass("is-invalid");
        } else {
            $("[name=sexo]").removeClass("is-invalid");
        }

        if ( $("#data").val() == "" )
        {
            $("#data").addClass("is-invalid");
        } else {
            $("#data").removeClass("is-invalid");
        }


    }); // fim do click casdatrar

});