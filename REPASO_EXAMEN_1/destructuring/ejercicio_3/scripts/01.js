'use strict';
window.addEventListener('load',()=>{
  const datos = {
    nombre: 'Ejemplo',
    edades: [25, 30, 35, 40],
  };
  const usuarios = {
    total: 2,
    lista: [
      { nombre: 'Alice', edad: 28 },
      { nombre: 'Bob', edad: 35 }
    ]
  };
  const datos2 = {
    categoria: 'frutas',
    elementos: ['manzana', 'plátano', 'naranja']
  };
  const informacion = {
    personas: [
      { nombre: 'Juan', habilidades: ['JavaScript', 'HTML', 'CSS'] },
      { nombre: 'María', habilidades: ['Python', 'Java', 'C++'] }
    ]
  };

  let {edades:[primero,...resto]} = datos;
  console.log(primero,resto);

  let {lista:[alice]} = usuarios;
  console.log(alice);

  let {elementos:[primero2,,ultimo]} = datos2
  console.log(primero2,ultimo);

  let {personas:[{habilidades:[primera]},{habilidades:[,,ultima]}]} = informacion;
  console.log(primera,ultima);
});