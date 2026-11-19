/*Nuestro programa deberá:
1. Obtener un array con los alumnos aprobados.
2. Obtener un array únicamente con sus nombres.
3. Calcular la nota media de la clase.
4. Encontrar al alumno con la nota más alta. */

const alumnos = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pedro", nota: 3 },
  { nombre: "Lucía", nota: 6 },
  { nombre: "Carlos", nota: 5 },
];

const alumnosAprobados = alumnos
  .filter((alumno) => alumno.nota >= 5)
  .map((alumno) => alumno.nombre);
console.log(alumnosAprobados);

const notaMedia =
  alumnos.reduce((acumulador, alumno) => acumulador + alumno.nota, 0) /
  alumnos.length;

console.log(Math.round(notaMedia));

let mejorAlumno=alumnos[0];
alumnos.forEach((alumno )=> {
    if (alumno.nota>mejorAlumno.nota){
        mejorAlumno=alumno
    }
})
console.log(mejorAlumno);
