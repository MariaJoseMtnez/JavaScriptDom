<form id="form-soporte" novalidate>
  <select id="categoria">
    <option value="">-- Elige departamento --</option>
    <option value="tec">Soporte Técnico</option>
    <option value="fac">Facturación</option>
  </select>

  <textarea id="mensaje" placeholder="Describe tu incidencia (mín. 10 caracteres)"></textarea>
  <p id="error-msg"></p>

  <button type="submit">Enviar consulta</button>
</form>

const formulario=document.querySelector("#form-soporte");
const categoria=document.querySelector("#categoria");
const mensaje=document.querySelector("#mensaje");
const mensajeError=document.querySelector("#error-msg")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (categoria.value==="" || mensaje.value.trim().length<10){
mensajeError.textContent="Selecciona un departamento y escribe al menos 10 caracteres"
return
    } else{
        mensajeError.textContent="";
        console.log({ codigo: categoria.value, departamento: categoria.options[categoria.selectedIndex].text, mensaje: mensaje.value.trim()});}
})