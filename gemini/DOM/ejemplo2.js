<div id="tarjeta-curso" class="card">
  <h3>Curso de DWEC</h3>
  <a id="enlace-info" href="https://example.com">Ver temario</a>
  <button id="btn-fav">⭐ Favorito</button>
</div>

const tarjetaCurso=document.querySelector("#tarjeta-curso");
tarjetaCurso.addEventListener("click", (e)=>{
    console.log(e.target)
    console.log(e.currentTarget)
})
const botonFav=document.querySelector("#btn-fav");
botonFav.addEventListener("click", (e)=>{
    console.log("Añadido a favoritos");
    e.stopPropagation();
})
const enlace=document.querySelector("#enlace-info");
enlace.addEventListener("click", (e)=> {
    e.preventDefault()
    console.log("Navegacion bloqueada");
    
})