const alumno = {
  nombre: "Carlos",
  ciclo: "DAW",
  curso: 2,
  activo: true
};

const modulos = ["DWEC", "DWES", "DIW", "DAW"];

//for...in --> recorre las claves del objeto

for (const propiedad in alumno){
    console.log(alumno[propiedad])
}
//for... of --> recorre directamente valores del array
for (const modulo of modulos){
    console.log(`Módulo: ${modulo}`)
}

//crear otro alumno
const alumnoActualizado={...alumno, ciudad: "valencia"}
console.log(alumnoActualizado)