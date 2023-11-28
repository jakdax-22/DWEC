window.addEventListener('load', () =>{
    document.addEventListener('keyup',(e)=>{
        if (e.altKey && e.key == "F12"){
            document.getElementById("imagen").style.backgroundImage="url(http://source.unsplash.com/random)";
        }
    })
})