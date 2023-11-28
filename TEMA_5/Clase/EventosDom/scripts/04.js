window.addEventListener('load',()=>{
    const listaParrafo = document.getElementsByTagName('p');
    console.log(listaParrafo[4].children)
    for (let parrafo of listaParrafo){
        parrafo.addEventListener('click',(e)=>{
            if (e.currentTarget.children[0].tagName=="LABEL"){
                e.currentTarget.children[0].children[0].checked = true;
            }
            else
                e.currentTarget.children[0].checked = true;
        })
    }
})  