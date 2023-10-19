array = [];
for (let i = 0; i <= 7 ; i++){
    array [i] = [];
}
for (let i = 0; i < 7; i++){
    if (i === 0){
        for (let j = 0; j < 7; j++){
            array [i] [j] = Math.floor(Math.random()*(9)-1);
            while (array.indexOf(array[i][j]) !== -1){
                array [i] [j] = Math.floor(Math.random()*(9)-1);
            }
        }
    }
    else {
        for (let j = 0; j < 7; j++){
            
        }
    }

}
for (let i = 0; i < array.length; i++){
    for (let j=0; j <= array[i].length;j++){
        document.write(array[i][j]+" ");
    }
    document.write("<br>");
}