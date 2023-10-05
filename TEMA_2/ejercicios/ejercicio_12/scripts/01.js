'use strict';
let numero=0;
do {
    numero = prompt ("Dime un número");
    if (numero % 2 === 0 && parseInt(numero) !== 0){
        alert ("El número introducido es par");
    }
    if (numero % 2 !== 0){
        alert ("El número introducido es impar");
    }
}
while (parseInt(numero) !== 0)