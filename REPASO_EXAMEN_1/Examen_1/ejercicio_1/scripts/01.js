'use strict';
window.addEventListener('load',()=>{
    let titulo = prompt("Dime el título de la página");
    const tiempo = [];
    for (let i = 0; i < titulo.length;i++){
        let random = Math.floor(Math.random() * (16-2) +2) * 1000;
        let ahora = new Date();
        tiempo [i] = ahora.getTime() + random;
    }

    const intervalo = setInterval(()=>{
        comprobar();

        if (tiempo.length == 0){
            document.title = "Se acabó";
            clearInterval(intervalo);
        }
    },1000)

    function comprobar () {
        let i = 0;
        while (i < tiempo.length){
            let ahora = new Date();
            if (tiempo[i] < ahora){
                tiempo.splice(i,1);
                i--;
                mostrar();
            }
            i++;
        }
    }
    function mostrar () {
        let muestra = ""
        for (let i = 0; i < tiempo.length;i++){
            if (tiempo[i] != 0){
                muestra = `${muestra}${titulo[i]}`;
            }
        }
        document.title=muestra;
    }
});