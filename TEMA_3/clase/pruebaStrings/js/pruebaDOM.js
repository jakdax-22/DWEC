let entrada = document.getElementById("entrada");
let boton = document.getElementById("boton");
let salida = document.getElementById("salida");

let miFuncion = function(){
    let texto = entrada.value;
    let nuevoTexto= "";

    for(let i = texto.length-1; i >= 0; i--){
        nuevoTexto=`${nuevoTexto}${texto[i]}`;

    }
    salida.textContent=nuevoTexto;
    

}

/*let miFuncion2 = function(){
    let intervalo = setTimeout(miFuncion, 3000);
    clearTimeout(intervalo);
}*/

let miFuncion2 = function(){
    let intervalo = setInterval(miFuncion, 2000);
}

boton.addEventListener("click", miFuncion2);