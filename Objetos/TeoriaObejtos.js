
//CREAR OBJETO
const persona = { nombre: "MJose", edad: 35 };

// Notación de punto (la más común)
console.log(persona.nombre);    // "MJose"
console.log(persona.edad);      // 35

// Notación de corchetes (útil si la clave es dinámica)
console.log(persona["nombre"]); // "MJose"

const clave = "edad";
console.log(persona[clave]);    // 35  ← aquí el punto NO funcionaría