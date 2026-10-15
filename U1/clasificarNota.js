function clasificarNota(nota) {
    if (nota < 0 || nota > 10) return "Nota inválida"
    if (nota >= 9) return "Sobresaliente"
    if (nota >= 7) return "Notable"
    if (nota >= 6) return "Bien"
    if (nota >= 5) return "Aprobado"
    if (nota < 5) return "Suspenso"
    
}

console.log(clasificarNota(-1));
