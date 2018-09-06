'use strict'

//Arrays, Arreglos, Matrices
var nombre = "Juan Carlos";
var nombres = [nombre, "Pepito", "el", "de", "los", "palotes", 52, true];

var lenguajes = new Array("Angular", "React", "Go", "Java", "JavaScript", "Python", "SpringBoot");

/*
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if (elemento >= nombres.length) {
    alert("Introduce el número correcto menor que " + nombres.length);
} else {
    alert("El usuario seleccionado es " + nombres[elemento]);
}

console.log(nombres[2]);
console.log(lenguajes);
*/

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");
/*
for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");
}
*/
/*
lenguajes.forEach((elemento, index, data) => {
    console.log(data); // Coge el array original
    document.write("<li>" + index + "-" + elemento + "</li>");
});
*/
for (let l in lenguajes) {
    document.write("<li>" + lenguajes[l] + "</li>");
}
document.write("</ul>");

//Busquedas
var precios = [10, 20, 50, 80, 12];
var busqueda = lenguajes.find(lenguaje => {
    return lenguaje == "Go";
});

var busquedaIndice = lenguajes.findIndex(lenguaje => {
    return lenguaje == "Go";
});


var busquedaPrecios = precios.some(precio => { //retonara un true o un false en caso de que exista
    return precio >= 20;
});

console.log(busqueda);
console.log(busquedaIndice);
console.log(busquedaPrecios);