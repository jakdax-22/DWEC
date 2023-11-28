'use strict';

window.addEventListener("load",()=>{
    const miEvento = new Event ("click");
    const listaInputs = document.getElementsByTagName("input");
    function comprobarInputs (){
        for (let input of listaInputs){
            if (!input.checked)
                return false;
        }
        return true;
    }
   document.getElementById('enlace').addEventListener("click",()=>{
        location.href="https://marca.com";
    })
    for (let input of listaInputs){
        input.addEventListener("click",()=>{
            if (comprobarInputs()){
                document.getElementById("enlace").style.display="inline-block";
                document.getElementById("enlace").dispatchEvent(miEvento);
            }
        })
    }
})
