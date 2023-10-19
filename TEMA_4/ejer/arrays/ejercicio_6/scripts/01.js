array = [];
while (array.length !== 7){
    let aleatorio = Math.floor (Math.random()*(9)+1);
    if (array.indexOf(aleatorio) === -1){
        array.push(aleatorio);
    }
}
for (let i = 0; i < array.length; i++){
    document.write(array[i]+" ")
}