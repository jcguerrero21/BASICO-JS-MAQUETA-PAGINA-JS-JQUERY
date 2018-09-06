'use strict'

//Prueba con var
var numero = 40;
console.log(numero); //valor 40

if (true) {
    numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con Let
var texto = "JS";
console.log(texto); //valor JS

if (true) {
    let texto = "Angular 7"
    console.log(texto); //valor Angular 7
}

console.log(texto); //valor JS