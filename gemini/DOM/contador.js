const mensaje = document.querySelector("#mensaje");
const contador = document.querySelector("#contador");
const error = document.querySelector("#error");
const boton = document.querySelector("#btn-enviar");

boton.disabled = true;
mensaje.addEventListener("input", (evento) => {
  const mensajeString = evento.target.value;
  const longitud = mensajeString.length;
  contador.textContent = `${longitud} / 100 caracteres`;

  if (longitud > 100 || longitud === 0) {
    boton.disabled = true;
    if (longitud > 100) {
      contador.style.color = "red";
      error.textContent = `Has superado el limite`;
    } else {
      contador.style.color = "black";
      error.textContent = "";
    }
  } else if (longitud >= 80) {
    boton.disabled = false;
    contador.style.color = "orange";
    error.textContent = "";
  } else {
    boton.disabled = false;
    contador.style.color = "black";
    error.textContent = "";
  }
});
