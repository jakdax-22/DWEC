function leerCookie(nombreC) {
    let cookies=document.cookie.split("; ");
    for (let cookie of cookies){
        let [nombre,valor]=cookie.split("=");
        if(nombre==nombreC){
            return valor;
        }
    }
    return false;
}

function validarNombreApellido(){
    if(document.getElementById('nombre').value==""){
        document.getElementById('errores').textContent= `El campo nombre esta vacio`;
        document.getElementById('nombre').classList.add('error');
        document.getElementById('nombre').focus();
        return false;
    }else if(document.getElementById('apellidos').value==""){
        document.getElementById('nombre').classList.remove('error');
        document.getElementById('errores').textContent= `El campo apellido esta vacio`;
        document.getElementById('apellidos').classList.add('error');
        document.getElementById('apellidos').focus();
        return false;
    }else{
        document.getElementById('nombre').classList.remove('error');
        document.getElementById('apellidos').classList.remove('error');
        return true;
    }
}

window.addEventListener('load',()=>{
    let enviar= document.getElementById('enviar');
    let hoy = new Date();
    hoy=hoy.getTime() + 1000 * 60 * 60 * 24 * 7;
    let caducidad=new Date(hoy);
    enviar.addEventListener('click',()=>{
        
        let valor = leerCookie('intentos');
        let existe=false;
        if(valor){
            document.cookie= `intentos=${parseInt(valor)+1}; expires=${caducidad.toUTCString()}`;
            existe= true;
        }else if(!existe){
            document.cookie='intentos=1; expires='+caducidad.toUTCString();
        }
    })
    let formu = document.getElementById('formulario');
    formu.addEventListener('submit',(ev)=>{
        if(!validarNombreApellido()){
            ev.preventDefault();
        }
    });
    let valor=leerCookie('intentos');
    if(valor){
        document.getElementById('intentos').textContent= `Intentos de Envíos del formulario: ${valor}`;
    }

    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    nombre.addEventListener('focusout',()=>{
        nombre.value=nombre.value.toUpperCase();
    })
    apellidos.addEventListener('focusout',()=>{
        apellidos.value=apellidos.value.toUpperCase();
    })

})