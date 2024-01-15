window.addEventListener('load', () => {
    let parrafos = document.querySelectorAll("p");
    let contador = 0;
    document.body.innerHTML="";
    let intervalo = setInterval(()=>{
        document.body.appendChild(parrafos[contador]);
        contador++;
        if (contador == 50){
            clearInterval(intervalo);
        }
    },1000)
    
});
