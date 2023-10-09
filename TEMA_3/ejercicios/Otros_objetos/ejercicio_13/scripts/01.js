'use strict';
let usuario = 0;
let eleccion = "";
let imagen = "";
let imagenrival = "";
let resultado = document.getElementById("resultado");
while (usuario < 1 || usuario >5){
    usuario = parseInt(prompt("Dime un número entre el 1 y el 5"));
}
while (eleccion != "pares" && eleccion != "nones"){
    eleccion = prompt("pares o nones");
}

let rival = Math.floor(Math.random()*(5-1) +1);

if (usuario === 3 || usuario === 1)
    imagen=`./images/${usuario}.png`;
else
    imagen=`./images/${usuario}.jpg`;
if (rival === 3 || rival === 1)
    imagenrival=`./images/${rival}.png`;
else 
    imagenrival=`./images/${rival}.jpg`;

document.getElementById("tu").src=`${imagen}`;
document.getElementById("oponente").src=`${imagenrival}`;


if ((usuario + rival) % 2 === 0 && eleccion === "pares"){
    mensaje.value="Felicidades, has ganado";
    resultado.src="./images/victoria.jpg";
}
else if ((usuario + rival) % 2 === 1 && eleccion === "nones"){
    mensaje.value="Felicidades, has ganado";
    resultado.src="./images/victoria.jpg";
}
else {
    mensaje.value="Que pena, has perdido";
    resultado.src="./images/derrota.png";
}
document.getElementById('table').style.display="table";
