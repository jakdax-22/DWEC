'use strict';
window.addEventListener('load',()=>{
    let tabla = document.createElement("table");
    tabla.id = "tabla";
    tabla.style.border="1px solid red";
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
            document.getElementById("f"+i).appendChild(columnatabla);
            columnatabla.textContent = "Topo";
            columnatabla.style.border = "1px solid red";
        }
    }
    
})