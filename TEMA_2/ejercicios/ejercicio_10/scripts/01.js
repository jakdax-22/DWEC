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