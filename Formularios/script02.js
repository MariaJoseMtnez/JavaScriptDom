const form = document.querySelector("#form");
const input = document.querySelector("#usuario");
const mensajeFinal = document.querySelector("#mensajeFinal");
const span=document.querySelector("#feedback");

input.addEventListener("input", (event) => {
  const logInput = input.value;
  let caracteres = logInput.trim().length;
  if (caracteres === 0) {
    span.textContent = "Escribe un usuario";
    span.className = "neutro";
    return;
  } else if (caracteres < 3) {
    span.textContent = "Muy corto";
    span.className = "error";
    return;
  } else {
    span.textContent = "Disponible";
    span.className = "ok";
  }
});
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const valor = input.value.trim();
  if (valor.length < 3) {
    mensajeFinal.textContent = "Corrige los errores";
    mensajeFinal.className = "error";
    return;
  }

  mensajeFinal.textContent = "Registro completado";
  mensajeFinal.className="ok"

  form.reset();
  span.textContent="";
  span.className="neutro"
  
});
