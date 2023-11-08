'use strict';
window.addEventListener('load',()=>{
  let inicio = new Date();
  let timeout = setInterval(()=>{
    let ahora = new Date();
    if (ahora.getTime() - inicio.getTime() >= 5000){
      console.log("Cancelado");
      clearInterval(timeout);
    }
    console.log("Hola");
  },8000);
});