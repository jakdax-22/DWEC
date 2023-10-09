let fecha = new Date();
let semana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
let mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

document.write ("Hoy es "+ semana[fecha.getDay()]+ ", " +fecha.getDate()+ " de "+parseInt(fecha.getMonth() + 1)
+ " de "+ fecha.getFullYear() + " y son las "+fecha.getHours()+":"+fecha.getMinutes()+" horas");