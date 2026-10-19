function imprimirLista(lista) {
    for (let producto of lista) {
        console.log(producto);
    }
}

imprimirLista(["manzana", "pera", "platano"]);


//Suma numeros
function sumarArray(numeros) {
    let total = 0
    for (let n of numeros) {
        total += n;
    }
    return total
}

let compra = [0.99, 9.10, 20, 43.56];
console.log(sumarArray(compra))
// console.log(`- ${producto}`);
//Buscar en un array
function contiene(lista, elemento) {
    for (const e of lista) { // dentro de bucle usar const
        if (lista.includes(elemento)) return true
        else return false
    }
}

function contieneElemento(lista, elemento){
    return lista.includes(elemento);
}

let listaCompra = ["huevos", "manzanas", "peras", "tomate"];
console.log(contiene(listaCompra, "maiz"));