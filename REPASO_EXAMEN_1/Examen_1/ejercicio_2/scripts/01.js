'use strict';
window.addEventListener('load',()=>{
    class Playa {
        valorReserva;
        numFilas;
        numColumnas;
        area;

        constructor(){
            this.valorReserva=1;
            this.numFilas=6;
            this.numColumnas=9;
            this.area=[];
            
            for (let i = 0; i < this.numFilas; i++){
                this.area[i] = [];
                for (let j = 0; j < this.numColumnas; j++){
                    this.area[i][j] = 0;
                }
            }
        }
        devolverPlaya(){
            let devolver = "";
            for (let indice in this.area){
                for (let indice2 in this.area[indice]){
                    devolver = `${devolver}${this.area[indice][indice2]} `;
                }
                devolver = `${devolver}\n`
            }
            return devolver;
        }
        comprobarValorReserva(valor){
            let resultado = (valor >=2 && valor <=4)?true:false;
            return resultado;
        }
        reservar(reserva){
            for (let i = 0; i <= this.area.length - reserva;i++){
                for (let j = 0; j <= this.area[i].length - reserva;j++){
                    if (this.posibleReservar(i,j,reserva)){
                        this.realizarReserva(i,j,reserva)
                        return true;
                    }
                }
            }
            return false;
        }
        posibleReservar(x,y,area){
            for (let i = x; i < x + area; i++){
                for (let j = y; j < y + area;j++){
                    if (this.area[i][j] != 0){
                        return false;
                    }
                }
            }
            return true;
        }
        realizarReserva(x,y,area){
            for (let i = x; i < x + area; i++){
                for (let j = y; j < y + area; j++){
                    this.area[i][j] = this.valorReserva;
                }
            }
            this.valorReserva++;
        }
    }
    let reservar = document.getElementById('reservar');
    const playa = new Playa();
    reservar.addEventListener('click',(e) =>{
        e.preventDefault();
        let reserva = parseInt(document.getElementById('reserva').value);
        console.log(reserva);
        console.log(playa);
        if (playa.comprobarValorReserva(reserva)){
            if (playa.reservar(reserva)){
                document.getElementById('resultado').textContent = playa.devolverPlaya();
            }
            else {
                alert ("No hay espacio en la playa");
            }
        }
        else {
            alert("El valor introducido no es válido");
        }
    })


})