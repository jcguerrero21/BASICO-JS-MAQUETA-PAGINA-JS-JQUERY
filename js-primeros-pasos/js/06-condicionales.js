'use strict'

// Condicional IF
var edad1 = 30;
var edad2 = 12;
var edad = 18;
var nombre = 'Juan Carlos Guerrero';

if (edad1 > edad2) {
    //Ejecuta esto
    console.log("Edad uno es mayor que edad2");
} else {
    console.log("La edad uno es inferior a la edad2")
}

if (edad >= 18) {
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");

    if (edad <= 33) {
        console.log('Todavia eres millenial');
    } else {
        console.log('Ya no eres millenial');
    }

} else {
    //Es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}


//Operadores lógicos

var year = 2018;

//Negación
if (year != 2016) {
    console.log("El año no es 2016 realmente es: " + year);
}

//AND
if (year >= 2000 && year <= 2020 && year != 2018) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}

//OR
if (year == 2008 || year == 2018) {
    console.log("El año acaba en 8");
}