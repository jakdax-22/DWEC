window.addEventListener('load', () => {
    let texto = document.getElementById("tarea");
    let lista = document.getElementById("lista");
    document.getElementById("mas").addEventListener("click",(e)=>{
        e.preventDefault();
        if (texto.value==""){
            texto.placeholder="Por favor, rellena el campo";
        }
        else {
            let elemento = document.createElement("li");
            let span = document.createElement("span");
            span.textContent=texto.value;
            span.style.cursor="pointer";
            let quitar = document.createElement("a");
            quitar.href = "#";
            quitar.textContent="Quitar";
            elemento.appendChild(span);
            elemento.appendChild(quitar);
            lista.appendChild(elemento);
            span.addEventListener('click',(e)=>{
                lista.insertBefore(elemento,lista.firstChild);
                /*let listaCopia = [...lista.childNodes].filter((l)=>{
                    return l !== e.target.parentNode;
                });
                if (listaCopia.length > 1){
                    if(listaCopia[0].nodeName=="#text")
                        listaCopia.shift();
                }
                listaCopia.unshift(e.target.parentNode);*/
                /*Acuérdate que no se puede hacer porque childNodes es de solo lectura
                lista.childNodes = listaCopia;
                */
                //console.log(listaCopia);
                /*while(lista.firstChild){
                    lista.removeChild(lista.firstChild);
                };
                listaCopia.map((l)=>{
                    lista.appendChild(l);
                });*/
            });
            quitar.addEventListener('click',(e)=>{
                e.preventDefault();
                lista.removeChild(e.target.parentNode);
            });
        }
        texto.value="";
    });
});
