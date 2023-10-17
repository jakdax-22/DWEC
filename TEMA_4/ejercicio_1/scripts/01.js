let coincidencias = [0,0,0,0,0,0,0,0,0,0];
for (let i = 0; i < 10000; i++){
    coincidencias [Math.floor(Math.random()*(10 -1)+1)]++;
}

for (let i = 1; i < 10; i++){
    document.write ("Número "+i+" : "+coincidencias[i]+"<br>");
}
