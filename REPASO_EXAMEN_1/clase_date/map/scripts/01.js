'use strict';
window.addEventListener('load',()=>{
  const array = [1,4,9,16,25];
  const raices = array.map((elemento)=>{
    return Math.sqrt(elemento);
  });
  const dobles = array.map((elemento) => {
    return elemento * 2;
  })
  console.log(dobles);
  console.log(raices);
});