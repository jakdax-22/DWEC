let array = [];
let nombre = "";

while (nombre !== "fin"){
    nombre=prompt("Dime un nombre");
    array.push(nombre);
    longitudes.push([nombre,nombre.length])
}
array.pop();
for (let i = 0; i < array.length;i++){
    document.write(array[i][j]+" => "+array[i][j]+"<br>");
}