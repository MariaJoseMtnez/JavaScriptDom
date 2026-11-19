function obtenerTitulos(libros) {
  return libros.map((libro) => libro.titulo);
}

function filtrarPorGenero(libros, genero) {
  return libros.filter((libro) => libro.genero === genero);
}

function totalPaginas(libros) {
  return (libros.reduce((acumulador, libro) => acumulador + libro.paginas), 0);
}

function libroMasLargo(libros){
    return libros.reduce((masLargo, libro)=>{
        return libro.paginas>masLargo.paginas ? libro : masLargo
    });
}
