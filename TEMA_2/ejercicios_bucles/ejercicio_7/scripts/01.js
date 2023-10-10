'use strict';
let texto = prompt ("Dime un texto");

if (texto.length % 2 === 0){
    alert (`${texto.substring(0,texto.length / 2)} ${texto.substring(texto.length / 2)}`)
}
else{
    alert (`${texto.substring(0,texto.length / 2 + 1)} ${texto.substring(texto.length / 2 + 1)}`)
}