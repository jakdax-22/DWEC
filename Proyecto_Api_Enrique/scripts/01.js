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
                    setTimeout(()=>{
                        main.removeChild(main.lastChild);
                        const galeriacartas = document.createElement("div");
                        console.log(resultado);
                        galeriacartas.className = "resultado-cartas";
                        for(let carta of resultado){
                            let foto = document.createElement("img");
                            foto.src=carta.img;
                            foto.alt=carta.name;
                            foto.className="carta";
                            galeriacartas.appendChild(foto);
                        }
                        main.append(galeriacartas);
                        console.log(main.childNodes);
                    },2000);
                });


            }
        })
    }
});