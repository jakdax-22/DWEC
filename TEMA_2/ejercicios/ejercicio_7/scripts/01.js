//Ejercicio 7
do {
    numero = prompt("Dime el primer número");
}
while(isNaN(numero))
do {
    numero2 = prompt("Dime el segundo número");
}
while(isNaN(numero2))
do {
    var numero3 = prompt("Dime el tercer número");
}
while(isNaN(numero3))
if (numero > numero2 && numero > numero3){
    console.log(numero," es el mayor de los 3");
}
else if (numero2 > numero && numero2 > numero3){
    console.log(numero2," es el mayor de los 3");
}
else
    console.log (numero3, "es el mayor de los 3");