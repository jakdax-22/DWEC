'use strict';
let numero = 0;
let i = 0;
do {
    numero = prompt ("Dime un número");
    if (parseInt(numero) < 0){
        i++;
    }
    
}
while (parseInt(numero) < 0);
alert ("Has introducido "+i+" números");