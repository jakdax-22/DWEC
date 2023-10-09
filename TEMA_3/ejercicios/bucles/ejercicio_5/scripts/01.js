'use strict';
let texto = prompt ("Dime un texto");
let solucion = "";
for (let i = 0; i < texto.length ; i++){
    if (texto[i] === " "){

    }
    else{
        solucion=`${solucion}${texto[i]}`;
    }
}
alert (solucion);