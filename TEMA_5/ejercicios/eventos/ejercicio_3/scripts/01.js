'use strict';
window.addEventListener('load',()=>{
    let capaScroll=document.getElementById("capa");
    let capaBoton=document.getElementById("boton");
    capa.addEventListener("scroll",(ev)=>{
    //para saber si hemos llegado al final
    //hay que sumar la anchura del elemento
    //a la propiedad scrollTop y ver si redondeando
    //hacia arriva, hemos llegado a scrollHeight
    if(Math.ceil(capaScroll.scrollTop+capaScroll.clientHeight)>=capaScroll.scrollHeight){
    //Ponemos el display de la capa en la que está el botón a block
    capaBoton.style.display="block";
    }
    else{
    capaBoton.style.display="none";
    }
    });
    let cerrar=document.getElementById("cerrar");
    cerrar.addEventListener("click",(ev)=>{
    document.body.removeChild(capaScroll);
})
})

