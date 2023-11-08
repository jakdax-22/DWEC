'use strict';
window.addEventListener('load',()=>{
  const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Carlos', edad: 35 }
  ];
  const estudiantes = [
    { nombre: 'Ana', calificaciones: { matematicas: 90, historia: 85 } },
    { nombre: 'Pedro', calificaciones: { matematicas: 95, historia: 88 } },
    { nombre: 'Elena', calificaciones: { matematicas: 92, historia: 89 } }
  ];
  const libros = [
    { titulo: 'Libro 1', autor: 'Autor 1' },
    { titulo: 'Libro 2', autor: 'Autor 2' },
    { titulo: 'Libro 3', autor: 'Autor 3' }
  ];
  const empleados = [
    { nombre: 'Alice', cargo: 'Desarrollador' },
    { nombre: 'Bob', cargo: 'Diseñador' },
    { nombre: 'Charlie', cargo: 'Gerente' }
  ];


  let [{nombre:alias}] = personas;
  console.log(alias);

  let [,{calificaciones:notas}] = estudiantes;
  console.log (notas);

  let [,,{titulo:ultimoTitulo,autor:ultimoAutor}] = libros;
  console.log(ultimoTitulo,ultimoAutor);

  let [{nombre:primerNombre},,{cargo:tercerCargo}]=empleados;
  console.log(primerNombre,tercerCargo);


});