/*Al hacer clic en un producto de #productos, añadirlo al carrito (#carrito).
Cada producto del carrito debe ser un <li> con:
    Su nombre
    Su precio
    Un botón "Quitar"
Actualizar el total cada vez que se añade o se quita un producto. 
Usar delegación de eventos:
    Un listener en #productos para los clics en productos.
    Un listener en #carrito para los clics en botones "Quitar"*/

//añadir al carrito al hacer click

const productos = document.querySelector("#productos");
const carrito = document.querySelector("#carrito");
const pr = document.querySelector(".producto");
const total = document.querySelector("#total");
const elemento = document.querySelector(".producto");
let sumaTotal = 0;
productos.addEventListener("click", (event) => {
  if (event.target.matches(".producto")) {
    const nombreElemento = event.target.dataset.nombre;
    const precioElemento = parseFloat(event.target.dataset.precio);

    //crear li
    const nuevoLi = document.createElement("li");
    //añadir texto:
    nuevoLi.textContent = `${nombreElemento} ,  ${precioElemento}`;
    carrito.appendChild(nuevoLi);
    //sumar elementos al precio
    sumaTotal += precioElemento;
    total.textContent = `Total: ${sumaTotal}`;
    nuevoLi.dataset.precio=precioElemento;
  }
});

//listener en carrito para elminar productos:
carrito.addEventListener("click",(event)=>{
    if (event.target.matches("li")){
        
        
        const precioElemento=parseFloat(event.target.dataset.precio)
        total.removeChild("li")
        sumaTotal-=precioElemento;
    }

})

