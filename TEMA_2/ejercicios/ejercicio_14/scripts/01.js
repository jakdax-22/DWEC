do {
    var numero = prompt("Dime un número");
}
while(isNaN(numero));
let resultado=1;
for (let i = numero; i>1;i--){
    resultado *=i;
}
console.log (resultado);