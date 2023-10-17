console.log(Math.PI.toFixed(2));
let array = [];
let coincidencias = [];
for (let i = 0; i < 10000; i++){
    array[i] = Math.floor(Math.random()*(10 -1)+1);
}

for (let numero of array){
    coincidencias [numero]++;
}
for (let i = 1; i < 10; i++){
    document.write ("Número "+i+" : "+coincidencias[i]+"<br>");
}
