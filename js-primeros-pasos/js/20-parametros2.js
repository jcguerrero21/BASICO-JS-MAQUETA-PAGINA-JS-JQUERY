'use strict'

//Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
}

listadoFrutas("Naranaja", "Manzana", "Sandia", "Melón", "Kiwi", "Pera");

var frutas = ["Naranaja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Melón", "Kiwi", "Pera");