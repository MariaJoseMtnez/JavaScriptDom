const numeros = [1, 2, 3, 2, 1, 4, 5, 3, 4, 2];
const valorNoDuplicados=[...new Set(numeros)]
console.log(valorNoDuplicados.sort((a, b)=> a-b))

//contar palabras unicas
const frase = "hola mundo hola a todos los mundos del mundo";
const palabras=frase.split(" ");
console.log(palabras)
const palabrasSinRepetir=[...new Set(palabras)]
console.log(palabrasSinRepetir)
console.log(palabrasSinRepetir.length)