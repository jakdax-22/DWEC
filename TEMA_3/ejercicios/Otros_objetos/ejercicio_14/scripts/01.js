'use strict';
let usuario = "";
let opciones = ["piedra","papel","tijeras"];
let resultado = document.getElementById("resultado");
while (usuario !== "piedra" && usuario !== "papel" && usuario !== "tijeras" ){
    usuario = prompt("Piedra, papel o tijeras");
}

let rival = opciones [Math.floor(Math.random()*3)];


document.getElementById("tu").src=`./images/${usuario}.png`;
document.getElementById("oponente").src=`./images/${rival}.png`;


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
document.getElementById('tabla').style.display="table";

