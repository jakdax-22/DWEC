'use strict';
let argumento;
do {
    argumento = parseInt(prompt("Dime el número de argumentos que vamos a usar para la escalera"));
}
while (isNaN(argumento));
let espacios = "";

for (let i = 0; i< argumento * 7; i++){
    espacios+="&nbsp";
}
for (let i = 0; i<= argumento; i++){
    espacios = "&nbsp".repeat((argumento - i) * 7 - 5)
    document.write(espacios+"___<br>");
    espacios = "&nbsp".repeat((argumento - i) * 7 - 5);
    document.write(espacios+"|<br>"+espacios+"|<br>");

}