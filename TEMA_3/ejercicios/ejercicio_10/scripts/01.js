
'use strict';
let texto = prompt ("Dime un texto");
let subtexto = prompt ("Dime la subcadena que quieres buscar");
if (texto.substring(0,subtexto.length) === subtexto);{
    alert ("Coinciden");
}
