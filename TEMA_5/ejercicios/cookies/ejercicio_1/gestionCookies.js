'use strict';
function grabarCookies (nombre,valor,caducidad){
    const ahora = new Date ();
    const fecha = new Date (ahora.getTime + 1000 * 3600 * 24 * caducidad);
    document.cookie=`${nombre}=${valor}; expires=${fecha}`;
}
function leerCookie (nombre){
    const array = document.cookie.split("; ");
    let clave,valor;
    for (elemento of array){
        [clave,valor] = elemento.split("=");
        if (clave == nombre)
            return `${clave}=${valor}`;
    }    
    return false;
}
function borrarCookie (nombre){
    const array = document.cookie.split("; ");
    let clave,valor;
    for (elemento of array){
        [clave,valor] = elemento.split("=");
        if (clave == nombre)
            document.cookie=`${clave}=${valor} ; expires=${new Date(1).toUTCString()}`;
    }    
}

