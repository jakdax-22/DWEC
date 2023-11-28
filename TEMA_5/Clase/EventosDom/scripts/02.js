/*window.addEventListener('load',()=>{
    document.getElementsByTagName("input")[0].addEventListener("click",()=>{
        location.href="https://www.marca.com";
    })
})*/


window.addEventListener('load',()=>{
    document.getElementsByTagName("input")[0].addEventListener("click",(e)=>{
        e.preventDefault();
        let estasSeguro = confirm("Deseas salir de la página actual?");
        if (estasSeguro)
            location.href="https://www.marca.com";
    })
})