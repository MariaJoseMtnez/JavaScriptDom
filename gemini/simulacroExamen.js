class Libro{
    constructor(titulo, autor, anio, genero, paginas){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;
        this.genero=genero;
        this.paginas=paginas;
    }
    resumen(){
        return `${this.titulo} - ${this.autor} - (${this.anio}) · Genero: ${this.genero} · ${this.paginas} páginas `
    }

    esLargo(){
        return this.paginas>500
    }
}

// creamos objeto libro
const libro1=new Libro("Dune", "Frank Herbert", 1965, "ciencia ficción", 412)
console.log(libro1.resumen())
console.log(libro1.esLargo())

console.log("=====================")

function obtenerTitulos(libros){
   return libros.map(libro=> libro.titulo)

}
