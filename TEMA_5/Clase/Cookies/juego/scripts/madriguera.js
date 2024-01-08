'use strict';
function Madriguera(filas,columnas){
    this.numeroDeVidas = 3;
    this.puntuacion = 0;
    this.tablero = [];
    this.filas = filas;
    this.intervalo = null;
    this.columnas = columnas;
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
            }    
        }
    }
    let celdas = document.getElementsByTagName("td");
    for (let celda of celdas) {
        celda.parametros = this;
        celda.addEventListener("click", this.manejar);
    }
}
Madriguera.prototype.manejar = function (ev) {
    this.parametros.matarTopo(ev.currentTarget.parentElement.rowIndex, ev.currentTarget.cellIndex);
}
Madriguera.prototype.IniciarPartida = function (){
    this.intervalo = setInterval(()=>{
        let posibilidades = Math.floor (Math.random () * (2));
        if (posibilidades == 1){
            let i = 0;
            let creado = false;
            while (i < 10 && !creado){
                i++;
                let fila = Math.floor(Math.random () * (this.filas));
                let columna = Math.floor(Math.random () * (this.columnas));
                if (this.buscarVecinos(fila,columna)){
                    this.tablero [fila][columna] = new Topo(this,fila,columna);
                    creado = true;
                }
            }
        }
        else{

        }
        /*for (let i = 0; i < this.tablero.length; i++){
            for (let j = 0; j < this.tablero[i].length;j++){
                if (tablero[i][j] instanceof Topo){
                    if (tablero[i][j].tiempoDeVida <= 0){
                        let columna = document.getElementById("c"+parseInt(this.tablero[i].length * i + j));
                    }
                }
            }
        }*/
        this.mostrar();
        if (this.numeroDeVidas == 0){
            let celdas = document.getElementsByTagName("td");
            for (let celda of celdas){
                celda.firstChild.src="./images/topo.png";
            }
            this.pararPartida();
        }
    },500)
}
Madriguera.prototype.pararPartida = function(){
    clearInterval(this.intervalo);
    let celdas = document.getElementsByTagName("td");
    for (let celda of celdas) {
        celda.removeEventListener("click", this.manejar);
    }
    alert ("Has perdido");
}
Madriguera.prototype.matarTopo = function (fila, columna) {
    if (this.tablero[fila][columna] instanceof Topo) {
        this.tablero[fila][columna].eliminarTopo(this);
        this.puntuacion++;
        this.tablero[fila][columna] = '';
        this.mostrar();
    }
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