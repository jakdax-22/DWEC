'use strict';

function Topo (){
    this.tiempoDeVida = Math.random() * (3 - 1.5) + 1.5;
    this.tiempoDeVida = parseFloat(this.tiempoDeVida.toFixed(1));
}
Topo.prototype.IniciarVida = function (madriguera){
    const intervalo = setInterval(()=>{
        if (this.tiempoDeVida <= 0){
            madriguera.numeroDeVidas = madriguera.numeroDeVidas --;
            madriguera.mostrar();
            this.eliminarTopo(intervalo);
        }
        this.tiempoDeVida = this.tiempoDeVida - 0.5;
    },500)
}
Topo.prototype.eliminarTopo = function (intervalo){
    clearInterval(intervalo);
}