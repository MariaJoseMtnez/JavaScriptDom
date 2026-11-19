const input = document.querySelector("#producto");
const lista = document.querySelector("#lista");
const boton = document.querySelector("#btn-agregar");
// 2. Escuchamos el clic en el botón principal "Añadir"

boton.addEventListener("click", (evento) => {
  // Extraemos el texto del input y recortamos espacios sobrantes por delante y detrás
  const nombreProducto = input.value.trim();
  // 3. Validamos que haya al menos 1 carácter real antes de crear nada
  if (nombreProducto.length > 0) {
    // Fabricamos en memoria la etiqueta <li> y le asignamos el nombre del producto
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = nombreProducto;
    //fabricamos en memoria boton Delete
    const botonDelete = document.createElement("button");
    botonDelete.classList.add("btn-delete");
    botonDelete.textContent = "Eliminar";
    //añadimos al li
    nuevoLi.appendChild(botonDelete);
    lista.appendChild(nuevoLi);
    input.value = "";
    input.focus();
  }
});
lista.addEventListener("click", (evento) => {
  if (evento.target.matches(".btn-delete")) {
    evento.target.closest("li").remove();
  }
});
