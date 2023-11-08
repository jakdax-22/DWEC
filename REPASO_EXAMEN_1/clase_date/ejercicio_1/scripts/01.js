'use strict';
window.addEventListener('load',()=>{
  const ahora = new Date();
  const ayer = new Date (2023,11,7,21,5,20);
  console.log(ahora,ayer);  
  ayer.setMonth(9);
  console.log(ayer);  
  ayer.setTime(0);
  console.log(ayer);  
  const mañana = new Date ('2023-11-9UTC21:09:40');
  console.log(mañana);
});