//Date

//getTime -> devuelve milisegundos desde el epoch
//getFullYear

const fechaAntes = new Date(0);
console.log (fechaAntes instanceof Date);
console.log (fechaAntes.getDay());
console.log (fechaAntes.getMonth());
console.log (fechaAntes.getMinutes());

const minutos5 = new Date(1000 * 60 * 5);
console.log (minutos5.getMinutes());

const ahora = new Date();
console.log (ahora.getMilliseconds());
let milisegundos = 1000 * 3600 * 24 * 7;

const siguienteSemana = new Date (ahora.getTime() + milisegundos);
console.log (siguienteSemana);

//Math
//Math.random () * (max + 1 - MIN) + MIN
console.log (Math.PI);
console.log (Math.random() * (14 - 3) + 3);

console.log ((Math.random() * (50 - 20) + 20).toFixed(2));
