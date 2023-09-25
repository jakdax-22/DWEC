// Ejercicio 3
do {
    numero = prompt("Dime un número");
}
while(isNaN(numero));
if (numero >= 0){
    document.write ("<br>El número es positivo");
}
else 
    document.write("<br>El número es negativo");