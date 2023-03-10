
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


    }); // fim do click casdatrar

});