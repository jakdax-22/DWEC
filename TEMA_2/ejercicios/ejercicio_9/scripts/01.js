//Ejercicio 9
do {
    numero = parseInt(prompt("Dime el primer número"));
}
while(isNaN(numero));
do {
    numero2 = parseInt(prompt("Dime el segundo número"));
}
while(isNaN(numero2));
do {
    numero3 = parseInt(prompt("Dime el tercer número"));
}
while(isNaN(numero3));
if (numero === numero3 + numero2){
    console.log("El primero es la suma de los dos últimos");
}