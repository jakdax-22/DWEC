let anyo = parseInt(prompt("Dime el año"));
let mes = parseInt(prompt("Dime el mes del año"));
let dia = parseInt(prompt("Dime el dia del mes"));

let fecha = new Date(anyo,mes -1,dia);

let fecha2 = new Date(fecha);
let fecha3 = new Date(fecha);
let fecha4 = new Date(fecha);

fecha2.setDate(fecha.getDate() + 30);
fecha3.setDate(fecha.getDate() + 60);
fecha4.setDate(fecha.getDate() + 90);
document.write (fecha2.toDateString()+"<br>"+fecha3.toDateString()+"<br>"+fecha4.toDateString()+"<br>");