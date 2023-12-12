'use strict';
window.addEventListener('load',()=>{
    console.log(document.cookie);
    const capaform = document.getElementById('capaFormulario');
    const textousuario = document.getElementById('cTextoUsuario');
    const capasaludo = document.getElementById('capaSaludo');
    const parrafosaludo = document.getElementById('parrafoSaludo');
    const botonSaludo = document.getElementById('botonSaludo');
    let hoy = new Date();
    if (document.cookie == ""){
        capasaludo.style.display="none";
        textousuario.addEventListener('change',(e) =>{
            document.cookie=`usuario=${e.target.value}; expires=${new Date (hoy + 1000*3600*24*7)}`;
            location.reload();
        })
    }
    else {
        capaform.style.display = "none";
        let cookie = document.cookie.split("; ");
        let clave,valor;
        for (let elemento of cookie){
            [clave,valor] = elemento.split("=");
        }
        parrafosaludo.textContent = `Bienvenido ${valor}`;

        botonSaludo.addEventListener('click',()=>{
            const epoch = new Date(1);
            document.cookie=`usuario=${valor}; expires=${epoch}`;
            location.reload();
        })
    }
})

