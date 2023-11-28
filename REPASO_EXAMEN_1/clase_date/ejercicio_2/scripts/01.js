'use strict';
window.addEventListener('load',()=>{
  let cadena = prompt("Dime un texto");
  let inicio = new Date();
  let auxiliar="";
 const intervalo = setInterval(()=>{
    let ahora = new Date();
    let caruno = Math.floor(Math.random()*(cadena.length));
    let cardos = Math.floor(Math.random()*(cadena.length));
    const array = cadena.split("");

    while (caruno == cardos){
      cardos = Math.floor(Math.random()*(cadena.length));
    }
    auxiliar = array[caruno];
    array[caruno] = array[cardos];
    array [cardos] = auxiliar;
    cadena = array.join("");
    document.title = cadena;

    if (ahora.getTime() - inicio.getTime() >= (1000*60*5)){
      console.log("Se acabó");
      clearInterval(intervalo);
    }

  },500);
});