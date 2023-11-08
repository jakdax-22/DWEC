'use strict';
window.addEventListener('load',()=>{
    class Punto {
        constructor (fila,columna){
            this.x = fila;
            this.y = columna;
        }
    }
    class Laberinto {
        constructor(){
            this.array = [];
            this.puntoActual = new Punto (0,0);
            this.paso = 1;
            this.almacen = [];

            for (let i = 0; i < 10; i++){
                this.array[i] = [];

                for (let j = 0; j < 10; j++){
                    this.array[i][j] = `00`;
                }
            }

            this.array[0][0] = `II`;
            this.array[9][9] = `FF`;

            for (let i = 0; i < 15; i++){
                let fila = Math.floor(Math.random()*(10));
                let columna = Math.floor(Math.random()*(10));

                while (this.array[fila][columna] != "00"){
                     fila = Math.floor(Math.random()*(10));
                     columna = Math.floor(Math.random()*(10));
                }
                this.array[fila][columna] = "**";
            }
        }
        jugar (){
            let intervalo = setInterval(()=>{
                this.comprobar(this.puntoActual.x,this.puntoActual.y);
                if (this.almacen.length == 0){
                    alert ("No has salido del laberinto");
                    clearInterval(intervalo);
                }
                else if (this.almacen.includes("FF")){
                    alert ("Felicidades, has salido");
                    clearInterval(intervalo);
                }
                else {
                    let random = this.almacen[Math.floor(Math.random()*(this.almacen.length))];
                    if (this.paso < 10){
                        this.array[random.x][random.y] = `0${this.paso}`;
                    }
                    else {
                        this.array[random.x][random.y] = this.paso;
                    }
                    this.puntoActual.x = random.x;
                    this.puntoActual.y = random.y;
                    this.paso++;
                    this.mostrar();
                }
            },1000)
        }
        comprobar(x,y){
            this.almacen = [];
            for (let i = x-1; i <= x+1; i++){
                for (let j = y-1; j <= y+1;j++){
                    if (i < 0 || i >=this.array.length || j < 0 || j >= this.array.length){

                    }

                    else if (this.array[i][j] == "00"){
                        let puntoAlmacena = new Punto(i,j);
                        this.almacen.push(puntoAlmacena);
                    }
                    else if (this.array [i][j] == "FF"){
                        this.almacen.push("FF")
                    }
                }
            }
        }
        mostrar (){
            let textarea = document.getElementById('mostrar');
            let texto = "";
            for (let fila in this.array){
                for (let columna in this.array[fila]){
                    texto = `${texto}${this.array[fila][columna]} `;
                }
                texto = `${texto}\n`;
            }
            textarea.textContent=texto;
        }

    }

    const laberinto = new Laberinto ();
    laberinto.jugar();
})