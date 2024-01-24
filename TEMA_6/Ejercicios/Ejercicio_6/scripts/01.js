
window.addEventListener('DOMContentLoaded', () => {
    function eventoCarga () {
    progreso.value+=20;
        if (progreso.value >= 100){
            cargando.style.display = "none";
            divimagenes.style.display = "block"
        }
    }
    function eventoError () {
        progreso.value+=20;
            if (progreso.value >= 100){
                cargando.style.display = "none";
                divimagenes.style.display = "block"
            }
    }
    let progreso = document.getElementById("progreso");
    let imagenes = document.getElementsByTagName("img");
    let cargando = document.getElementById("cargando");
    let divimagenes = document.getElementById("imagenes");

    for (let imagen of imagenes){
        imagen.addEventListener('load',eventoCarga);
        imagen.addEventListener('error',eventoError);
    };
});
window.addEventListener('load',()=>{
    function eventoCarga () {
        progreso.value+=20;
            if (progreso.value >= 100){
                cargando.style.display = "none";
                divimagenes.style.display = "block"
            }
        }
        function eventoError () {
            progreso.value+=20;
                if (progreso.value >= 100){
                    cargando.style.display = "none";
                    divimagenes.style.display = "block"
                }
        }
    let progreso = document.getElementById("progreso");
    let cargando = document.getElementById("cargando");
    let divimagenes = document.getElementById("imagenes");
    window.addEventListener('scroll',()=>{
        if (window.scrollY+document.documentElement.clientHeight >= document.body.clientHeight * 0.9){
            progreso.value = 0;
            divimagenes.style.display = "none";
            cargando.style.display="block";
            const arrayimagenes = ["http://lorempixel.com/1920/104"+Math.floor(Math.random()*10),
                                    "https://source.unsplash.com/random?",
                                    "https://picsum.photos/1920?",
                                    "https://www.fillmurray.com/640/360?",
                                    "https://loremflickr.com/1920/1048?"];
            for (let i = 0; i < 5; i++){
                let imagen = document.createElement("img");
                imagen.addEventListener('load',eventoCarga);
                imagen.addEventListener('error',eventoError);
                imagen.src=arrayimagenes[i];
                divimagenes.appendChild(imagen);
            }
        }
    })
    window.scrollTo(0,0);

});