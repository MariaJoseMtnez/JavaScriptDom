/* Escuchar el evento submit del formulario #form-matricula y evitar que el navegador recargue la página.

Leer el nombre escrito en #nombre (sin espacios sobrantes). Si está vacío, mostrar un console.log("El nombre es obligatorio") y detener la función (return).

Detectar qué turno ("Mañana" o "Tarde") está marcado en los botones radio (o mostrar "Sin seleccionar" si no marcó ninguno).

Comprobar si la casilla checkbox #beca está marcada (true o false).

Mostrar por consola un objeto resumen con los tres datos: { nombre, turno, beca }.*/
const nombre = document.querySelector("#nombre");
const formulario = document.querySelector("#form-matricula");
const boton = document.querySelector("button");
const inputBeca = document.querySelector("#beca")

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const stringNombre = nombre.value.trim();
  if (validarNombre(stringNombre)) {
    const turnoSeleccionado = seleccionarTurno();
    const tieneBeca=pedirBeca();
    console.log({nombre: stringNombre, turno: turnoSeleccionado, beca: tieneBeca })
    alert("formulario enviado")
  }
});

function seleccionarTurno() {
  const radioMarcado = document.querySelector('input[name="turno"]:checked');
  return radioMarcado ? radioMarcado.value : "Sin Seleccionar";
}

function pedirBeca(){
    return inputBeca.checked;
}

function validarNombre(nombre) {
  return nombre.trim() !== "";
}
