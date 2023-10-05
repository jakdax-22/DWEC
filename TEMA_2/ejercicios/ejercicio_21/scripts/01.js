'use strict';
let base,exponente,resultado = 0;

base = parseInt(prompt("Dime la base"));
exponente = parseInt(prompt("Dime el exponente"));

for (let i = 0; i < exponente; i++){
    if (i === 0)
        resultado = base;
    else
        resultado *= base; 
}
document.write(resultado);


