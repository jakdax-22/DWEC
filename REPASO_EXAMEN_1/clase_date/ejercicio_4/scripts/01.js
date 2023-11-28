window.addEventListener('load',()=>{
  const partidoNBA={
    deporte:"baloncesto",
    liga:"NBA",
    equipos:
    [
      {
        nombre:"Chicago Bulls",
        plantilla:["Michael Jordan","Scottie Pippen","Toni Kukoc","Luc Longley","Steve Kerr","Jason Caffey","Bison Dele","Ron Harper","Dennis Rodman","Randy Brown","Bill Wenningtom","Robert Parish","Dickey Simpkins","Jud Buechler"]
      },
      {
        nombre:"Los Angeles Lakers",
        plantilla:["Magic Jhonson","James Worthy","Abdul-Jabbar","Vlade Divac","Byron Scott","Green","Orlando Woolridge","Michael Thompson","Michael Cooper","Tony Campbell","Mark McNamara","David Rivers"]
      }
    ]
  }
  function Jugador(nombre){
    this.nombre = nombre;
    this.minutosJugados = Math.floor(Math.random()*(41));
    let indiceMultiplicador = Math.floor(this.minutosJugados / 10);
    this.puntos = Math.floor(Math.random()*(11)) * indiceMultiplicador;
    this.rebotes = Math.floor(Math.random()*(7)) * indiceMultiplicador;
    this.recuperaciones = Math.floor(Math.random()*(5)) * indiceMultiplicador;
    this.perdidasBalon = Math.floor(Math.random()*(4)) * indiceMultiplicador;
    this.tirosRealizados = Math.floor(Math.random()*(10)) * indiceMultiplicador;
    this.faltasCometidas = Math.floor(Math.random()*(6));
  }
  Jugador.prototype.getValoracion = function(){
    this.valoracion = (this.puntos+this.rebotes+this.recuperaciones)-(this.perdidasBalon+this.tirosRealizados+this.faltasCometidas);
    return ((this.puntos+this.rebotes+this.recuperaciones)-(this.perdidasBalon+this.tirosRealizados+this.faltasCometidas));
  }
  Jugador.prototype.toString = function (){
    return `${this.nombre} => ${this.getValoracion()}`;
  }
  Jugador.prototype.tengoMejorValoracionQue = function (jugador){
    let devolver = false;
    if (this.getValoracion() > jugador.getValoracion()){
      devolver = true;
    }
    else if (this.getValoracion() < jugador.getValoracion()){
      devolver = false;
    }
    else {
      if (jugador.minutosJugados > this.minutosJugados){
        devolver = true;
      }
      else if (jugador.minutosJugados == this.minutosJugados){
        if (jugador.puntos < this.puntos){
          devolver = true;
        }
      }
    }
    return devolver;
  }
  class Partido {
    constructor (partidouno,partidodos){
      let {equipos:[{plantilla:plantillaBulls}]} = partidouno;
      let {equipos:[,{plantilla:plantillaLakers}]} = partidodos;
      this.listaJugadores = [];
      for (let elemento of plantillaBulls){
        let jugador = new Jugador (elemento);
        this.listaJugadores.push(jugador);
      }
      for (let elemento of plantillaLakers){
        let jugador = new Jugador (elemento);
        this.listaJugadores.push(jugador);
      }
    }
    obtenerArrayOrdenadoJugadores(){
      let auxiliar = null;
      let burbuja = true;
      let arrayOrdenado = [...this.listaJugadores];
      do{
        burbuja = false;
        for (let i = 0; i  < arrayOrdenado.length -1; i++){
          if (arrayOrdenado[i+1].tengoMejorValoracionQue(arrayOrdenado[i])){
            auxiliar = arrayOrdenado[i];
            arrayOrdenado[i] = arrayOrdenado[i+1];
            arrayOrdenado[i+1] = auxiliar;
            burbuja = true;
          }
        }
      }
      while (burbuja);
      return arrayOrdenado;
    }
    obtenerMejorJugador(){
      let arrayOrdenado = this.obtenerArrayOrdenadoJugadores();
      return arrayOrdenado[0];
    }
  }
  const partido = new Partido(partidoNBA,partidoNBA);
  console.log(partido.obtenerArrayOrdenadoJugadores());
});