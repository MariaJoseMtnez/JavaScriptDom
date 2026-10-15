// Prepara un código JavaScript que, añadido a una página web, genere una tabla de contenido a
// partir de las etiquetas <h1>, <todosH2>...<h6> El índice lo generará dentro de una etiqueta <pre>,
// añadiendo espacios para que quede identado.
// El resultado de este ejercicio debería ser una página html con el script, pero el script ha de ser
// genérico y debería poder funcionar en cualquier otra página.
// Por ejemplo, dada la siguiente página:

// Pista:
// Divide el ejercicio en dos: primero, la obtención de datos: intenta crear una estructura con los
// títulos que puedas manejar como te interese. Luego, a partir de esa estructura, genera el contenido
// del <pre>

// const todosH1=document.querySelectorAll("h1");
// const todosH2=document.querySelectorAll("h2");
// const textoPre=document.createElement("pre")
// document.body.appendChild(textoPre)

// textoPre.innerHTML=`
// 1.- ${todosH1[0].textContent}
//   1.1. - ${todosH2[0].textContent}
//   1.2. - ${todosH2[1].textContent}
// 2.- ${todosH1[1].textContent}
//   2.1.- ${todosH2[2].textContent}
// `;

// FASE 1: Obtener todos los encabezados en orden:
const encabezados = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
//NodeList [0,1,2,3]

//FASE 2: Construir el texto del indice:

let contenidoIndice = "";

//Recorrer la lista con for of 
for (const e of encabezados) {
  const nivel = Number(e.tagName[1]);
  const sangria = " ".repeat(nivel - 1);
  const texto = e.textContent;
  contenidoIndice += `${sangria}${texto}\n`;
}

const pre = document.createElement("pre");
pre.textContent = contenidoIndice;
document.body.appendChild(pre);
