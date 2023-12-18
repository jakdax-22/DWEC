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
Madriguera.prototype.mostrar = function(){
    document.getElementById("parrafoVidas").textContent= "Vidas: "+this.numeroDeVidas;
    document.getElementById("parrafoPuntuacion").textContent="Puntuación: "+this.puntuacion;
    for (let i = 0; i < this.tablero.length; i++){
        for(let j = 0; j < this.tablero[i].length; j++){
            if (this.tablero[i] [j] instanceof Topo ){
                if (this.tablero [i] [j].tiempoDeVida <= 2)
                    document.getElementById("c"+ parseInt(this.tablero[i].length * i + j)).firstChild.src="./images/topo2.jpg";
                else
                    document.getElementById("c"+ parseInt(this.tablero[i].length * i + j)).firstChild.src="./images/topo.png";
            }    
        }
    }
}
Madriguera.prototype.IniciarPartida = function (){
    const intervalo = setInterval(()=>{
        let posibilidades = Math.floor (Math.random () * (2));
        if (posibilidades == 1){
            const topo = new Topo();
            let i = 0;
            let creado = false;
            while (i < 10 && !creado){
                i++;
                let fila = Math.random () * (this.tablero.length);
                let columna = Math.random () * (this.tablero[fila].length);
                if (this.buscarVecinos(fila,columna)){
                    this.tablero [fila][columna] = new Topo();
                    creado = true;
                }
            }
        }
        else{

        }
        for (let i = 0; i < this.tablero.length; i++){
            for (let j = 0; j < this.tablero[i].length;j++){
                if (tablero[i][j] instanceof Topo){
                    if (tablero[i][j].tiempoDeVida <= 0){
                        let columna = document.getElementById("c"+parseInt(this.tablero[i].length * i + j));
                    }
                }
            }
        }
    },200)
}
Madriguera.prototype.buscarVecinos= function (fila,columna){
    for (let j = fila - 1; j < fila + 2; j++){
        for (let z = columna - 1; z < columna + 2; z++){
            if (j < 0 || j > this.tablero.length - 1 || z < 0 || z > this.tablero.length[j] -1){

            }
            else {
                if (this.tablero[j][z] instanceof Topo)
                    return false;
            }
        }
    }
    return true;
}