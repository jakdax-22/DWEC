'use strict';
let texto = prompt ("Dime un texto");

for (let i = texto.length - 1; i >= 0; i--){
    document.write(`${texto[i]}`);
}