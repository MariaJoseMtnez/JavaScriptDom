const titulo = document.querySelector("#titulo");
const form = document.querySelector("form");
const spanError = document.querySelector("#errorTitulo");
const selectPrioridad = document.querySelector("#prioridad");
const fechaLimite = document.querySelector("#fechaLimite");
const contadores = document.querySelector("#contadores");
const listaTareas = document.querySelector("#listaTareas");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const valorTitulo = titulo.value.trim();
  const prioridad = selectPrioridad.value;
  const valorFecha = fechaLimite.value;
  if (validarTitulo(valorTitulo)) {
    crearTarea(valorTitulo, prioridad, valorFecha);
  }

  titulo.value = "";
  fechaLimite.value = "";
  titulo.focus();
});

function validarTitulo(titulo) {
  if (titulo.length < 3) {
    spanError.textContent = "Error. Tiene que ser más de 3 caracteres";
    return false;
  }
  spanError.textContent = "";
  return true;
}

function crearTarea(titulo, prioridad, fecha) {
  const tarea_li = document.createElement("li");
  tarea_li.dataset.fecha = fecha;
  tarea_li.classList.add(prioridad);
  tarea_li.textContent = `${titulo} — Prioridad: ${prioridad}`;
  if (fecha) {
    tarea_li.textContent += ` — Fecha: ${fecha}`;
  }
  const botonCompletar = document.createElement("button");
  botonCompletar.classList.add("completar");
  botonCompletar.textContent = "Completar";
  const botonEliminar = document.createElement("button");
  botonEliminar.classList.add("eliminar");
  botonEliminar.textContent = "Eliminar";
  tarea_li.appendChild(botonCompletar);
  tarea_li.appendChild(botonEliminar);
  listaTareas.appendChild(tarea_li);
  actualizarContadores();
}

function actualizarContadores() {
  const total = listaTareas.querySelectorAll("li").length;
  const completadas = listaTareas.querySelectorAll("li.completada").length;
  contadores.textContent = `Total: ${total} tareas | Completadas: ${completadas}`;
}

listaTareas.addEventListener("click", (event) => {
  const elementoClicado = event.target;
  if (elementoClicado.matches(".completar")) {
    const li_tarea = elementoClicado.closest("li");
    li_tarea.classList.toggle("completada");
    actualizarContadores();
  }
  if (elementoClicado.matches(".eliminar")) {
    const li_tarea = elementoClicado.closest("li");
    li_tarea.remove();
    actualizarContadores();
  }
});
