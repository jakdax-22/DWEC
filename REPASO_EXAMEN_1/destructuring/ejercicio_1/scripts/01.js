'use strict';
window.addEventListener('load',()=>{
    const persona = {
        nombre: 'Juan',
        edad: 30,
        ciudad: 'Madrid'
      };

      const estudiante = {
        nombre2: 'María',
        edad: 25,
        grado: 'Ingeniería',
        universidad: 'Universidad XYZ'
      };

      let {nombre,ciudad} = persona;
      console.log (nombre,ciudad);

      let {nombre2,edad,universidad} = estudiante;
      console.log(nombre2,edad,universidad);
    });