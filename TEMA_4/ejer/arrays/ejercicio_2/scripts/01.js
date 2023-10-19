let nombres = [];
let longitudes = [];
let nombre = "";

while (nombre !== "fin"){
    nombre=prompt("Dime un nombre");
    nombres.push(nombre);
    longitudes.push(nombre.length)
}
nombres.pop();
for (let i = 0; i < nombres.length;i++){
    document.write(nombres[i]+" => "+longitudes[i]+"<br>");
}