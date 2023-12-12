'use strict';
window.addEventListener('load',()=>{
    let fechahoy = new Date ();

    let milisegundoscincoAnios = 1000 * 60 * 60 * 24 * 365;
    let milisegundosdesdeEpoch = fechahoy.getTime();
    let fechaCincoAños = new Date (milisegundoscincoAnios + milisegundosdesdeEpoch);

    document.getElementById("boton").addEventListener("click", ()=>{
        document.cookie = `usuario=${document.getElementById("nombre").value}; expires="`
    })
})

