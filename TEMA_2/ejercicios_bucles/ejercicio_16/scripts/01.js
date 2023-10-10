'use strict';
let texto = prompt ("Dime el título");
document.title = texto;
//let auxiliar = "";
let cambiaTitulo = function (){
    /*auxiliar = texto[texto.length-1];
    texto [texto.length - 1] = texto[0];
    texto [0] = auxiliar;
    document.title = texto;*/
    texto = `${texto.slice(1)}${texto[0]}`;
    document.title = texto;
}
let miFuncion2 = function (){
let intervalo = setInterval (cambiaTitulo, 500);
}
miFuncion2();