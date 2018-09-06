'use strict'

// Tranformación de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso";
var texot2 = "es muy buen curso";

var dato = numero.toString();
dato = texto1.toUpperCase(); //mayúsculas
dato = texot2.toLowerCase(); //minúsculas

console.log(dato);

//Calcular longitud
var nombre = "Juan Carlos Guerrero";

console.log(nombre.length);

//Concatener - Unir textos
// var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texot2);

console.log(textoTotal);

//Busqueda
var busqueda = texto1.indexOf("curso");
var busquedaNoExsite = texto1.indexOf("pepe"); //devolverá -1 puesto que no existe
var busquedaCoindidencias = texto1.match(/curso/g);
var busquedaTrunkada = texto1.substr(14, 5);
var busquedaLetraConcreta = texto1.charAt(20);
var busquedaEncuentraTextoAlInicio = texto1.startsWith("Bienvenido"); //Si al principio empieza por lo indicado nos devolverá true
var busquedaBuscaPalabra = texto1.includes("JavaScript"); //Si existe ese texto en la cadena devolverá true

console.log(busqueda);
console.log(busquedaNoExsite);
console.log(busquedaCoindidencias);
console.log(busquedaTrunkada);
console.log(busquedaLetraConcreta);
console.log(busquedaEncuentraTextoAlInicio);
console.log(busquedaBuscaPalabra);

//Busqueda y reemplazado
var busquedaYreemplazado = texto1.replace("JavaScript", "Angular");
var busquedaYCortado = texto1.slice(14, 22); //recortar string
var busquedaYrecortadoMasArray = texto1.split(" "); //Nos cogerá el texto y por cada espacio no creara un array con cada elemento
var busquedaYQuitadoDeEspacios = texto1.trim();

console.log(busquedaYreemplazado);
console.log(busquedaYCortado);
console.log(busquedaYrecortadoMasArray);