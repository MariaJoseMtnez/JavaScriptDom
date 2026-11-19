
<body>
  <p id="contador">5</p>
  <button id="btn-cancelar">Pausar cuenta atrás</button>
</body>


let segundos=5;
const contador=document.querySelector("#contador");
const botonCancelar=document.querySelector("#btn-cancelar")
const id=window.setInterval(cuentaAtras, 1000);
function cuentaAtras(){
    segundos--;
    contador.textContent=segundos;
    if (contador.textContent==="0"){
        window.clearInterval(id)
        contador.textContent="Tiempo agotado";


    }
}

function detenerManual(){
    window.clearInterval(id);
    contador.textContent="Cuenta atrás pausada"
}
botonCancelar.addEventListener("click", detenerManual);
