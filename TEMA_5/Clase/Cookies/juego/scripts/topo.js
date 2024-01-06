'use strict';

function Topo (madriguera,fila,columna){
    this.tiempoDeVida = Math.random() * (3 - 1.5) + 1.5;
    this.tiempoDeVida = parseFloat(this.tiempoDeVida.toFixed(1));
    this.intervalo = setInterval(()=>{
        if (this.tiempoDeVida <= 0){
            madriguera.numeroDeVidas--;
            this.eliminarTopo(madriguera);
            clearInterval(this.intervalo);
        }
        this.tiempoDeVida-=0.5;
    },500);
    this.fila = fila;
    this.columna = columna;
}
Topo.prototype.eliminarTopo = function (madriguera){
    document.getElementById("c"+ parseInt(madriguera.columnas * this.fila + this.columna)).firstChild.src="./images/topo.png";
    clearInterval(this.intervalo);
}