'use strict'

/*
Utilizando un bucle, mostar la suma y la media de los números introducidos hasta introducir un número negativo y ahí mostrar el resultado
*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Introduce números hasta que metas uno negativo', 0));

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero > 0) {
        suma += numero;

        contador++;
    }

    console.log("suma: " + suma);
    console.log("contador: " + contador);
} while (numero >= 0)

alert("La suma de todos los números es: " + suma);
alert("La media de todos lo números es: " + (suma / contador));