'use strict';
window.addEventListener('load',()=>{
  const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
      calle: 'Calle Principal 123',
      ciudad: 'Madrid',
      codigoPostal: '28001'
    }
  };
  const estudiante = {
    nombre2: 'María',
    edad: 25,
    universidad: 'Universidad XYZ',
    notas: {
      matematicas: 90,
      historia: 85,
      fisica: 88
    }
  };
  const empleado = {
    nombre: 'Carlos',
    cargo: 'Desarrollador',
    salario: 50000,
    direccion: {
      ciudad: 'Barcelona',
      codigoPostal: '08001'
    }
  };

  let {nombre,direccion:{ciudad,codigoPostal}} = persona;
  console.log(nombre,ciudad,codigoPostal);

  let {nombre2,notas:{matematicas,fisica}} = estudiante;
  console.log(nombre2,matematicas,fisica);

  let {nombre:nombreempleado,salario,direccion:{codigoPostal:codigoPostal2}} = empleado;
  console.log(nombreempleado,salario,codigoPostal2);
});