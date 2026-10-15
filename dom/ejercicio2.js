/*Realiza un programa que tenga 10 elementos <p> 
y al hacer clic sobre ellos desaparezcan (se
oculten)  (evento click boton izq. sobre p)
y al hacer click con el botón derecho los elimine del DOM (no se debe mostrar el menú de
contexto). (evento click boton dcho sobre p)

También deberá tener un botón “Reaparecer” que hará que aparezcan todos los
elementos desaparecidos (pero no los eliminados) (evento click sobre boton ) */ 

//Crear los 10 párrafos
function crearParrafos(){
for (let i = 1; i <= 10; i++) {
  const nuevoP = document.createElement("p");
  nuevoP.textContent = `Parrafo ${i}`;
  document.body.appendChild(nuevoP);
}}
crearParrafos();

//Ocultar parrafos
document.addEventListener("click", (evento)=> {
    if (evento.target.tagName === 'P'){
        evento.target.style.display ="none"; //Oculta pero sigue en el dom
    }
})
//funcion para eliminar
document.addEventListener("contextmenu", (evento)=>{
    if (evento.target.tagName ==="P") {
        evento.preventDefault();
        evento.target.remove();
    }
})

const boton =document.querySelector("button");
boton.addEventListener("click", ()=> {
    let parrafos= document.querySelectorAll("p")
    parrafos.forEach(p=> {
        p.style.display="";

    })
   
})
