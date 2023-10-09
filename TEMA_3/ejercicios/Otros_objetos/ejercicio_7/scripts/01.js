let lineas = Math.floor(Math.random()*(50)+1);
let columnas = 0;
for (let i = 0; i < lineas; i++){
    columnas = Math.floor(Math.random()*(50)+1);
    for (let j = 0 ; j < columnas; j++){
        document.write("&nbsp");
    }
    document.write (columnas+"<br>");
} 