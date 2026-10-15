// Crea una página HTML con un DIV que contenga en su interior
// al menos tres DIV de diferentes
// colores. Al pulsar uno de los <div> el padre se podrá del
// color de ese elemento.
// Debes usar la misma función para manejar los eventos en los
// tres <div> (no vale que hagas una función específica para cada uno)

 const divPadre = document.querySelector("#padre")

divPadre.addEventListener("click", (evento)=>{
     const colorClicado=evento.target.style.backgroundColor;
    divPadre.style.backgroundColor=colorClicado;
 } )

// Con una funcion aparte:
divPadre = document.querySelector("#padre");

function cambiarColorPadre(evento) {
    const colorClicado = evento.target.style.backgroundColor;
    divPadre.style.backgroundColor = colorClicado;
}

divPadre.addEventListener("click", cambiarColorPadre);
