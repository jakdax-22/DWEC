//Ejercicio 8
do {
    numero = parseInt(prompt("Dime el primer número"));
}
while(isNaN(numero))
do {
    numero2 = parseInt(prompt("Dime el segundo número"));
}
while(isNaN(numero2))
do {
    numero3 = parseInt(prompt("Dime el tercer número"));
}
while(isNaN(numero3))
if (numero3 === numero + numero2){
    console.log("El tercero es la suma de los dos primeros");
}