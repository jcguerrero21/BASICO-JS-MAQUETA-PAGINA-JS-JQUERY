'use strict'

window.addEventListener('load', function() {

    //Timers

    function intervalo() {
        var tiempo = setInterval(function() {

            console.log("Set interval ejecutado");

            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            } else {
                encabezado.style.fontSize = "50px";
            }
        }, 1000);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = this.document.querySelector("#stop");
    stop.addEventListener("click", function() {
        clearInterval(tiempo);
        alert("Has parado el intervalo en bucle");
    });

    var start = this.document.querySelector("#start");
    start.addEventListener("click", function() {
        tiempo = intervalo();
        alert("Has iniciado el intervalo en bucle");
    });

    // var tiempo = setTimeout(function() { //Este solo se ejecuta una vez y ya está

    //     console.log("Set interval ejecutado");

    //     var encabezado = document.querySelector("h1");
    //     if (encabezado.style.fontSize == "50px") {
    //         encabezado.style.fontSize = "30px";
    //     } else {
    //         encabezado.style.fontSize = "50px";
    //     }
    // }, 5000);

});