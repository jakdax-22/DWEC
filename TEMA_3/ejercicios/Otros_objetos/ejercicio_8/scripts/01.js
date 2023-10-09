let numero = Math.floor(Math.random()*(100));
let pregunta = 0;
let contador = 0;
do {
    pregunta = prompt ("Dime el número");
    if (pregunta == numero || contador > 12){
        contador++;
            if (contador >= 1 && contador <=3){
                document.write("1-3 Suertudo")
            }
            else if (contador >= 4 && contador <=6){
                document.write("4-6 Genio")
            }
            else if (contador == 7){
                document.write("7 No está mal")
            }
            else if (contador == 8){
                document.write("8 Se puede mejorar")
            }
            else if (contador >= 9 && contador <=12){
                document.write("9-12 Que pasa amigo")
            }
    }

    if (pregunta > numero){
        contador++;
        alert ("El número es menor que el introducido");
    }
    if (pregunta < numero){
        contador++;
        alert ("El número es mayor que el introducido");
    }
}
while (contador < 12 && pregunta != numero);

if (contador >= 12){
    document.write("> 12 Eres un paquete")
}
