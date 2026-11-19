// Vas a crear una mini-app de gestión de biblioteca. Tienes un array de libros (objetos) y tienes que:
//     Crear una clase Libro (2 puntos).
//     Trabajar con el array usando map, filter, reduce (3 puntos).
//     Mostrar los libros en el DOM (2 puntos).
//     Añadir un libro con un formulario (2 puntos).
//     Filtrar por género con un <select> (1 punto).

const libros = [
    { titulo: "Cien años de soledad", autor: "García Márquez", anio: 1967, genero: "novela", paginas: 471 },
    { titulo: "1984", autor: "George Orwell", anio: 1949, genero: "ciencia ficción", paginas: 328 },
    { titulo: "El Quijote", autor: "Cervantes", anio: 1605, genero: "novela", paginas: 863 },
    { titulo: "Dune", autor: "Frank Herbert", anio: 1965, genero: "ciencia ficción", paginas: 412 },
    { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", anio: 2001, genero: "misterio", paginas: 576 }
];


class Libro{
    constructor(titulo, autor, anio, genero, paginas){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;
        this.genero=genero;
        this.paginas=paginas;

    }
    resumen(){
        return `${this.titulo} - ${this.autor} (${this.anio}) · ${this.genero} · ${this.paginas}`
    }
    esLargo(){
        return this.paginas>500;
    }
}

//metodos de array.
//obtener titulos:
console.log("=======titulos=======")
const arrayTitulos=libros.map((libro)=> libro.titulo)
console.log(arrayTitulos);

console.log("=======libros genero novela =======")
function filtrarPorGenero(libros, genero) {
    return libros.filter(libro => libro.genero === genero);
}

console.log("=======PAGINAS=======")
const totalPaginas=libros.reduce((acumulador, elemento)=>{
    return acumulador+elemento.paginas
},0)
console.log(totalPaginas)

console.log("=======LIBRO MÁS LARGO=======")
const libroMasLargo=libros.reduce((masLargo, libro) =>{
    return libro.paginas > masLargo.paginas? libro:masLargo;
})
console.log(libroMasLargo)

console.log("=======contar por generos.=======")
const contarPorGenero = libros.reduce((acc, libro) => {
    acc[libro.genero] = (acc[libro.genero] || 0) + 1;
    return acc;
}, {});
console.log(contarPorGenero)

console.log("=======ordenar por años.=======")
const ordenarPorAnio = (libros) => {
    return [...libros].sort((a, b) => a.anio - b.anio);
};

console.log(ordenarPorAnio)

//Punto 3: mostrar en el DOM

function renderizarLibros(librosAMostrar) {
    const listaLibros = document.querySelector("#listaLibros");
    listaLibros.innerHTML = "";   // limpiar

    librosAMostrar.forEach(libro => {
        const li = document.createElement("li");
        li.textContent = libro.resumen();
        listaLibros.appendChild(li);
    });

    // Resumen
    const totalPaginas = librosAMostrar.reduce((acc, libro) => acc + libro.paginas, 0);
    const resumen = document.querySelector("#resumen");
    resumen.textContent = `Total: ${librosAMostrar.length} libros · ${totalPaginas} páginas`;
}

renderizarLibros(libros);


const formulario=document.querySelector("#formLibro")

formulario.addEventListener("submit", (evento)=>{
    const titulo=document.querySelector("#titulo")
    tituloEscrito=titulo.value.trim()
    const autor=document.querySelector("#autor").value.trim();
    const anio=parseInt(document.querySelector("#anio").value)
    const genero=document.querySelector("#genero").value.trim();
    const paginas=parseInt(document.querySelector("#paginas").value)


    const nuevoLibro=new Libro(titulo, autor, anio, genero, paginas);
    libros.push(nuevoLibro)
    const resumenP=document.querySelector("#resumen");
    resumenP.textContent=nuevoLibro.resumen

    renderizarLibros(libros)
})
