let inicio = new Date().getTime();
let nombre = prompt ("Dime tu nombre");
let apellido1 = prompt ("Dime tu primer apellido");
let apellido2 = prompt ("Dime tu segundo apellido");
let fin = new Date().getTime();

alert ("En introducir "+nombre+" "+apellido1+" "+apellido2+" ha tardado "+((fin - inicio)/1000).toFixed(1)+" segundos");
