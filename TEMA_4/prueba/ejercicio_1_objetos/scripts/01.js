'use strict';
function Ciudad () {
    this.habitantes = [];
    for (let i = 0; i < 10; i++){
        this.habitantes[i] = [];
    }
    for (let i = 0; i < this.habitantes.length; i++){
        for (let j = 0; j < 10; j++){
            this.habitantes[i] [j] = 0;
        }
    }
}
Ciudad.prototype.generarHabitante = function (){
    let fila = Math.floor(Math.random () * 10);
    let columna = Math.floor(Math.random () * 10);

    while (!this.vecinosVacios(fila,columna)){
        fila = Math.floor(Math.random () * 10);
        columna = Math.floor(Math.random () * 10);
    }
    let ahora = new Date ();
    this.habitantes [fila] [columna] = new Date(ahora.getTime() + Math.floor((Math.random () * (9 - 5) +5)*1000));
};
Ciudad.prototype.vecinosVacios = function (x,y) {
        for (let i = x - 1; i <= x + 1; i++){
            for (let j = y - 1; j <= y + 1; j++){
                if (i>=0 && j >= 0 && i<=9 && j<=9){
                    if (this.habitantes [i] [j] != 0)
                        return false;
                }
            }
        }
        return true;
}
Ciudad.prototype.comprobarMuerto = function () {
    let ahora = new Date ();
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            if (ahora.getTime() > this.habitantes[i] [j]){
                this.habitantes[i][j] = 0;
            }
        }
    }
}

Ciudad.prototype.mostrarEstado = function() {
    let ahora = new Date ();
    let textarea = document.getElementById('mostrar');
    let contenido = "";

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            if (this.habitantes [i] [j] == 0){
                contenido+=0;
            }
            else {

                contenido+= Math.round((this.habitantes[i] [j] - ahora) /1000);
            }
            contenido+=" ";
        }
        contenido+="\n";
    }
    textarea.textContent = contenido;

}
Ciudad.prototype.intervalos = function () {
    setInterval(() => this.generarHabitante(),500);
    setInterval (() => this.comprobarMuerto(),500);
    setInterval (() => this.mostrarEstado(),1000);
}

const ciudad = new Ciudad();
ciudad.intervalos();


















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




