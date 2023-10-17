'use strict';
let opciones = ["piedra","papel","tijeras"];
let resultado = document.getElementById("resultado");
let rival = opciones [Math.floor(Math.random()*3)];
let rivalImagen = document.getElementById('imagenOponente');
let elegida = document.getElementById('imagenElegida');
let piedra = document.getElementById('piedra');
let papel = document.getElementById('papel');
let tijeras = document.getElementById('tijeras');
let mensaje = document.getElementById('mensaje');
let jugar = document.getElementById ('jugar');
let usuario;

piedra.addEventListener('click', ()=> {
    elegida.style.display = "inline-block"
    elegida.src= `./images/${piedra.id}.png`;
    usuario = piedra.id;
})
papel.addEventListener('click', ()=> {
    elegida.style.display = "inline-block"
    elegida.src= `./images/${papel.id}.png`;
    usuario = papel.id;
})
tijeras.addEventListener('click', ()=> {
    elegida.style.display = "inline-block"
    elegida.src= `./images/${tijeras.id}.png`;
    usuario = tijeras.id;
})

jugar.addEventListener('click', () => {
    if (usuario == null){

    }
    else {
        rivalImagen.src=`./images/${rival}.png`
        rivalImagen.style.display="inline-block"
        switch (usuario){
            case "piedra":
                if (rival === "papel"){
                    mensaje.value="Que pena, has perdido";
                    resultado.src="./images/derrota.png";
                }
                else if (rival === "tijeras"){
                    mensaje.value="Felicidades, has ganado";
                    resultado.src="./images/victoria.jpg";
                }
                else {
                    mensaje.value="Has empatado";
                    resultado.src="./images/empate.jpg";
                }
            break;
            case "papel":
                if (rival === "tijeras"){
                    mensaje.value="Que pena, has perdido";
                    resultado.src="./images/derrota.png";
                }
                else if (rival === "piedra"){
                    mensaje.value="Felicidades, has ganado";
                    resultado.src="./images/victoria.jpg";
                }
                else {
                    mensaje.value="Has empatado";
                    resultado.src="./images/empate.jpg";
                }
            break;
            case "tijeras":
                if (rival === "piedra"){
                    mensaje.value="Que pena, has perdido";
                    resultado.src="./images/derrota.png";
                }
                else if (rival === "papel"){
                    mensaje.value="Felicidades, has ganado";
                    resultado.src="./images/victoria.jpg";
                }
                else {
                    mensaje.value="Has empatado";
                    resultado.src="./images/empate.jpg";
                }
            break;
        }
        document.getElementById('mostrar').style.display = "inline-block";
    }
    
})


