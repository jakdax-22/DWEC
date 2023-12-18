'use strict';
window.addEventListener('load',()=>{
    let tabla = document.createElement("table");
    tabla.id = "tabla";
    tabla.style.backgroundImage="url(./images/hierba.jpg)";
    tabla.style.margin = "50px auto";
    tabla.style.width = "500px";
    tabla.style.height = "500px";
    document.body.appendChild(tabla);
    let accederTabla = document.getElementById("tabla");
    let valores = document.cookie.split("; ");
    let fila=0;
    let columna = 0;
    for (let elemento of valores){
        let [clave,valor] = elemento.split("=");
        if (clave == "filas")
            fila = valor;
        else if (clave == "columnas")
            columna = valor;
    }
    
    for (let i = 0; i < fila ; i++){
        let filatabla = document.createElement("tr");
        filatabla.id="f"+i;
        accederTabla.appendChild(filatabla);
        for (let j = 0; j < columna; j++){
            let columnatabla = document.createElement("td");
            columnatabla.id = "c"+ parseInt(fila * i + j);
            console.log(columnatabla);
            document.getElementById("f"+i).appendChild(columnatabla);
            let imagen = document.createElement("img");
            imagen.src = "./images/topo.png";
            imagen.style.height = "100px";
            imagen.style.cursor = "pointer";
            imagen.style.width = "100px";
            imagen.style.width = "100px";
            columnatabla.appendChild(imagen);
        }
    }
    
})