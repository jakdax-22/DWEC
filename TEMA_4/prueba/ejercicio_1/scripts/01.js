'use strict';
const ciudad = [];
for (let i = 0; i < 10; i++){
    ciudad[i] = [];
}
for (let i = 0; i < ciudad.length; i++){
    for (let j = 0; j < 10; j++){
        ciudad[i] [j] = 0;
    }
}
const generarHabitante = () => {
    let fila = Math.floor(Math.random () * 10);
    let columna = Math.floor(Math.random () * 10);

    while (!vecinosVacios(fila,columna)){
        fila = Math.floor(Math.random () * 10);
        columna = Math.floor(Math.random () * 10);
    }
    let ahora = new Date ();
    ciudad [fila] [columna] = new Date(ahora.getTime() + Math.floor((Math.random () * (9 - 5) +5)*1000));
};
const vecinosVacios = (x,y) => {
        for (let i = x - 1; i <= x + 1; i++){
            for (let j = y - 1; j <= y + 1; j++){
                if (i>=0 && j >= 0 && i<=9 && j<=9){
                    if (ciudad [i] [j] != 0)
                        return false;
                }
            }
        }
        return true;
}
const comprobarMuerto = () =>{
    let ahora = new Date ();
    for (let i = 0; i < ciudad.length; i++){
        for (let j = 0; j < ciudad[i].length; j++){
            if (ahora.getTime() > ciudad[i] [j]){
                ciudad[i][j] = 0;
            }
        }
    }
}

const mostrarEstado = () => {
    let ahora = new Date ();
    let textarea = document.getElementById('mostrar');
    let contenido = "";

    for (let i = 0; i < ciudad.length; i++){
        for (let j = 0; j < ciudad[i].length; j++){
            if (ciudad [i] [j] == 0){
                contenido+=0;
            }
            else {

                contenido+= Math.round((ciudad[i] [j] - ahora) /1000);
            }
            contenido+=" ";
        }
        contenido+="\n";
    }
    textarea.textContent = contenido;

}

setInterval(generarHabitante,500);
setInterval (comprobarMuerto,500);
setInterval (mostrarEstado,1000);

















/*function Persona (nombre,edad){
    this.nombre = nombre;
    this.edad = edad;

    this.igualEdad = function (persona2){
        if (persona2 instanceof Persona){
            if (this.edad === persona2.edad){
                return true;
            }
            else {
                return false;
            }
        }
    }
}*/




