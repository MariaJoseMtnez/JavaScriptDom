const notas = [4, 7, 9, 3, 6, 8, 5, 10];

const totalNotas = notas.reduce((acum, nota) => (acum += nota), 0);
const media = totalNotas / notas.length;

function contarAprobados(lista) {
  let aprobados = 0;
  for (const nota of lista) {
    if (nota >= 5) {
      aprobados++;
    }
  }
  return aprobados;
}
const alumnosAprobados = notas.filter((nota) => nota >= 5);
let masAlta = notas[0];

notas.forEach((nota) => {
  if (nota > masAlta) {
    masAlta = nota;
  }
});
console.log(masAlta);
