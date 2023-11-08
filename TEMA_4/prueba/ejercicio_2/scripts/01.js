'use strict';
let texto,numero;
do {
    texto = prompt ("Dime un texto");
}
while (!isNaN(texto));
do {
    numero = prompt ("Dime un numero");
}
while (isNaN(numero));

let titulo = document.getElementById('titulo');
numero = parseInt(Math.round(numero));
texto = texto.split(" ");

for (let i = 0; i < texto.length; i++){
    for(let j = 0; j < numero; j++){
        titulo.textContent = `${titulo.textContent}.`;
    }
    titulo.textContent = `${titulo.textContent} ${texto[i]}`;
}
  
const intervalo = setInterval (() => {
    let contador = 0; 
    if (titulo.textContent.indexOf(".") == -1){
        clearInterval(intervalo);
    }
    for (let i = 0; contador == 0; i++){
        if (titulo.textContent[i] == "."){
            titulo.textContent[i] = "";
            contador ++;
        }
    }
},200);
