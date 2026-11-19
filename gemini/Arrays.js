//Map + filter:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayPares =numeros
.filter((elemento)=> elemento%2===0)
.map((elemento)=> elemento*2)
console.log(arrayPares);

//Reduce:
const carrito = [
    { producto: "pan", precio: 1.5, cantidad: 2 },
    { producto: "leche", precio: 0.9, cantidad: 3 },
    { producto: "huevos", precio: 2.5, cantidad: 1 }
];

const total=carrito.reduce((acumulador, elemento)=> {
    return acumulador+elemento.precio* elemento.cantidad},0);
    console.log(total)

const totalProductos=carrito.reduce((acumulador, elemento)=> acumulador+elemento.cantidad, 0)
console.log(totalProductos)

//some / every
const edades = [15, 22, 18, 30, 12];
console.log(edades.some(edad=> edad <18))
console.log(edades.every(edad=> edad >= 18))

//recorrer un objeto: for...in
const precios = { manzana: 1.2, pera: 0.9, platano: 0.75 };
let totalPrecios=0;
for (const producto in precios){
    console.log(`${producto}: ${precios[producto]}€`)
    totalPrecios+=precios[producto]
}
console.log(totalPrecios)

//Object.entries ( clave+ valor)
for (const [fruta, precio] of Object.entries(precios)) {
    console.log(`${fruta}: ${precio}€`);
}

// spread + desestructuracion
const usuario = { nombre: "Ana", edad: 25, ciudad: "Valencia" };
const nuevoUsuario ={...usuario, activo: true}

const {nombre, ciudad} =usuario;
console.log(nombre);
console.log(ciudad)
console.log(nuevoUsuario)