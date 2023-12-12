'use strict';
window.addEventListener('load',()=>{
    let puedeVerse = true;
    if (document.cookie == ""){
        let aviso = confirm("Este sitio utiliza cookies, quieres continuar?");
        if (aviso == true){
            document.cookie="sesionAbierta=si";
        }
        else {
            document.cookie="sesionAbierta=no";
        }
    }
    else {
        let valores = document.cookie.split("; ");
        for (let elemento of valores){
            let [clave,valor] = elemento.split("=");
            if (clave == "sesionAbierta"){
                if (valor == "si"){
                    puedeVerse= true;
                    console.log("1.1");
                }
                else {
                    puedeVerse = false;
                    console.log("1.2");
                }
            }
        }
        if (!puedeVerse){
            document.getElementById("visitas").style.display="none";
            let caduca = new Date (1);
            let valores = document.cookie.split("; ");
            for (let elemento of valores){
                let [clave] = elemento;
                if (clave == "expires"){
                    document.cookie(clave+"="+caduca);
                }
            }
        }
        else if (document.cookie.match(/.*visitas.*/)==null){
            let fechaano = new Date();
            fechaano = fechaano + 1000 * 3600 * 24 * 365;
            document.cookie="visitas=1; expires="+fechaano;
            const visitas = document.getElementById("visitas");
            visitas.style.display = "block";
            visitas.textContent = "Visitas totales: 1";
        }
        else {
            let cookie = document.cookie.split("; ");
            let numero = 0;
            let caduca;
            for (let elemento of cookie){
                let [clave,valor] = elemento.split("=");
                if (clave == "visitas"){
                    valor = parseInt(valor) + 1;
                    numero = valor;
                }
                else if (clave=="expires"){
                    valor = parseInt(valor) + 1000 * 3600 * 24 * 365;
                    caduca = valor;
                }
            }
            document.cookie="visitas="+numero+"; expires="+caduca;
            const visitas = document.getElementById("visitas");
            visitas.style.display = "block";
            visitas.textContent = "Visitas totales: "+numero;
        }
    }
})
