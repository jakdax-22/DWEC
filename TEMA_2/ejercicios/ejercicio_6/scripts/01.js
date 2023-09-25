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
