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
function calcularTotal() {
  let suma = 0;
  for (const li of carrito.querySelectorAll("li")) {
    suma += parseFloat(li.dataset.precio);
  }
  total.textContent = `Total: ${suma.toFixed(2)}€`;
}

const productos = document.querySelector("#productos");
const carrito = document.querySelector("#carrito");
const total = document.querySelector("#total");

productos.addEventListener("click", (event) => {
  if (event.target.matches(".producto")) {
    const nombreElemento = event.target.dataset.nombre;
    const precioElemento = parseFloat(event.target.dataset.precio);

    //crear li
    const nuevoLi = document.createElement("li");
    //añadir texto:
    nuevoLi.textContent = `${nombreElemento} ,  ${precioElemento}`;
    carrito.appendChild(nuevoLi);
    //crear boton para eliminar articulo
    const btn = document.createElement("button");
    nuevoLi.appendChild(btn);
    btn.textContent = "Eliminar";
    btn.classList.add("eliminar");
    //sumar elementos al precio
    nuevoLi.dataset.precio = precioElemento;
    nuevoLi.classList.add("productoAñadido");
    calcularTotal();
  }
});

//listener en carrito para elminar productos:
carrito.addEventListener("click", (event) => {
  if (!event.target.matches(".eliminar")) return;
  const li = event.target.closest("li");
  li.remove();
  calcularTotal();
});
