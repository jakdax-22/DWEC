'use strict';
function Madriguera(filas,columnas){
    this.numeroDeVidas = 3;
    this.puntuacion = 0;
    this.tablero = [];
    for (let i = 0; i < filas; i++){
        this.tablero[i] = [];
        for (let j = 0; j < columnas; j++){
            this.tablero[i][j] = "";
        }
    }
}
Madriguera.prototype.IniciarPartida = function (){
    
}