'use strict';
window.addEventListener('load',()=>{
    const capa = document.getElementById("capa");

    capa.addEventListener("mouseenter",(e)=>{
        e.currentTarget.style.backgroundColor="lightgreen";
    })
    capa.addEventListener("mouseleave",(e)=>{
        e.currentTarget.style.backgroundColor="transparent";
    })
    capa.addEventListener('mousedown',(e)=>{
        e.currentTarget.style.backgroundColor="red";
    })
    capa.addEventListener('mouseup',(e)=>{
        e.currentTarget.style.backgroundColor="lightgreen";
    })
    capa.addEventListener('mousedown',(e)=>{
        if (e.button == 2){
            e.currentTarget.style.backgroundColor="blue";
        }
    })
    capa.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
    })
})

