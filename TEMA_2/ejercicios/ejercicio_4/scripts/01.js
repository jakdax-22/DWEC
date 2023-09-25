//Ejercicio 4
do {
    numero = prompt("Dime el primer número");
}
while (isNaN(numero))
do {
    var numero2 = prompt("Dime el segundo número");
}
while (isNaN(numero2));

if (numero > numero2) {
    console.log(numero ," es mayor que " ,numero2)
}
else
    console.log(numero2 ," es mayor que " ,numero)