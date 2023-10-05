'use strict';
let texto = prompt ("Dime un texto");
let solucion = 0;
for (let i = 0; i < texto.length ; i++){
    if (texto[i].toLowerCase() === "a" || texto[i].toLowerCase() === "e" || texto[i].toLowerCase() === "i" || texto[i].toLowerCase() === "o" || texto[i].toLowerCase() === "u" ){
        solucion++;
    }
}
alert (`Hay ${solucion} vocales`);