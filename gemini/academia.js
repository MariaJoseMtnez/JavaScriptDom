const cursos = [
  { id: 1, titulo: "JavaScript Moderno", precio: 0, nivel: "Básico" },
  { id: 2, titulo: "React desde Cero", precio: 49, nivel: "Medio" },
  { id: 3, titulo: "HTML y CSS Grid", precio: 0, nivel: "Básico" },
  { id: 4, titulo: "Node.js y APIs", precio: 65, nivel: "Avanzado" },
];

const botonTodos = document.querySelector("#btn-todos");
const botonGratis = document.querySelector("#btn-gratis");
const contenedorCursos = document.querySelector("#contenedor-cursos");

// const cursosGratis= cursos.filter((curso)=> curso.precio===0);
function pintarCursos(listaCursos) {
  contenedorCursos.innerHTML = "";
  listaCursos.forEach((curso) => {
    const nuevoCurso = document.createElement("div");
    nuevoCurso.classList.add("tarjeta");
    const tituloCurso = document.createElement("h3");
    tituloCurso.textContent = curso.titulo;
    const nivel = document.createElement("p");
    nivel.textContent = curso.nivel;
    const precio = document.createElement("p");
    precio.textContent = curso.precio === 0 ? "gratis" : `${curso.precio}`;
    nuevoCurso.append(tituloCurso, nivel, precio);
    contenedorCursos.append(nuevoCurso);
  });
}

function cursosGratis(listaCursos) {
  const cursosGratuitos = listaCursos.filter((curso) => curso.precio === 0);
  return cursosGratuitos;
}

document.body.addEventListener("click", (evento) => {
  if (evento.target.matches("#btn-todos")) {
    pintarCursos(cursos);
  }
  if (evento.target.matches("#btn-gratis")) {
    pintarCursos(cursosGratis(cursos));
  }
});
pintarCursos(cursos);