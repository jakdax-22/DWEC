'use strict';
const array = [];
let suma=0;
for (let i = 0; i <= 9; i++ ){
    array [i] = [];
}
for (let i = 0; i < array.length; i++){
    for (let j = 0; j < 10; j++){
        array [i] [j] = Math.floor(Math.random()*(9-1)+1);
        suma += array [i] [j];
    } 
    array[i].push(suma);
    suma = 0;
}

array[array.length] = [];

for (let i = 0; i < array.length; i++){
    for (let j = 0; j < 10; j++){
        suma += array [j] [i]; 
    }
    array [array.length-1].push(suma);
    suma = 0;
}


for (let i = 0; i < 11; i++){
    for (let j = 0; j< 11; j++){
        if (i !== 10){
            document.write (array [i] [j] + "&nbsp&nbsp&nbsp");
        }
        else {
            document.write (array [i] [j] + "&nbsp");
        }
        
    }
    document.write ("<br>");
}

