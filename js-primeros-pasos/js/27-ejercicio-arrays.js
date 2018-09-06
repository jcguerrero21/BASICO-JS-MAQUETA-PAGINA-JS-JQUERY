'use strict'

/**
 * 1. Programa que pida 6 números por pantalla y los metá en un array
 * 2. Mostar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
 * 3. Ordenarlo y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 */


function mostarNumeros(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((numero, indice) => {
        document.write("<strong>" + numero + "</strong></br>")
    })
    document.write("<ul>");
}

var numeros = [];
//Pedir 6 números
for (var i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt("Introduce un número", 0)));
}

//Mostar en el cuerpo de la página
mostarNumeros(numeros);

//Mostrar el array por la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a, b) { return a - b });
console.log(numeros);
mostarNumeros(numeros, 'ORDENADO');

//Invertir y mostrar
numeros.reverse();
mostarNumeros(numeros, 'REVERTIDO');

//Contar elementos
document.write("<h1>El array tiene " + numeros.length + " elementos");

//Busqueda
var busqueda = parseInt(prompt("Busca un número", 0));

var buscado = numeros.findIndex(numero => numero == busqueda);
if (buscado && buscado != -1) {
    document.write("<hr/><h1>ENCONTRADO</h1>");
    documento.write("Posición de la busqueda: " + buscado + "</h1>");
} else {
    document.write("<h1>No lo ha encontrado</h1></hr>");
}