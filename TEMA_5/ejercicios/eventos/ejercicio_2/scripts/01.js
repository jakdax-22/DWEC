'use strict';
window.addEventListener('load',()=>{
    let velocidad = document.getElementById("velocity");

    document.addEventListener("keydown",(e)=>{
        if (e.key == "ArrowDown" && parseInt(velocidad.textContent) >0){
            velocidad.textContent = parseInt(velocidad.textContent) -1;
        }
    })
    document.addEventListener("keydown",(e)=>{
        if (e.key == "ArrowUp" && parseInt(velocidad.textContent) <120){
            velocidad.textContent = parseInt(velocidad.textContent)+1;
        }
    })
})

