'use strict';
let argumento;
do {
    argumento = parseInt(prompt("Dime el número de argumentos que vamos a usar para la pirámide"));
}
while (argumento % 2 === 0 || isNaN(argumento));
let espacios = "";
for (let i = 0; i < argumento / 2; i++){
    espacios+= "&nbsp&nbsp";
}
for (let i = 1; i <=argumento; i+=2){
    document.write(espacios);
    for (let j = 0;j<i;j++){
        document.write("*");
    }
    espacios="&nbsp".repeat(argumento - i);
    document.write("<br>");

}
espacios += "&nbsp".repeat(argumento/2 + 1);
for (let i = argumento-2; i >= 1 - 2;i-=2){
    document.write(espacios);
    for (let j = 0;j<i;j++){
        document.write("*");
    }
    document.write("<br>");
    espacios +="&nbsp&nbsp";
}
