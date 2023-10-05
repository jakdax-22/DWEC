'use strict';
let numero = 0;
let numero2 = 0;

numero = parseInt(prompt("Dime un número de líneas"));
numero2 = parseInt(prompt("Dime un número de guiones"));
for (let i = 0; i < numero; i++){
    for (let j = 0; j < numero2; j++){
        document.write("<->");
    }
    document.write("<br>");
}


