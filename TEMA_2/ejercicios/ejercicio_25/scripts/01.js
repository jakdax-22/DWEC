'use strict';
let argumento;
do {
    argumento = parseInt(prompt("Dime el número de argumentos que vamos a usar para la escalera"));
}
while (isNaN(argumento));
let espacios = "&nbsp&nbsp&nbsp&nbsp&nbsp";
for (let i = 0; i<= argumento; i++){
    document.write("___<br>"+espacios+"|<br>"+espacios+"|<br>"+espacios);
    espacios += "&nbsp&nbsp&nbsp&nbsp&nbsp";
}
