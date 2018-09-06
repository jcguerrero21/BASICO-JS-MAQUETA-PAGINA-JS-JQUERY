'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

console.log(peliculas);
peliculas.sort(); //para ordenarlo por orden alfabético
console.log(peliculas);
peliculas.reverse(); // para darle la vuelta al array
console.log(peliculas);

var cine = [categorias, peliculas];

// console.log(cine[0][1]);

var elemento = "";

do {
    elemento = prompt("Introduce tu película");
    peliculas.push(elemento);
} while (elemento != "ACABAR")

peliculas.pop(); //elimina el ultimo elemento del array
peliculas[0] = undefined;

//Como eliminar un elemento que hemos buscado en un array
var posicionPeli = peliculas.indexOf('La vida es bella');
if (posicionPeli > -1) {
    peliculas.splice(posicionPeli, 1);
}

var peliculas_string = peliculas.join(); //Con esto convertimos le array de peliculas a string separado por ,

console.log(peliculas_string);
console.log(posicionPeli);
console.log(peliculas);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", "); //convierteme esto en un array separado por , 
console.log(cadena_array);