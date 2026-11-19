const mapa = new Map();
mapa.set("nombre", "MJ");
mapa.set("ciudad", "Valencia");
mapa.set("edad", 35);

console.log(mapa.get("nombre"));
console.log(mapa.has("edad"));
console.log(mapa.size);

mapa.clear();
console.log("----------------------");

//ejercicio 1:
// Crea un Map con 3 frutas y sus precios. Luego:
//     Muestra el precio de una fruta concreta.
//     Añade una fruta nueva.
//     Comprueba si existe otra fruta.
//     Muestra el tamaño del Map.
const frutas = new Map([
    ["manzana", 0.0], 
    ["pera", 1.2], 
    ["banana", 2.09]
])

const precioBanana= frutas.get("banana")
console.log(precioBanana)

frutas.set("piña", 3.10)
console.log(frutas)

console.log(frutas.has("melocoton"))
console.log(frutas.size)

//recorrer el map for..of

for (const [fruta, precio] of frutas){
    console.log(`${fruta}: ${precio}€ `)
}