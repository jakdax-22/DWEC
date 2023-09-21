'use strict';

// Ejercicio 2
do {
    var numero = prompt("Dime un número");
}
while(isNaN(numero));
if (numero > 100){
    document.write ("El número es mayor que 100");
}
else 
    document.write("El número no es mayor que 100");

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

//Ejercicio 5
let edad = prompt ("Dime tu edad");
if (edad > 18)
    alert("Felicidades, eres mayor de edad");

//Ejercicio 6
do {
    numero = prompt("Dime la cantidad de lápices");
}
while(isNaN(numero));
let descuento;
if (numero >= 1000)
    descuento = 0.85;
else 
    descuento = 0.9;
console.log("El precio total es de", numero * descuento);

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

//Ejercicio 10
do {
    var alumnos = prompt("Dime el número de alumnos");
}
while(isNaN(alumnos));
let precio;
if (alumnos >= 100)
    precio = 65;
else if (alumnos >= 50 && alumnos <= 99)
    precio = 70;
else if (alumnos >= 30 && alumnos <= 49)
    precio = 95;
else if (alumnos > 0 && alumnos < 30)
    precio = 4000 / alumnos;
if (precio > 0)
    console.log ("El precio por alumno es de", precio);
else 
    console.log ("No pueden ser menos de 0 alumnos");



