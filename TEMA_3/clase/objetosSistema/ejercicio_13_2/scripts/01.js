'use strict';

/*
    let imagenElegida = document.getElementById("imagenElegida");
    let coleccionImagenes = document.getElementByClassName("imagenes");

    for (imagen of coleccionImagenes){
        imagen.addEventListener("click",(ev) => {
            imagenElegida.src=ev.currentTarget.src;
        })
    }
*/
document.getElementById('table').style.display="table";
let usuario = 0
let eleccion = "";
let imagen = "";
let imagenrival = "";
let resultado = document.getElementById("resultado");

let primera = document.getElementById('1');
primera.addEventListener('click', () =>{
    usuario = primera.id;
    document.getElementById('ultimo').style.display="inline-block"
});
let segunda = document.getElementById('2');
segunda.addEventListener('click', () =>{
    usuario = segunda.id;
    document.getElementById('ultimo').style.display="inline-block"
});
let tercera = document.getElementById('3');
tercera.addEventListener('click', () =>{
    usuario = tercera.id;
    document.getElementById('ultimo').style.display="inline-block"
});
let cuarta = document.getElementById('4');
cuarta.addEventListener('click', () =>{
    usuario = cuarta.id;
    document.getElementById('ultimo').style.display="inline-block";
    
});
let quinta = document.getElementById('5');
quinta.addEventListener('click', () =>{
    usuario = quinta.id;
    document.getElementById('ultimo').style.display="inline-block"
});

let pares = document.getElementById('pares');
pares.addEventListener('click', () =>{
    eleccion = "pares";
})
let nones = document.getElementById('nones');
nones.addEventListener('click', () =>{
    eleccion = "nones";
})


document.getElementById('jugar').addEventListener('click', () => {
    document.getElementById('table').style.display="none";
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
    document.getElementById('table2').style.display="table";
})


