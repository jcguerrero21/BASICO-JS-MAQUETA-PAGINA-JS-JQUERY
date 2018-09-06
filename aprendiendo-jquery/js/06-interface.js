'use strict'
$(document).ready(function() {

    //Mover elemento por la página
    $('.elemento').draggable();

    //Redimensionar
    $('.elemento').resizable();

    //Seleccionar y elementos
    // $(".lista-seleccionable").selectable();

    //Ordernar elementos
    $(".lista-seleccionable").sortable({
        update: function(event, ui) {
            console.log("Ha cambiado la lista");
        }
    });

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function() {
            console.log("Has soltado algo dentro del area");
        }
    });

    //Efectos
    $("#mostrar").click(function() {
        $(".caja-efectos").toggle("shake", 4000);
    });

    //Tooltip //podemos mirar mas tooltips en internet por ejemplo en iamceege.github.io/tooltipster/#getting-started
    $(document).tooltip();

    //Dialog
    $("#lanzar-popup").click(function() {
        $("#popup").dialog();
    })

    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();


});