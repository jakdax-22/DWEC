'use strict';
window.addEventListener('load',()=>{
    function Quiniela (numero) {
        this.columnas = [];
        this.plenoAlQuince = new Casilla();
        let columna = null;
        for (let i = 0; i < numero; i++){
            let coincide = true;
            while (coincide){
                columna = new ColumnaQuiniela();
                coincide = false;
                for (let j = 0; j < this.columnas.length; j++){
                    if (this.columnas[j].iguales(columna)){
                        coincide = true;
                    }
                }
            }
            this.columnas.push(columna);
        }
    }
    Quiniela.prototype.mostrar = function () {
        for (let i = 0; i < this.columnas.length; i++){
            document.write(`${this.columnas[i].obtener()}<br>`);
        }
    }

    function Casilla(){
        this.array = [1,"x",2];
        this.valor = this.array[Math.floor(Math.random()*(3))];
    }
    function ColumnaQuiniela(){
        this.columna = [];

        for (let i = 0; i < 14; i++){
            this.columna[i] = new Casilla();
        }
    }
    ColumnaQuiniela.prototype.iguales = function (objeto){
        let contador = 0;
        for (let i = 0; i < this.columna.length; i++){
            if (this.columna[i].valor == objeto.columna[i].valor){
                contador++;
            }
        }
        if (contador == this.columna.length){
            return true;
        }
        return false;
    }
    ColumnaQuiniela.prototype.obtener = function (){
        let devuelve = "";
        for (let i = 0; i < this.columna.length; i++){
            devuelve = `${devuelve} ${this.columna[i].valor}`;
        }
        return devuelve;
    }
    let numero = parseInt(prompt ("Dime un número entre el 1 y el 8"));

    if (numero >= 1 && numero <= 8 ){
        const quiniela = new Quiniela(numero);
        quiniela.mostrar();
    }
})