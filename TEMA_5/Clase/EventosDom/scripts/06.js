window.addEventListener("DOMContentLoaded", ()=>{
    let capa2 = document.getElementById("capa2");
    let listaCapas = document.getElementsByTagName("div");

    const eliminar = function (e){
        e.currentTarget.style.display="none";
        let listaCapas = document.getElementsByTagName("div");
        for (let i = 0; i < listaCapas.length -1;i++){
            listaCapas[i].removeEventListener("dragend",eliminar);
        }
    }

    capa2.addEventListener("dragover",(e) => {
        e.preventDefault();
    })
    capa2.addEventListener("drop",(e)=>{
        let listaCapas = document.getElementsByTagName("div");
        for (let i = 0; i < listaCapas.length -1;i++){
                listaCapas[i].addEventListener("dragend",eliminar);
        }
    })
    capa2.addEventListener("dragenter",(e)=>{
        capa2.style.backgroundColor="red";
    })
    capa2.addEventListener("drop",(e)=>{
        capa2.style.backgroundColor="white";
    })
});