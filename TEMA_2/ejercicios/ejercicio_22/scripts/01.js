//Ejercicio 22
'use strict';
let argumento;
do {
    argumento = parseInt(prompt("Dime el número de argumentos que vamos a usar para la pirámide"));
}
while (argumento % 2 === 0 || isNaN(argumento));
let espacios = "";
for (let i = argumento; i >= 1; i-=2){
    for (let j = 0;j<i;j++){
        document.write("*");
    }
    espacios +=" ";
    document.write("<br>" + espacios);

}
