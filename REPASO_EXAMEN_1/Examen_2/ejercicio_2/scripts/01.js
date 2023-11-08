'use strict';
window.addEventListener('load',()=>{
    let inicio = new Date();
    let texto = prompt ("Dime el texto a mostrar");
    let intervalo = setInterval(()=>{
        let ahora = new Date ();
        let mostrar = "";
        if (ahora.getMinutes() % 2 == 0){
            texto = `${texto.substring(texto.length -1,texto.length)}${texto.substring(0,texto.length -1)}`;
        }
        else if (ahora.getMinutes() % 2 != 0){
            texto = `${texto.substring(1,texto.length)}${texto.substring(0,1)}`;
        }
        document.title = texto;
        if (ahora.getTime() - inicio.getTime() >= 600000){
            document.title = `Se acabó`;
            clearInterval(intervalo);
        }
    },500);
})