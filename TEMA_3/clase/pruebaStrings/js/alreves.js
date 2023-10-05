'use strict';
let izquierda = document.getElementById("izquierda");
let derecha = document.getElementById("derecha");
let texto = prompt ("Dime el texto a girar");
let intervalo;
document.title = texto;
let funcionIzquierda = function () {
        texto = `${texto.slice(1)}${texto[0]}`;
        document.title = texto;
        clearInterval(intervalo);
        intervalo = setInterval(funcionIzquierda,500);
}
izquierda.addEventListener('click',funcionIzquierda)

let funcionDerecha = function () {
    texto = `${texto[texto.length - 1]}${texto.slice(0,texto.length -1)}`;
    document.title = texto;
    clearInterval(intervalo);
    intervalo = setInterval(funcionDerecha,500);
}

derecha.addEventListener('click',funcionDerecha);

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(intervalo);
})