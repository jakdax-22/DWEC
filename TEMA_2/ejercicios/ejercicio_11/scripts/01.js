'use strict';
let numero=0;
do {
    numero = prompt ("Dime un número");
    if (numero < 0){
        alert ("El número introducido es negativo");
    }
    if (numero > 0){
        alert ("El número introducido es positivo");
    }
}
while (parseInt(numero) !== 0)