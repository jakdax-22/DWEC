'use strict';
let numero = 0;

numero = parseInt(prompt("Dime un número"));
for (let i = 0; i < numero; i++){
    for (let j = 0; j < 30; j++){
        document.write("<->");
    }
    document.write("<br>");
}

document.write("<br>");

