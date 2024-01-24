const consultarAPI = async (url, ciudad, paisInput) => {
    
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const arrayResultados = resultado.resourceSets[0].resources;
    const paisesfiltrados = arrayResultados.filter((pais) => {
        return pais.address.countryRegion === paisInput && pais.address.adminDistrict2 === ciudad && pais.entityType === "PopulatedPlace";
    });
    if (paisesfiltrados.length > 0) {
        return paisesfiltrados[0].point.coordinates;
    } else {
        throw new Error("No se encontraron coordenadas para la ciudad y país especificados.");
    }
};
const consultarAPI2 = async (latitud, longitud) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=cb655d2c73b5ab8bd2456665e68e4e35&units=metric`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
    const temp = resultado.main.temp;
    const temp_min = resultado.main.temp_min;
    const temp_max = resultado.main.temp_max;
    const temperaturas = [temp,temp_min,temp_max];
    return temperaturas;
};
window.addEventListener('load', () => {
    document.getElementById("form1").addEventListener("submit", async (e) => {
        e.preventDefault();
        const contenido = document.getElementById("contenido");
        if (contenido.childNodes.length >= 1)
            contenido.removeChild(contenido.firstChild);
        
        const ciudad = document.getElementById("ciudad").value;
        const paisInput = document.getElementById("pais").value;
        const url = `http://dev.virtualearth.net/REST/v1/Locations/${ciudad}?maxResults=20&key=AlENujcoGVl6YOXZ8PWvFGTdQPXhTo3CpuredRYdVUpaXC_JpgMOWTypc17FboEU`;
        let temperaturas;
        try {
            const coordenadas = await consultarAPI(url, ciudad, paisInput);
            console.log(coordenadas);

            // Ahora llamamos a la segunda API con las coordenadas ajustadas
            const [latitud, longitud] = coordenadas;
            temperaturas = await consultarAPI2(latitud, longitud);
        } catch (error) {
            console.error("Error al consultar la API:", error);
        }

        let div = document.createElement("div");
        let temp = document.createElement("p");
        let temp_min = document.createElement("p");
        let temp_max = document.createElement("p");
        temp.textContent = `Temperatura: ${temperaturas[0]}`;
        temp_min.textContent = `Temperatura mínima: ${temperaturas[1]}`;
        temp_max.textContent = `Temperatura máxima: ${temperaturas[2]}`;
        div.appendChild(temp);
        div.appendChild(temp_min);
        div.appendChild(temp_max);
        contenido.appendChild(div);
        if (contenido.childNodes >= 2){
            contenido.removeChild(contenido.firstChild);
        }
    });
});