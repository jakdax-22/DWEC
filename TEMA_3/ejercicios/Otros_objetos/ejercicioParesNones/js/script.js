let numeroDedosUsuario;
let eleccion = document.getElementById("pares");
let boton = document.getElementById("jugar");
let ganador = document.getElementById("ganador");


let imagenElegida=document.getElementById("imagenElegida");
let imagenOponente=document.getElementById("imagenOponente");

let textoResultado = document.getElementById("textoResultado");
let imagenResultado = document.getElementById("textoResultado");



document.getElementById("numero-0").addEventListener("click", function(){
    boton.style.display="inline-block";
    imagenElegida.src="img/0.jpg";
    numeroDedosUsuario=0;
})
document.getElementById("numero-1").addEventListener("click", function(){
    boton.style.display="inline-block";
    imagenElegida.src="img/1.jpg";
    numeroDedosUsuario=1;

})
document.getElementById("numero-2").addEventListener("click", function(){
    boton.style.display="inline-block";
    imagenElegida.src="img/2.jpg";
    numeroDedosUsuario=2;

})
document.getElementById("numero-3").addEventListener("click", function(){
    boton.style.display="inline-block";
    imagenElegida.src="img/3.jpg";
    numeroDedosUsuario=3;

})
document.getElementById("numero-4").addEventListener("click", function(){
    boton.style.display="inline-block";
    imagenElegida.src="img/4.jpg";
    numeroDedosUsuario=4;

})
document.getElementById("numero-5").addEventListener("click", function(){
    boton.style.display="inline-block";
    imagenElegida.src="img/5.jpg";
    numeroDedosUsuario=5;


})
boton.addEventListener("click", function(){
    let aleatorio = Math.floor(Math.random()*6);

    imagenOponente.src=`img/${aleatorio}.jpg`;
    if(eleccion.value=="pares"){
        if((aleatorio+numeroDedosUsuario) % 2 !=0){
            textoResultado.textContent="HAS GANADO";
            ganador.textContent="TU";
            imagenResultado.src="img/acierto.png";
        }else{
            textoResultado.textContent="HAS PERDIDO";
            ganador.textContent="MAQUINA";
            imagenResultado.src="img/error.png";
        }
    }

})



