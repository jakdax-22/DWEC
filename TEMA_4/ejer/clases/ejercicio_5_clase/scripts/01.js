'use strict';
function Loteria () {
    this.boletos = [];
    for (let i = 0; i < 100; i++){
        let existe = true;
        let boleto = null;
        while (existe){
            existe = false;
            boleto = new Boleto();
            for (let j = 0; j < this.boletos.length; j++){
                if (this.boletos[j].equals(boleto)){
                    existe = true;
                }
            }
        }
        this.boletos.push(boleto);
    }
}
function Boleto () {
    this.numeros = [];
    for (let i=0; i < 6; i++){
        let esta = true;
        let num = 0;
        while (esta){
            esta = false;
            num = Math.floor(Math.random()*(50 - 1) +1);
            for (let j = 0; j < this.numeros.length;j++){
                if (this.numeros[j] == num){
                    esta = true;
                }
            }
        }
        this.numeros.push(num);
    }
}
Boleto.prototype.equals = function (boleto2)  {
    let contador = 0;
    for (let i = 0; i < this.numeros.length; i++){
        for (let j = 0; j < boleto2.numeros.length; j++){
            if (this.numeros[i] == boleto2.numeros[j]){
                contador++;
                break;
            }
        }
    }
    const devuelve = (contador == 6) ?  true :  false;
    return devuelve;

}
Boleto.prototype.toString = function (){
    let cadena = "";
    for (let i = 0; i < 6;i++){
        cadena = `${cadena} ${this.numeros[i]}`;
    } 
    cadena+="<br>";
    return cadena;
}
const loteria = new Loteria();
console.log (loteria);
for (let i = 0; i < loteria.boletos.length; i++){
    document.write (`${loteria.boletos[i].toString()}`+"<br>");
}
