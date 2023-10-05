'use strict';
let numero = prompt ("Dime un numero");
let reves = "";

for (let i = numero.length - 1; i >= 0; i--){
    reves=(`${reves[i]}${reves}`);
}
if (numero === reves){
    document.write ("Es un número capicúa");
}