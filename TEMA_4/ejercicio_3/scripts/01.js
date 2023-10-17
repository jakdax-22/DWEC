let array = [];
let nombre = "";

while (nombre !== "fin"){
    nombre=prompt("Dime un nombre");
    array.push([nombre,nombre.length])
}
array.pop();
for (let i = 0; i < array.length;i++){
    document.write(array[i][0]+" => "+array[i][1]+"<br>");
}