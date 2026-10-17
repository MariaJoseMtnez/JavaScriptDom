const edades = [12, 18, 25, 30, 15, 40, 8];

const adultos=edades.filter(esMayor);

function esMayor(edad){
    return edad>=18;
} // esta funcion devuelve true si es mayor
console.log(adultos)

// con arrow:

const adultos2=edades.filter((edad)=> edad>=18);