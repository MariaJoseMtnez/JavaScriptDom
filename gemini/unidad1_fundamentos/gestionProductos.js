const productos = [
  { nombre: "Teclado", precio: 45, stock: 8 },
  { nombre: "Ratón", precio: 20, stock: 0 },
  { nombre: "Monitor", precio: 180, stock: 5 },
  { nombre: "Auriculares", precio: 35, stock: 12 },
  { nombre: "Webcam", precio: 60, stock: 0 },
  { nombre: "Micrófono", precio: 85, stock: 3 }
];

// Nuestro programa deberá:
// 1. Obtener los productos que tienen stock disponible.
// 2. Crear un array únicamente con los nombres de esos productos.
// 3. Calcular el valor total del inventario (precio × stock de cada producto).
// 4. Encontrar el producto más caro.
// 5. Comprobar si existe algún producto sin stock.

const productosDisponibles=productos.filter((producto)=>producto.stock>0);
const nombresDisponibles=productosDisponibles.map(producto=> producto.nombre)
console.log(productosDisponibles);
console.log(nombresDisponibles);

//total importe inventario
const totalValorInventario=productos.reduce((acumulador, producto)=> acumulador+ producto.precio*producto.stock, 0);
console.log(totalValorInventario);

//mas caro
const precios=productos.map((producto)=>producto.precio);
const precioMasCaro=Math.max(...precios)
console.log(precioMasCaro);

let productoMasCaro=productos[0];

productos.forEach(producto =>{
    if (producto.precio>productoMasCaro.precio){
        productoMasCaro= producto;
    }
})
console.log(productoMasCaro);

const alumnos = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pedro", nota: 3 },
  { nombre: "Lucía", nota: 6 }
];

const alumnosAprobados=
alumnos.
filter((alumno)=>alumno.nota>=5)
.map((alumno)=>({...alumno, nota: alumno.nota+1}))