const button = document.getElementById("boton");
let resultado = document.getElementById("resultado");
button.addEventListener("click", () => {
  resultado.textContent = "Has hecho un click!";
});

// contadordeclicks
let contador = 0;
button.addEventListener("click", () => {
  contador++;
  resultado.textContent =contador===1 ?
  "Has hecho click 1 vez"
  : `Has hecho click ${contador} veces`
//   if (contador === 1) {
//     resultado.textContent = `Has hecho click una vez`;
//   } else resultado.textContent = `Has hecho click ${contador} veces!!! `;
});

// ¿Dónde está el ratón?
const documento =document.querySelector("body")
const resultado1 = document.querySelector("#resultado")
documento.addEventListener("mousemove", (event)=> {
    resultado1.textContent= `El raton esta en ${event.offsetX} y en ${event.offsetY}`
})


//version minimalista

resultado = document.querySelector("#resultado");

document.addEventListener("mousemove", (event) => {
    resultado.textContent = `Posición: X = ${event.clientX}, Y = ${event.clientY}`;
});