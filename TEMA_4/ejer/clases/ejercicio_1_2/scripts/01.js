'use strict';
function Jugador (){
    this.fuerza = 1;
}
Jugador.prototype.incrementarFuerza = function () {
    this.fuerza++;
}
Jugador.prototype.consultarFuerza = function (){
    console.log ("La fuerza del personaje es de:"+this.fuerza+" p");
}

const jugador = new Jugador ();
jugador.consultarFuerza();
jugador.incrementarFuerza();
jugador.consultarFuerza();