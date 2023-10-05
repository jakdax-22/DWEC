'use strict';
let suma = 0;
for (let i = 9; i <= 45; i++){
    if (i >21 && i < 28){

    }
    else {
        if (i % 3 === 0 || i % 7 === 0){
            suma += i;
        }
    }
}
document.write (suma);