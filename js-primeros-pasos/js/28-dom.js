'use strict'

//DOM - vamos a hablar del document object model

function cambiaColor(color) {
    caja.style.background = color;
}

//Conseguir elementos con un ID concreto

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!"; //para asignar un valor
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var contenidoEnTexto = todosLosDivs[2].textContent; //para coger el contenido
console.log(contenidoEnTexto);

var valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#miseccion").append(parrafo);
    }
}

document.querySelector("#miseccion").append(document.createElement("hr"));

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "blue";

var div;
for (div in divsRojos) {
    if (divsRojos[div].className == 'rojo') {
        divsRojos[div].style.background = "red";
    }
}
console.log(divsRojos);

// Query selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);