'use strict';
function Persona (edad){
    this.edad = edad;
}
Persona.prototype.getEdad = function () {
    return this.edad;
}
Persona.prototype.setEdad = function (edad) {
    this.edad = edad;
}
let total = 0;
let rango1 = 0;
let rango2 = 0;
let rango3 = 0; 
const arrayPersonas = [];
numeroPersonas (arrayPersonas);

arrayPersonas.map(persona => {
    if (persona.getEdad() >= 5 && persona.getEdad() <= 10){
        rango1++;
        total += 2;
    }
    else if (persona.getEdad() >= 11 && persona.getEdad() <= 17){
        rango2++;
        total += 4;
    }
    else if (persona.getEdad() >= 18){
        rango3++;
        total += 6;
    }
});

document.write ("La cantidad total recaudada es de: "+total+"<br>");
document.write ("El número total de personas que asistieron es de: "+arrayPersonas.length+"<br>");
document.write ("La cantidad de personas que asistieron entre 5 y 10 años es de :"+rango1+"<br>");
document.write ("La cantidad de personas que asistieron entre 11 y 17 años es de :"+rango2+"<br>");
document.write ("La cantidad de personas que asistieron mayores de 18 es de :"+rango3+"<br>");

function numeroPersonas(array) {
    for (let i = 0; i < Math.random() * (51 - 1) +1 ; i++){
        array [i] = new Persona (edadPersonas());
    }
}
function edadPersonas() {
    return Math.random() * (61 - 1) + 1;
}



