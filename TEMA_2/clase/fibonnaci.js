'use strict';

do {
    var numero = prompt("Dime un número");
}
while(isNaN(numero));
const sucesion = [1,1];
for (let i = 2; i < numero; i++){
    sucesion.push(sucesion[i-2] + sucesion [i-1]);
}
for (let i = 0; i < sucesion.length; i++){
    if (i === sucesion.length - 1){
        document.write(sucesion[i]);
    }
    else
    document.write(sucesion[i]+",");
}