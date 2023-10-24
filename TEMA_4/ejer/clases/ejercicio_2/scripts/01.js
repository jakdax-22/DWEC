'use strict';
function Punto (x,y){
    if (isNaN(x)){
        this.x = 0;
    }
    else {
        this.x = x;
    }
    if (isNaN(y)){
        this.y = 0;
    }
    else {
        this.y = y;
    }
}
Punto.prototype.cambiar = function (x,y) {
    if (isNaN(x)){
        this.x = 0;
    }
    else {
        this.x = x;
    }
    if (isNaN(y)){
        this.y = 0;
    }
    else {
        this.y = y;
    } 
}
Punto.prototype.copia = function (){
    return new Punto(this.x,this.y);
}
Punto.prototype.iguales = function (punto2) {
    if (this.x === punto2.x && this.y === punto2.y){
        console.log("Ambos puntos son iguales");
    }
    else {
        console.log ("Los puntos no son iguales");
    }
}
Punto.prototype.suma = function (punto2) {
    if (punto2 instanceof Punto){
        return new Punto(this.x + punto2.x,this.y + punto2.y);
    }
    else {
        return new Punto(this.x,this.y);
    }
}
Punto.prototype.toString = function () {
    return `(${this.x},${this.y})`;
}

const punto = new Punto (3,"g");
console.log(punto.toString());
punto.cambiar(5,5);
console.log(punto.toString());
const punto2 = punto.copia();
console.log(punto2.toString());
punto.iguales(punto2);
punto.cambiar(5,7);
punto.iguales(punto2);
const punto3 = punto.suma(punto2);
console.log(punto3.toString());
const punto4 = punto.suma(45);
console.log(punto4.toString());



