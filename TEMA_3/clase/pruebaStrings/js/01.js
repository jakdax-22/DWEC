'use strict';
let primera = 1;
let segunda = 2;

let miMensaje = "Estamos en clase de DWEC";

//Concatenar
let nuevoString=`${primera}${segunda} Añade este nuevo mensaje`;
console.log (nuevoString);

//posición de un elemento 
console.log(miMensaje.indexOf("ase"));

//match

//replace
miMensaje.replace("DWEC","DAM");
console.log (miMensaje);

//search

//slice
console.log(miMensaje.slice(3,-3));

//split
let miArray = miMensaje.split(" ");
debugger;

//substr
console.log(miMensaje.substring(3,2));
