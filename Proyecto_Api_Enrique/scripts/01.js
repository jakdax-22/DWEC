window.addEventListener('load',() =>{
    console.log(document.cookie);
    /*Función para hacer la consulta a la API y obtener los datos de las cartas de cada expansión*/
    const listadoExpansion = async (expansion) =>{
        const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${expansion}?collectible=1&locale=esES`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a1c65baefdmsha5fe76334729909p147d7cjsnc4e4efdab8f0',
                'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
        };

        try {
            while (main.childNodes.length > 2){
                //console.log("Hola");
                main.removeChild(main.lastChild);
            }
            const response = await fetch(url, options);
            const result = await response.json();
            /* Descartado porque se hacía pesado
            const gifparrafo = document.createElement("div");
            gifparrafo.className = "gif";
            const gifimagen = document.createElement("img");
            gifimagen.src="../img/logo.gif";
            gifimagen.alt="Spinner Logo";
            gifparrafo.appendChild(gifimagen)
            main.append(gifparrafo);*/
            return result;
        } 
        catch (error) {
            console.error(error);
        }
    }
    //Función para sacar un valor de una cookie
    function sacarValorCookie (claveCookie) {
        let cookies = document.cookie.split(";");
        for (let cookie of cookies){
            let [clave,valor] = cookie.split("=");
            if (clave == claveCookie)
                return valor;
        }
        return false;
    }
    //Función para sacar los datos de una carta en concreto
    const datosCarta = async (id) =>{
        const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${id}?collectible=1&locale=esES`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a1c65baefdmsha5fe76334729909p147d7cjsnc4e4efdab8f0',
                'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result;
        } 
        catch (error) {
            console.error(error);
        }
    }
    //Función para ver si el id de una carta está metido en las cookies
    function buscarIdCookie (id){
        const cookies = document.cookie.split(";");
        for (let cookie of cookies){
            let [clave,valores] = cookie.split("=");
            if (clave == " mazo"){
                let valor = valores.split(",");
                for (let val of valor){
                    if (val == id)
                    return true;
                }
            }
        }
        return false;
    }
    //Función para buscar si existe la cookie de mazo
    function buscarMazo (){
        const cookies = document.cookie.split(";");
        for (let cookie of cookies){
            let [clave,valor] = cookie.split("=");
            if (clave == " mazo")
                return valor;
        }
        return false;
    }
    //Función para borrar id de las cookies
    function borrarIdCookie (id){
        const cookies = document.cookie.split(";");
        for (let cookie of cookies){
            let [clave,valor] = cookie.split("=");
            if (clave == " mazo"){
                let arrayvalores = valor.split(",");
                const arrayfiltrado = arrayvalores.filter((val)=>{
                    return val != id;
                });
                const arrayfiltradostring = arrayfiltrado.join(",");
                document.cookie = "mazo="+arrayfiltradostring;
            }
                
        }
        return false;
    }
    //Función para mostrar los datos de una carta cuando se selecciona
    function mostrarCarta(id){
        //Compruebo que se pasa bien el id
        //console.log(id);
        //Lo primero me cargo lo último que tenía el main para quitar todo el listado de cartas
        main.removeChild(main.lastChild);
        //Creo un div que contendrá todo el contenido
        const contenedorInfoCarta = document.createElement("div");
        //Le doy su clase con sus estilos
        contenedorInfoCarta.className = "contenedorInfoCarta";
        //Llamo a la función para sacar los datos que me interesan
        datosCarta(id).then((infoCarta) =>{
            //Compruebo que devuelve bien los valores
            console.log(infoCarta);  
            //Creo el título con el nombre de la carta
            const tituloInfoCarta = document.createElement("h2");
            tituloInfoCarta.className = "tituloInfoCarta";
            tituloInfoCarta.textContent = infoCarta[0].name;
            //Hecho esto lo incluyo en el contenedor
            contenedorInfoCarta.appendChild(tituloInfoCarta);
            //Creo la foto de la carta y la introduzco en el contenedor
            const imagenInfoCarta = document.createElement("img");
            imagenInfoCarta.className = "imagenInfoCarta";
            imagenInfoCarta.src=infoCarta[0].img;
            //No olvidemos la accesibilidad
            imagenInfoCarta.alt = infoCarta[0].name
            contenedorInfoCarta.appendChild(imagenInfoCarta);
            //Por último la descripción de la carta, esto es un poco más complejo porque se manejan más datos
            const divInfoCarta = document.createElement("div");
            divInfoCarta.className = "divInfoCarta";
            //Creamos a sus hijos
            const p1InfoCarta = document.createElement("p");
            const p2InfoCarta = document.createElement("p");
            const p3InfoCarta = document.createElement("p");
            const p4InfoCarta = document.createElement("p");
            const p5InfoCarta = document.createElement("p");
            const p6InfoCarta = document.createElement("p");

            const s1InfoCarta = document.createElement("span");
            const s2InfoCarta = document.createElement("span");
            const s3InfoCarta = document.createElement("span");
            const s4InfoCarta = document.createElement("span");
            const s5InfoCarta = document.createElement("span");
            const s6InfoCarta = document.createElement("span");

            s1InfoCarta.textContent = "Set de Cartas: ";
            p1InfoCarta.textContent = infoCarta[0].cardSet;
            s2InfoCarta.textContent = "Tipo de Carta: ";
            p2InfoCarta.textContent = infoCarta[0].type;
            s5InfoCarta.textContent = "Clase: ";
            p5InfoCarta.textContent = infoCarta[0].playerClass;
            s6InfoCarta.textContent = "Frase graciosa: ";
            p6InfoCarta.textContent = infoCarta[0].flavor;

            if (infoCarta[0].type == "Minion"){
                s3InfoCarta.textContent = "Ataque: ";
                p3InfoCarta.textContent = infoCarta[0].attack;
                s4InfoCarta.textContent = "Vida: ";
                p4InfoCarta.textContent = infoCarta[0].health;
            }
            else if (infoCarta[0].type == "Spell"){
                s3InfoCarta.textContent = "Coste: ";
                p3InfoCarta.textContent = infoCarta[0].cost;
                s4InfoCarta.textContent = "Escuela: ";
                p4InfoCarta.textContent = infoCarta[0].spellSchool;
            }
            const div1 = document.createElement ("div");
            const div2 = document.createElement ("div");
            const div3 = document.createElement ("div");
            const div4 = document.createElement ("div");
            const div5 = document.createElement ("div");
            const div6 = document.createElement ("div");
            const div7 = document.createElement ("div");

            div1.appendChild(s1InfoCarta);
            div1.appendChild(p1InfoCarta);
            divInfoCarta.appendChild(div1);
            div2.appendChild(s2InfoCarta);
            div2.appendChild(p2InfoCarta);
            divInfoCarta.appendChild(div2);
            div3.appendChild(s3InfoCarta);
            div3.appendChild(p3InfoCarta);
            divInfoCarta.appendChild(div3);
            div4.appendChild(s4InfoCarta);
            div4.appendChild(p4InfoCarta);
            divInfoCarta.appendChild(div4);
            div5.appendChild(s5InfoCarta);
            div5.appendChild(p5InfoCarta);
            divInfoCarta.appendChild(div5);
            div6.appendChild(s6InfoCarta);
            div6.appendChild(p6InfoCarta);
            divInfoCarta.appendChild(div6);

            //Creación y mantenimiento del input type check
            div7.className = "check";
            const s7 = document.createElement("span");
            s7.textContent = "Marcar como favorito";
            const labelswitch = document.createElement("label");
            labelswitch.className="switch";
            const inputCheck = document.createElement("input");
            inputCheck.type="checkbox";
            //Si su id no está en las cookies no está checked el input y al pulsarle se guarda en las cookies
            if (buscarIdCookie(infoCarta[0].cardId) == false){
                inputCheck.addEventListener('click',()=>{
                    //si la cookie no está creada la creo con el valor
                    let buscarM = buscarMazo();
                    if (!buscarM){
                        console.log("no encuentra");
                        document.cookie = "mazo="+infoCarta[0].cardId+",";
                        console.log(document.cookie);
                    }
                    //Si no saco todos los ids, concateno el nuevo y lo vuelvo a guardar
                    else{
                        buscarM+=infoCarta[0].cardId;
                        document.cookie = "mazo="+buscarM+",";
                        console.log(document.cookie);
                    }
                });
            }
            else {
                inputCheck.checked = "true";
                inputCheck.addEventListener('click',()=>{
                    borrarIdCookie(infoCarta[0].cardId);
                    console.log(document.cookie);
                });
            }
            const slider = document.createElement("span");
            slider.className = "slider";
            div7.appendChild(s7);
            labelswitch.appendChild(inputCheck);
            labelswitch.appendChild(slider);
            div7.appendChild(s7);
            div7.appendChild(labelswitch)
            divInfoCarta.appendChild(div7);

            divInfoCarta.className = "divInfoCarta";
            contenedorInfoCarta.appendChild(divInfoCarta);
            main.appendChild(contenedorInfoCarta);


        })
    }
    //Funcion para el despliegue de las cartas en pantalla
    function despliegueCartas (resultado,pagina,numcartas){
                //Esto simplemente es por si se ha pulsado una imagen del inicio, para dar una pantalla de carga, si se da a pasar de página me la cargo
                //Me cargo el último hijo de main para que no se me acumule, en este caso es la pantalla de carga
                //main.removeChild(main.lastChild);
                //Creo el div del contenedor

                while (main.childNodes.length > 2){
                    //console.log("Hola");
                    main.removeChild(main.lastChild);
                }
                const contenedorgaleria = document.createElement("div");
                //Creo el div de la galeria
                const galeriacartas = document.createElement("div");
                //Compruebo resultado
                //console.log(resultado);
                //Le doy a la galería su clase de estilos
                galeriacartas.className = "resultado-cartas";
                //Cojo el valor de la cookie ncartas, para saber cuantas voy a mostrar
                let ncartas = sacarValorCookie("ncartas");
                //Itero cada carta y muestro de 24 en 24 según el botón pulsado
                //PD: Me he tirado 3 horas con errores por no hacerle un parseInt a ncartas, por lo que me concatenaba
                //En vez de sumar y me daba que resultado[i].img no estaba definido :(((
                    console.log(resultado);
                for(let i = numcartas * pagina; i < parseInt(ncartas) + (numcartas * pagina) && i < resultado.length ;i++){
                    //Depuración
                    /*console.log(ncartas + (24 * pagina));
                    console.log(i);*/
                    //Creo una imagen
                    let foto = document.createElement("img");
                    //Le doy la propiedad src
                    foto.src=resultado[i].img;
                    //Lo mismo pero con alt
                    foto.alt=resultado[i].name;
                    //Le doy su clase ya hecha en CSS
                    foto.className="carta";
                    //Le meto un listener con una funcion
                    foto.addEventListener('click',()=>{
                        mostrarCarta(resultado[i].cardId);
                    });
                    //La meto en galeriacartas
                    galeriacartas.appendChild(foto);
                }
                //Este div simplemente va a ser el que tenga los numeritos de cambio de página
                let contenedorfootergaleria = document.createElement("div");
                let footergaleria = document.createElement ("div");
                //Pongo el contador a 1, porque si empiezo por 0 queda un poco feo
                let contador = 1;
                //Más depuración
                //console.log(resultado.length);
                while (resultado.length > parseInt(ncartas) * (contador - 1)){
                    //Creo un span
                    let spanfootergaleria = document.createElement("span");
                    //Le doy el valor de contador
                    spanfootergaleria.textContent+= contador;
                    //Sus estilos propios
                    spanfootergaleria.className="spanfootergaleria";
                    //Lo introduzco al final de footergalería
                    footergaleria.appendChild(spanfootergaleria);
                    //Y por último le pongo un listener para que vuelva a llamar a esta función, pero con el campo cargando en false
                    spanfootergaleria.addEventListener('click',()=>{
                        let numeroCartas = sacarValorCookie("ncartas");
                        despliegueCartas(resultado,spanfootergaleria.textContent - 1,parseInt(numeroCartas));
                    });
                    contador++;
                }
                //Dejo contador a 0 (yo que sé, son manías por si lo uso luego)
                contador = 0;
                //Le doy su clase con estilos a footergalería
                footergaleria.className="footergaleria";
                let divselectgaleria = document.createElement("div");
                let spandivselectgaleria = document.createElement("span");
                spandivselectgaleria.textContent = "Número de cartas por página: ";
                divselectgaleria.appendChild(spandivselectgaleria);
                let selectgaleria = document.createElement("select");
                let option1 = document.createElement("option");
                option1.textContent = 18;
                let option2 = document.createElement("option");
                option2.textContent = 24;
                let option3 = document.createElement("option");
                option3.textContent = 30;
                let option4 = document.createElement("option");
                option4.textContent = 33;
                let option5 = document.createElement("option");
                option5.textContent = 36;

                switch(parseInt(sacarValorCookie("ncartas"))){
                    case 18:
                        option1.selected = true
                    break;
                    case 24:
                        option2.selected = true
                    break;
                    case 30:
                        option3.selected = true
                    break;
                    case 33:
                        option4.selected = true
                    break;
                    case 36:
                        option5.selected = true
                    break;
                }
                selectgaleria.appendChild(option1);
                selectgaleria.appendChild(option2);
                selectgaleria.appendChild(option3);
                selectgaleria.appendChild(option4);
                selectgaleria.appendChild(option5);
                divselectgaleria.appendChild(selectgaleria);
                contenedorfootergaleria.appendChild(footergaleria);
                divselectgaleria.className="divselectgaleria";
                contenedorfootergaleria.appendChild(divselectgaleria);
                contenedorfootergaleria.className="contenedorfootergaleria";
                //Introduzco galeriacartas en contenedorgaleria
                contenedorgaleria.appendChild(galeriacartas);
                //Lo mismo pero con footergaleria
                contenedorgaleria.appendChild(contenedorfootergaleria);
                //Le doy estilos a contenedorgaleria
                contenedorgaleria.className="contenedorgaleria";
                //Lo introduzco en el main
                main.append(contenedorgaleria);
                //Siempre me carga esto antes del resto de cosas y por eso no me detecta nada, preguntarle a sergio
                document.querySelector("select").addEventListener('change',(ev)=>{
                    document.cookie = "ncartas="+ev.target.value;
                    let numeroCartas = parseInt(sacarValorCookie("ncartas"));
                    despliegueCartas(resultado,pagina,numeroCartas);
                });
    }
    //Voy a ponerle un escuchador a la foto de arriba izquierda para recargar la página
    document.querySelector(".logo").addEventListener('click',()=>{
        while(main.childNodes.length > 2){
            main.removeChild(main.lastChild);
        }
    });
    //Funcion para sacar un array con todos los ids de las cookies
    function generarArrayMazo (){
        const cookies = document.cookie.split(";");
        for (let cookie of cookies){
            let [clave,valor] = cookie.split("=");
            if (clave == " mazo")
                return valor.split(",");
        }
    }
    //Función para hacer el fetch de cada carta y meterlo en la galeria
    const generarDisposicionFavoritos = async (ids,galeria) => {
            //console.log(main.childNodes.length);
            while (main.childNodes.length > 2){
                //console.log("Hola");
                main.removeChild(main.lastChild);
            }
            //Voy a poner un cargando porque va para largo
            const gifparrafo = document.createElement("div");
            gifparrafo.className = "gif";
            const gifimagen = document.createElement("img");
            gifimagen.src="../img/logo.gif";
            gifimagen.alt="Spinner Logo";
            gifparrafo.appendChild(gifimagen)
            main.appendChild(gifparrafo);
        for (let id of ids){
            //Creo cada imagen
            const foto = document.createElement("img");
            foto.className = "carta";
            //Hago una petición por cada id, tengo que mirar si puedo mejorarlo
            const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${id}?locale=esES`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'a1c65baefdmsha5fe76334729909p147d7cjsnc4e4efdab8f0',
                    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
                }
            };

            try {
                //Espero el fetch y meto los valores devueltos a la foto y la meto en la galería
                const response = await fetch(url, options);
                const result =  await response.json();
                foto.addEventListener('click',()=>{
                    mostrarCarta(result[0].cardId);
                });
                foto.src = result[0].img;
                foto.alt = result[0].name;
                galeria.appendChild(foto);
            } catch (error) {
                //Si no funciona veo el error que ha dado
                console.error(error);
            }
        }
    }
    function finalizarJuego (divJuego){
        //Limpiando...
        while(divJuego.childNodes.length > 2)
        divJuego.removeChild(divJuego.lastChild);
        //Un buen memazo
        const meme = document.createElement("img");
        meme.src = "../img/oscar.png";
        meme.alt="perromeme";
        meme.className = "meme";
        divJuego.appendChild(meme);
        //saco el record de las cookies
        let record = parseInt(sacarValorCookie(" record"));
        //Me cargo el record para volver a usarlo si vuelve el usuario 
        document.cookie = "record=0";
        //creo un div donde va a ir la puntuación junto con una pequeña tabla de resultados
        const resultadoJuego = document.createElement("p");
        resultadoJuego.textContent = "Puntuación: "+record;
        resultadoJuego.className = "resultadoJuego";
        divJuego.appendChild(resultadoJuego);
        const mensajeJuego = document.createElement("p");
        mensajeJuego.className = "mensajeJuego";
        //Distintas puntuaciones
        if (record > 33){
            mensajeJuego.textContent = "¡Leroooooy Jenkinnnssss!"
        }
        else if (record < 33 && record > 25){
            mensajeJuego.textContent = "Eres un fuera de serie"
        }
        else if (record < 25 && record > 15){
            mensajeJuego.textContent = "Sabes que te está mirando a ti ¿no?"
        }
        else if (record < 15 && record > 5){
            mensajeJuego.textContent = "Bueno... supongo que no está mal"
        }
        else if (record < 5 && record >= 0){
            mensajeJuego.textContent = "Por tu bien dedícate al parchís";
        }
        divJuego.appendChild(mensajeJuego);
        //Boton para volver a jugar
        const botonJuego = document.createElement("button");
        botonJuego.className = "botonJuego";
        botonJuego.textContent = "Volver a jugar";
        botonJuego.addEventListener('click',()=>{
            juego();
        });
        divJuego.appendChild(botonJuego);
        main.appendChild(divJuego);

    }
    //Función para el juego de acertar la frase graciosa
    function juego (){
        let expansion = Math.floor(Math.random() * 5);
                switch(expansion){
                    case 0:
                        expansion = "Ashes%20of%20Outland";
                    break;
                    case 1:
                        expansion = "Forged%20in%20the%20Barrens";
                    break;
                    case 2:
                        expansion = "Madness%20at%20the%20Darkmoon%20Faire";
                    break;
                    case 3:
                        expansion = "Galakrond%27s%20Awakening";
                    break;
                    case 4:
                        expansion = "Scholomance%20Academy";
                    break;
                }
        listadoExpansion(expansion).then((resultado)=>{
            //Limpio
            /*while(divJuego.childNodes.length > 3)
            divJuego.removeChild(divJuego.lastChild);*/
            //Compruebo si existe la cookie record y si no la creo
            if (!sacarValorCookie(" record"))
                document.cookie = "record=0";
            //Creo el div donde irá el juego
            const divJuego = document.createElement("div");
            //Le doy clase
            divJuego.className = "divJuego";
            //Creo su título y su descripción
            const tituloJuego = document.createElement("h2");
            tituloJuego.textContent = "¿De quién es esta frase graciosa?";
            tituloJuego.className = "tituloJuego";
            const descripcionJuego = document.createElement("p");
            descripcionJuego.textContent = "Este juego trata de elegir cual de las siguientes cartas es la que tiene la frase de abajo";
            descripcionJuego.className = "descripcionJuego";
            //Las añado al div
            divJuego.appendChild(tituloJuego);
            divJuego.appendChild(descripcionJuego);
            //Ahora viene lo gracioso, tengo que crear un contador para que avance a cada respuesta y del resultado tengo que quitar las cartas que ya estén
            //Todo esto metido en un while y a su vez sacar dos objetos random de resultado en cada iteración con un for
            //while (contador < 5){
                let rand1 = Math.floor(Math.random()*resultado.length);
                let rand2 = Math.floor(Math.random()*resultado.length);
                //console.log(rand1);
                //console.log(rand2);
                //Que no se repitan
                while (rand1 == rand2){
                     rand1 = Math.floor(Math.random()*resultado.length);
                     rand2 = Math.floor(Math.random()*resultado.length);
                }
                //Array para sacarlo random
                let opciones = [rand1,rand2];
                //Creo un elemento para cada opcion
                const img1 = document.createElement("img");
                img1.src = resultado[rand1].img;
                //Accesible
                img1.alt = resultado[rand1].name;
                const img2 = document.createElement("img");
                img2.src = resultado[rand2].img;
                //Accesible
                img2.alt = resultado[rand2].name;
                //Saco de cual de los dos va a ser la frase
                let frase = opciones[Math.floor(Math.random() * 2)];
                //console.log(frase);
                frase = resultado[frase].flavor;
                //Creo el elemento que va a llevar la frase justo debajo de las imágenes
                let pJuego = document.createElement("p");
                pJuego.textContent = frase;
                //Pongo un listener a las fotos para que según lo que se elija pase una cosa u otra 
                img1.addEventListener("click",()=>{
                    if (resultado[rand1].flavor == frase){
                        let record = parseInt(sacarValorCookie(" record"));
                        record++;
                        document.cookie = "record="+record;
                        alertify.success("Has acertado");
                        juego();
                    }
                    else {
                        alertify.error("Lo siento, has fallado");
                        finalizarJuego(divJuego);
                        //Llamo a la función que limpia el juego y muestra puntuación

                    }
                });
                img2.addEventListener("click",()=>{
                    if (resultado[rand2].flavor == frase){
                        let record = parseInt(sacarValorCookie(" record"));
                        record++;
                        document.cookie = "record="+record;
                        alertify.success("Has acertado");
                        juego();
                    }
                    else {
                        finalizarJuego(divJuego);
                        alertify.error("Lo siento, has fallado");
                    }
                });
                //Meto las imágenes en su contenedor
                img1.className = "imgJuego";
                img2.className = "imgJuego";
                divJuego.appendChild(img1);
                divJuego.appendChild(img2);
                //Luego también le hago un append del párrafo
                pJuego.className = "pJuego";
                divJuego.appendChild(pJuego);
                //Meto el div en el main
                main.appendChild(divJuego);

            //}
        });
    }
    //Función para sacar resultados de una búsqueda parcial de caracteres
    const resultadosBusquedaParcial = async (nombre) =>{
        const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${nombre}?collectible=1&locale=esES`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a1c65baefdmsha5fe76334729909p147d7cjsnc4e4efdab8f0',
                'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
        }
    };
    //Cookie para almacenar el número de cartas que se van a ver por página
    //Si no existe pongo un tamaño por defecto múltiplo de 3
    if (!sacarValorCookie("ncartas")){
        document.cookie="ncartas=24";
    }
    let main = document.querySelector("main");
    //Le pongo un listener para que cuando se pulse aparezca el listado de las cartas favoritas
    document.querySelector(".favoritos").addEventListener('click',()=>{
        while (main.childNodes.length > 2){
            //console.log("Hola");
            main.removeChild(main.lastChild);
        }
        //Sacar un mensaje si no hay favoritos
        if(!sacarValorCookie(" mazo")){
            //console.log("funciona");
            const divNoFavs = document.createElement("div");
            divNoFavs.textContent = "No tienes ninguna carta en favoritos, !Empieza ahora mismo a elegir tu mazo!";
            divNoFavs.className = "divNoFavs";
            main.appendChild(divNoFavs);
        }
        else{
            //Compruebo si funciona
            //console.log("Hola");
            //Creo un nuevo div donde van a ir las cartas dentro        
            const contenedorfavoritos = document.createElement("div");
            contenedorfavoritos.className = "contenedorfavoritos";
            const titulofavoritos = document.createElement("h3");
            titulofavoritos.className = "titulofavoritos";
            titulofavoritos.textContent = "Cartas Favoritas";
            contenedorfavoritos.appendChild(titulofavoritos);
            const galeriafavoritos = document.createElement("div");
            galeriafavoritos.className = "resultado-cartas";
            //Reutilizo la clase de los resultados
            //Saco todos los ids de las cookies
            const arrayIds = generarArrayMazo();
            //Llamo a la función para hacer fetch de cada carta y meterlo en galeriafavoritos
            generarDisposicionFavoritos(arrayIds,galeriafavoritos).then(()=>{
                //En el momento acabe le hago un append a main de todo lo que he hecho
                contenedorfavoritos.appendChild(galeriafavoritos);
                main.removeChild(main.lastChild);
                main.appendChild(contenedorfavoritos);
            });
        }
    })
    //Cojo todas las imágenes que están en la galería, las almaceno en un array y también almaceno la llamada al DOM para sacar
    // el main en una variable, para ahorrarme futuras llamadas 
    const listaImagenes = document.getElementsByClassName("imagen");
    //Con un bucle recorro todas las imágenes para ponerles un evento de click
    for (let imagen of listaImagenes){
        imagen.addEventListener('click',()=>{
            //En el caso de que no sea el cuestionario va a entrar a un switch
            if (imagen.id != "im5"){
                //busqueda va a ser el argumento que le voy a pasar a la API como expansión, para sacar sus cartas
                let expansion;
                switch(imagen.id){
                    case "im1":
                        expansion = "Ashes%20of%20Outland";
                    break;
                    case "im2":
                        expansion = "Forged%20in%20the%20Barrens";
                    break;
                    case "im3":
                        expansion = "Madness%20at%20the%20Darkmoon%20Faire";
                    break;
                    case "im4":
                        expansion = "Galakrond%27s%20Awakening";
                    break;
                    case "im6":
                        expansion = "Scholomance%20Academy";
                    break;
                }
                //Llamo a la función y manejo la promesa
                listadoExpansion(expansion).then(resultado=>{
                    let numeroCartas = parseInt(sacarValorCookie("ncartas"));
                    //console.log(numeroCartas);
                    if (!numeroCartas){
                        document.cookie = "ncartas=24";
                        numeroCartas = 24;
                    }
                    //console.log(numeroCartas);
                    despliegueCartas(resultado,0,numeroCartas);
                });
            }
            else if (imagen.id == "im5"){
                //Limpiando
                while (main.childNodes.length > 2)
                    main.removeChild(main.lastChild);
                //Si se pulsa el botón del cuestionario inicio el juego
                //console.log("Hola");
                juego();

            }
        });
        //Le pongo un escuchador a la lupa para que aparezca el buscador en el main

        document.getElementById("buscador").addEventListener("click",()=>{
            while (main.childNodes.length > 2){
                //console.log("Hola");
                main.removeChild(main.lastChild);
            }
            //Ver si funciona, no sé por qué saca 6 Holas, preguntar a Sergio
            //console.log("Hola");
            if (main.childNodes.length == 2){
            //Creo el div donde van el título y la barra
            const divBusqueda = document.createElement("div");
            divBusqueda.className = "divBusqueda";
            const tituloBusqueda = document.createElement("h2");
            tituloBusqueda.textContent = "Buscador de Cartas por Nombre";
            divBusqueda.appendChild(tituloBusqueda);
            const searchContainer = document.createElement("div");
            searchContainer.className = "search-container";
            //Creo el input en sí de la barra de búsqueda
            const searchInput = document.createElement("input");
            searchInput.type = "text";
            searchInput.placeholder = "Busca tu carta";
            searchInput.className = "search-input";
            searchContainer.appendChild(searchInput);
            //Creo el botón con la lupa
            const searchButton = document.createElement("button");
            searchButton.className = "search-button";
            searchButton.textContent = "🔎";
            //Le voy a poner un evento de keyup para hacerlo dinámico y bonito ya que estamos,que nunca está demás
            searchButton.addEventListener('click',()=>{
                    console.log(divBusqueda.childNodes.length);
                    while (divBusqueda.childNodes.length > 2)
                        divBusqueda.removeChild(divBusqueda.lastChild);
                    //Probando si funciona
                    //console.log("Hola");
                    //Llamo a la función para que me devuelva resultados
                    resultadosBusquedaParcial(searchInput.value).then((resultado)=>{
                        //console.log(resultado);
                        //Voy a hacer un pequeño filtro
                        const resultadobueno = resultado.filter((elemento)=>{
                            return elemento.img != null;
                        });
                        //console.log(resultadobueno);
                        //Mostraré 5 resultados
                        for (let i = 0; i < 5 && i < resultadobueno.length; i++){
                            //Creo un div con fondo blanco para que resalte
                            const divresultado = document.createElement("div");
                            //Sus propios estilos
                            divresultado.className = "divResultadoBusqueda";
                            const imgresultado = document.createElement("img");
                            imgresultado.src = resultadobueno[i].img;
                            //Accesibilidad
                            imgresultado.alt = resultadobueno[i].name;
                            //La meto en el div
                            divresultado.appendChild(imgresultado);
                            //Ahora el nombre y la rareza
                            const nombreresultado = document.createElement("span");
                            const rarezaresultado = document.createElement("span");
                            nombreresultado.textContent = resultadobueno[i].name;
                            rarezaresultado.textContent = resultadobueno[i].rarity;
                            //Los meto en el div que los va a contener con un flex
                            const divdescripcion = document.createElement("div");
                            divdescripcion.className = "divDescripcion";
                            divdescripcion.appendChild(nombreresultado);
                            divdescripcion.appendChild(rarezaresultado);
                            divresultado.appendChild(divdescripcion);
                            //Le meto su evento para que al hacer click te muestre la info de la carta correspondiente
                            divresultado.addEventListener('click',()=>{
                                mostrarCarta(resultadobueno[i].cardId);
                            });
                            divBusqueda.appendChild(divresultado);
                        }
                    });
                
            })
            searchContainer.appendChild(searchButton);
            //Lo meto en el div
            divBusqueda.appendChild(searchContainer);
            //Lo muestro en el main
            main.appendChild(divBusqueda);
            }
        });
    }
});