'use strict';
const array = [];
for (let i = 0; i <= 9; i++ ){
    array [i] = [];
}
array[0] = [0,1,2,3,4,5,6,7,8,9];


for (let i = 1; i <= 9; i++){
    array [i][0] = i;
    for (let j = 1; j <= 9; j++){
        array [i] [j] = array [i] [0] * array [0] [j];
    }
}

for (let i = 0; i <= 9; i++){
    for (let j = 0; j<= 9; j++){
        document.write (array [i] [j] + " ");
    }
    document.write ("<br>");
}