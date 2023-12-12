'use strict';
window.addEventListener('load',()=>{
    document.getElementById("form1").addEventListener('submit',(e)=>{
        e.preventDefault();
        let filas = document.getElementById("filas").value;
        let columnas = document.getElementById("columnas").value;
        if (columnas >= 5 && columnas <= 10 && filas >= 5 && filas <= 10 && !isNaN(filas) && !isNaN(columnas)){
            document.cookie = "columnas="+columnas;
            document.cookie = "filas="+filas;
            location.href = "./juego.html";
        }  
    });
});