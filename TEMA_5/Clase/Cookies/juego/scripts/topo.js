'use strict';

function Topo (madriguera){
    this.tiempoDeVida = Math.random() * (4 - 2) + 2;
    this.tiempoDeVida = parseFloat(this.tiempoDeVida.toFixed(1));
    const madriguera = madriguera;
}
Topo.prototype.IniciarVida = function (){
    
}
Topo.prototype.matarTopo = function (){
    this.tiempoDeVida = 0;
}