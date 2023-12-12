function cyberReindeer(road, time) {
  // Code here
  const arrayDevolver = [];
  const arrayPosiciones = road.split("");
  let contador = 0;
  let limite = time - 5;
  let cambio = false;

  arrayDevolver.push(arrayPosiciones.join(""));
  time--;
  while (time > 0){
    if (time == limite){
      for (let elemento in arrayPosiciones){
        if (arrayPosiciones[elemento] == "|")
          arrayPosiciones[elemento] = "*";
      }
    }
    if (arrayPosiciones[contador] === "S") {
      if (cambio){
        cambio = false;
        arrayPosiciones[contador] = "*";
        arrayPosiciones[contador + 1] = "S";
        contador++;

      }
      else if (contador < arrayPosiciones.length - 1 && arrayPosiciones[contador + 1] === ".") {
        arrayPosiciones[contador] = ".";
        arrayPosiciones[contador + 1] = "S";
        contador++;
      }
      else if (contador < arrayPosiciones.length - 1 && arrayPosiciones[contador + 1] === "*"){
        arrayPosiciones[contador] = ".";
        arrayPosiciones[contador + 1] = "S";
        cambio = true;
        contador++;
      }
    } 
    arrayDevolver.push(arrayPosiciones.join(""));
    time--;
  }
  return arrayDevolver;
}
const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);