'use strict'
$(document).ready(function() {

    //Load
    // $("#datos").load("https://reqres.in/")

    //Get y Post
    $.get("https://reqres.in/api/users", { page: 3 }, function(response) {
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + index + ". " + element.first_name + " " + element.last_name + "</p>")
        });
    });

    // var usuario = {
    //     "name": "Juan Carlos",
    //     "web": "miweb.es"
    // }
    // $.post("https://reqres.in/api/users", usuario, function(response) {
    //     console.log(response);
    // });

    $("#formulario").submit(function(event) {
        event.preventDefault(); // para que no nos redirija a otra página

        var usuario = {
            name: $('input[name="nombre"]').val(),
            web: $('input[name="web"').val()
        };

        // Otra forma de hacer una petición ajax por POST
        // $.post($(this).attr("action"), usuario, function(response) {
        //     console.log(response);
        // }).done(function() {
        //     alert("Usuario añadido correctamente");
        // });

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function() { //antes de que se envie la petición ejecutará esto
                console.log("Enviando usuario...");
            },
            success: function(response) { //esto será siempre que todo vay correcto
                console.log(response);
            },
            error: function() { //en el caso de que suceda algún error
                console.log("Ha ocurrido un error");
            },
            timeout: 1000 //así le indicamos cuanto queremos que tardé la petición
        });

        return false; // para que no nos redirija a otra página
    })
});