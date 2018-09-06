'use strict'

window.addEventListener('load', () => {
    var formulario = document.querySelector("#formPeliculas");

    formulario.addEventListener('submit', () => {
        var titulo = document.querySelector('#addpelicula').value;
        if (titulo.length > 0) {
            localStorage.setItem(titulo, titulo);
        }
    });

    var ul = document.querySelector("#peliculas-list")
    for (var i in localStorage) {
        if (typeof localStorage[i] == 'string') {
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

    var formularioBorrrar = document.querySelector("#formBorrarPeliculas");

    formularioBorrrar.addEventListener('submit', () => {
        var titulo = document.querySelector('#borrarPelicula').value;
        if (titulo.length > 0) {
            localStorage.removeItem(titulo);
        }
    });

});