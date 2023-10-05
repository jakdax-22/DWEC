'use strict';
let numero = 0;
do {
    numero = parseInt(prompt("Dime un número"));
    for (let j = 0; j< numero; j++){
        document.write("a");
    }
    document.write("<br>");
}
while (!isNaN(numero));