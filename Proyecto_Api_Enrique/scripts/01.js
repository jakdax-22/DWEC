window.addEventListener('load',() =>{
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
            const response = await fetch(url, options);
            const result = await response.json();
            if (main.childNodes.length > 3)
            main.removeChild(main.lastChild);
            const gifparrafo = document.createElement("div");
            gifparrafo.className = "gif";
            const gifimagen = document.createElement("img");
            gifimagen.src="../img/logo.gif";
            gifimagen.alt="Spinner Logo";
            gifparrafo.appendChild(gifimagen)
            main.append(gifparrafo);
            return result;
        } catch (error) {
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
    //Funcion para el despliegue de las cartas en pantalla
    function despliegueCartas (resultado,pagina,cargando=true,numcartas=24){
        //Esto simplemente es por si se ha pulsado una imagen del inicio, para dar una pantalla de carga, si se da a pasar de página me la cargo
        if (cargando){
            setTimeout(()=>{
                //Me cargo el último hijo de main para que no se me acumule, en este caso es la pantalla de carga
                main.removeChild(main.lastChild);
                //Creo el div del contenedor
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
                for(let i = numcartas * pagina; i < Number.parseInt(ncartas) + (numcartas * pagina) && i < resultado.length ;i++){
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
                while (resultado.length > ncartas * (contador - 1)){
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
                        despliegueCartas(resultado,spanfootergaleria.textContent - 1,false);
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
                option1.textContent = 5;
                let option2 = document.createElement("option");
                option2.textContent = 10;
                let option3 = document.createElement("option");
                option3.textContent = 15;
                let option4 = document.createElement("option");
                option4.textContent = 20;
                let option5 = document.createElement("option");
                option5.textContent = 25;
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
                //Esto se hace 2 secs después de que se realice el fetch para que se cargue del todo y para que quede ciertamente estético
            },2000);
        }
        //Es literalmente lo mismo, pero quitando el Timeout para que cambie de página inmediatamente, porque lo de los 2 segundos queda bien para una vez solo
        //Aparte aquí ya está cargado el fetch desde hace tiempo y lo veo una tontería
        else{
            main.removeChild(main.lastChild);
            const contenedorgaleria = document.createElement("div");
            const galeriacartas = document.createElement("div");
            galeriacartas.className = "resultado-cartas";
            let ncartas = sacarValorCookie("ncartas");
            for(let i = numcartas * pagina; i < Number.parseInt(ncartas) + (numcartas * pagina) && i < resultado.length ;i++){
                let foto = document.createElement("img");
                foto.src=resultado[i].img;
                foto.alt=resultado[i].name;
                foto.className="carta";
                galeriacartas.appendChild(foto);
            }
            let contenedorfootergaleria = document.createElement("div");
            let footergaleria = document.createElement ("div");
            let contador = 1;
            while (resultado.length > ncartas * (contador - 1)){
                let spanfootergaleria = document.createElement("span");
                spanfootergaleria.textContent+= contador;
                spanfootergaleria.className="spanfootergaleria";
                footergaleria.appendChild(spanfootergaleria);
                spanfootergaleria.addEventListener('click',()=>{
                    despliegueCartas(resultado,spanfootergaleria.textContent - 1,false);
                });
                contador++;
            }
            contador = 0;
            footergaleria.className="footergaleria";
                let divselectgaleria = document.createElement("div");
                let spandivselectgaleria = document.createElement("span");
                spandivselectgaleria.textContent = "Número de cartas por página: ";
                divselectgaleria.appendChild(spandivselectgaleria);
                let selectgaleria = document.createElement("select");
                let option1 = document.createElement("option");
                option1.textContent = 5;
                let option2 = document.createElement("option");
                option2.textContent = 10;
                let option3 = document.createElement("option");
                option3.textContent = 15;
                let option4 = document.createElement("option");
                option4.textContent = 20;
                let option5 = document.createElement("option");
                option5.textContent = 25;
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
            contenedorgaleria.appendChild(galeriacartas);
            contenedorgaleria.appendChild(contenedorfootergaleria);
            contenedorgaleria.className="contenedorgaleria";
            main.append(contenedorgaleria); 
        }
    }
    //Cookie para almacenar el número de cartas que se van a ver por página
    //Si no existe pongo un tamaño por defecto múltiplo de 3
    if (document.cookie == ""){
        document.cookie="ncartas=24";
    }
    //Cojo todas las imágenes que están en la galería, las almaceno en un array y también almaceno la llamada al DOM para sacar
    // el main en una variable, para ahorrarme futuras llamadas 
    const listaImagenes = document.getElementsByClassName("imagen");
    let main = document.querySelector("main");
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
                    //Tengo el problema de que se carga el gif después de los resultados de la consulta :(
                    //Por tanto he tenido que hacer un setTimeout para que quede más estético simplemente
                    despliegueCartas(resultado,0);

                });
                /*Siempre me carga esto antes del resto de cosas y por eso no me detecta nada, preguntarle a sergio
                document.querySelector("select").addEventListener('change',()=>{
                    console.log(this.value);
                    despliegueCartas(resultado,pagina,false,this.value);
                })*/


            }
        })
    }
});