window.addEventListener('load', () => {
    let parrafos = document.querySelectorAll("p");
    let textosOriginales = [...parrafos].map(p => p.textContent);
    //console.log(textosOriginales);
    
    setTimeout(() => {
        let actuales = document.querySelectorAll("p");
        let textosInvertidos = [...textosOriginales].reverse();
        
        for (let i = 0; i < actuales.length; i++) {
            actuales[i].textContent = textosInvertidos[i];
        }
        console.log(textosInvertidos);
        console.log(textosOriginales);
    }, 5000);
});
