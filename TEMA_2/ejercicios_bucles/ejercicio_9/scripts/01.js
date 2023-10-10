'use strict';
let texto = prompt ("Dime un texto");
let auxiliar = ""
let solucion = 0;
for (let i = 0; i < texto.length ; i++){
    if (texto[i].toUpperCase() === texto[i]){
        solucion++;
    }
    if (texto[i] === " "){

    }
    else 
        auxiliar = `${auxiliar}${texto[i]}`;
}
if (solucion === auxiliar.length);{
    alert ("Todos los caracteres son mayúsculas")
}
