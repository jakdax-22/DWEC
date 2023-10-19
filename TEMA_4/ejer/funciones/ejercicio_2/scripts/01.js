window.addEventListener('load',()=>{
    const letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    const numeros = document.getElementById('contenido');
    const letra = document.getElementById('resultado');

    document.getElementById('calcular').addEventListener('click',()=>{
            letra.value=letras[calcularLetra(numeros.value)];
    });
});
function calcularLetra (numeros) {
    return Math.floor (numeros % 23);
}
