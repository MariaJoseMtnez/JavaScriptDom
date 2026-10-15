console.log("Script cargado");


//Selecciona el <h1> y muestra su texto por consola.
const seleccionarH1= document.querySelector("h1");
const textoH1=seleccionarH1.textContent;
console.log(textoH1)

//Selecciona todos los <p> y muestra cuántos hay.
const seleccionarTodosP=document.querySelectorAll("p");
// alert(seleccionarTodosP.length)

//Muestra por consola el texto de cada párrafo (recórrelos con for...of).
for (let e of seleccionarTodosP){
    console.log(e.textContent)
}

const modificarH1=document.querySelector("h1");
console.log(modificarH1.textContent="Hola DOM!")

const primerParrafo=document.querySelector("p");

console.log(primerParrafo.textContent="soy el primer párrafo")


modificarH1.classList.add("destacado")
console.log(modificarH1)

let contenedor=document.querySelector("#contenedor")

for (let i=0;i<3;i++){
    let p=document.createElement("p")

    p.textContent=`Elemento ${i+1}`
    contenedor.append(p)
}


// Crear una lista
let nuevoUl =document.createElement("ul")
contenedor.appendChild(nuevoUl)
for (let i=1;i<=5;i++){
    let nuevoli=document.createElement("li")
    nuevoli.textContent=`Elemento ${i}`
    if (i%2===0){
        nuevoli.classList.add("destacado")
    }
    nuevoUl.appendChild(nuevoli)
}

