const productos = [
  { id: 1, nombre: "Ratón Gaming", precio: 45, enStock: true },
  { id: 2, nombre: "Teclado Mecánico", precio: 90, enStock: false },
  { id: 3, nombre: "Alfombrilla XL", precio: 18, enStock: true },
  { id: 4, nombre: 'Monitor 24"', precio: 160, enStock: true },
  { id: 5, nombre: "Auriculares", precio: 35, enStock: false },
];
//stock y precio <50 -- COLADOR --> filter()
const productosStockBaratos = productos.filter(
  (producto) => producto.precio < 50 && producto.enStock,
);
console.log(productosStockBaratos);

// sacar textos formateados - FABRICA TRANSFORMADORA  --> map()
const productosFormateados = productosStockBaratos.map(
  (producto) => `Nombre: ${producto.nombre} , Precio: ${producto.precio}`,
);
console.log(productosFormateados);

//---------METODO ENCADENADO.
const ofertasDirectas = productos
  .filter((p) => p.precio < 50 && p.enStock)
  .map((p) => `${p.nombre} - ${p.precio}€`);

const carrito = [
  { nombre: "Ratón Gaming", precio: 45, cantidad: 2 },
  { nombre: "Alfombrilla XL", precio: 18, cantidad: 1 },
  { nombre: "Cable USB-C", precio: 10, cantidad: 3 },
];

//REDUCE
const totalCarrito = carrito.reduce(
  (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
  0,
);
console.log(`Total a pagar: ${totalCarrito}€`);

const totalUnidades = carrito.reduce(
  (acumulador, producto) => acumulador + producto.cantidad,
  0
);


