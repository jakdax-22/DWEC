function Supermercado (){
    this.productos = [];
}
function Producto (nombre,cantidad,precio){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
}
Producto.prototype.getNombre = function () {
    return this.nombre;
}
Producto.prototype.getCantidad = function () {
    return this.cantidad;
}
Producto.prototype.getPrecio = function () {
    return this.precio;
}
Producto.prototype.getTotal = function () {
    return this.cantidad * this.precio;
}
Supermercado.prototype.añadir = function (objeto){
    this.productos.push(objeto);
}

let cantidad = document.getElementById("cantidad");
let precio = document.getElementById("precio");
let nombre = "producto";
let resultado = document.getElementById('resultado');
const supermercado = new Supermercado();

document.getElementById('añadir').addEventListener('click', (event)=> {
    event.preventDefault();
    let producto = new Producto (nombre,cantidad.value,precio.value);
    supermercado.añadir(producto);
    precio.value = "";
    cantidad.value = "";
})
document.getElementById('mostrar').addEventListener('click', (event) =>{
    event.preventDefault();
    let i = 0;
    resultado.textContent = `Nombre    Cantidad     Precio      Total \n`;
    while (supermercado.productos.length != 0){
        resultado.textContent+= `${supermercado.productos[0].getNombre()}${i+1}     ${supermercado.productos[0].getCantidad()} \t  ${supermercado.productos[0].getPrecio()}   \t    ${supermercado.productos[0].getTotal()}\n`;
        supermercado.productos.shift();
        i++;
    };
    
    resultado.style.display="block";
});
