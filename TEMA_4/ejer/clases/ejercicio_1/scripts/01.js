function Persona (nombre,edad){
    this.nombre = nombre;
    this.edad = edad;

    this.igualEdad = function (persona2){
        if (persona2 instanceof Persona){
            if (this.edad === persona2.edad){
                return true;
            }
            else {
                return false;
            }
        }
    }
}
const persona1 = new Persona("pedro",22);
const persona2 = new Persona("pedro",22);

if (persona1.igualEdad(persona2)){
    document.write ("Tienen la misma edad");
}
else {
    document.write ("No son iguales");
}



