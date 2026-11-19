// Imagina que trabajas en el software de una tienda online. Tienes una cesta de la compra con varios productos. Tu jefe te pide: "Necesito saber cuánto dinero en total se va a gastar el cliente SOLO en los productos de la categoría 'tecnología'".

const cesta = [
  { nombre: "Camiseta", categoria: "ropa", precio: 20 },
  { nombre: "Ratón Inalámbrico", categoria: "tecnologia", precio: 50 },
  { nombre: "Pantalón", categoria: "ropa", precio: 30 },
  { nombre: "Teclado Mecánico", categoria: "tecnologia", precio: 100 },
];
// filter() necesita condicion- devuelve array
const productosTech = cesta.filter(
  (elemento) => elemento.categoria === "tecnologia",
);
// const productosTech= cesta.filter((elemento)=>{
//    if (elemento.categoria==="tecnologia") 
//       {return true;
//    } else {
//      return false;
//    }
// });

const totalPrecio=productosTech.reduce((acumulador, producto)=> {
    return acumulador+producto.precio
},0);
// map, devuelve todo sin condicion
const nombresProductos= cesta.map((elemento) => elemento.nombre);
console.log(nombresProductos)

const productosSuperioresA30euros=cesta
.filter((elemento)=> elemento.precio>30)
.map((elemento)=> elemento.nombre);

// const productosSuperioresA30euros = cesta
//   .filter(function(elemento) {
//     return elemento.precio > 30;
//   })
//   .map(function(elemento) {
//     return elemento.nombre;
//   });

 const objetoBuscado= cesta.find((elemento)=> elemento.nombre==="Teclado Mecánico");
console.log(objetoBuscado);