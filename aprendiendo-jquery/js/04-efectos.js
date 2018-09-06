'use strict'
$(document).ready(function() {

    var caja = $("#caja");

    $("#mostrar").hide();

    //hide y show

    // $("#todoenuno").click(function() {
    //     $("#caja").toggle('fast');
    // })

    // $("#todoenuno").click(function() {
    //     $("#caja").fadeToggle('fast');
    // })

    // $("#todoenuno").click(function() {
    //     $("#caja").slideToggle('fast');
    // })

    /*
    $("#mostrar").click(function() {
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeTo('slow', 1);
    })

    $("#ocultar").click(function() {
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeTo('slow', 0);
    })*/

    /*
    $("#mostrar").click(function () {
        $(this).hide();
        $("#ocultar").show();
        $("#caja").show('fast');
    })

    $("#ocultar").click(function () {
        $(this).hide();
        $("#mostrar").show();
        $("#caja").show('fast');
    })*/

    /*
    $("#mostrar").click(function () {
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeIn('slow');
    })

    $("#ocultar").click(function () {
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeOut('slow');
    })*/


    $("#mostrar").click(function() {
        $(this).hide();
        $("#ocultar").show();
        $("#caja").slideDown('fast', function() {
            console.log("Cartel ocultado")
        });
    });

    $("#ocultar").click(function() {
        $(this).hide();
        $("#mostrar").show();
        $("#caja").slideUp('fast');
    });

    $("#animame").click(function() {
        caja.animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '15px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow')
    });

});