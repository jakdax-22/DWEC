'use strict';

window.addEventListener('load', ()=> {
    let array = [];
    let aprincipio = document.getElementById('aprincipio');
    let afinal = document.getElementById('afinal');
    let eprincipio = document.getElementById('eprincipio');
    let efinal = document.getElementById('efinal');
    let contenido = document.getElementById('contenido');
    aprincipio.addEventListener('click', ()=>{
        array.unshift(contenido.value);
        mostrarArray(array);
    });
    afinal.addEventListener('click', ()=>{
        array.push(contenido.value);
        mostrarArray(array);
    });
    eprincipio.addEventListener('click', ()=>{
        contenido.value=array.shift();
        mostrarArray (array)
    });
    efinal.addEventListener('click', ()=>{
        contenido.value=array.pop();
        mostrarArray (array)
    });
})

function mostrarArray (array) {
    document.getElementById('resultado').textContent = "";
    for (let i = 0; i < array.length; i++){
        console.log (document.getElementById('resultado'))
        document.getElementById('resultado').textContent += array [i] + " ";
    }
}