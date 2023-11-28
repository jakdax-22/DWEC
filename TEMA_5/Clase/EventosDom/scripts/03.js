window.addEventListener('load',()=>{
    let listaInputs = document.getElementsByTagName("input");

    document.getElementsByTagName("form")[0].addEventListener("submit", (ev)=>{
        for(let i=0; i<3; i++){
            if(listaInputs[i].value==""){
                ev.preventDefault();
            }
        }
    })

    let listaParrafos = document.getElementsByTagName("p");
    for (let parrafo of listaParrafos){
        parrafo.addEventListener('click',(e)=>{
            e.currentTarget.childNodes[0].childNodes[1].value=7;
        })
    }
})