const COMBINACIONES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // filas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columnas
  [0, 4, 8],
  [2, 4, 6], // diagonales
];

class TresEnRalla {
  constructor() {
    this.tablero = ["", "", "", "", "", "", "", "", ""];
    this.turno = "X";
  }

  jugar(posicion) {
    if (!Number.isInteger(posicion) || posicion < 0 || posicion > 8) {
      throw new Error("Posición inválida");
    }
    if (this.tablero[posicion]!==""){
        throw new Error("Casilla ocupada")
    }
    if (this.haTerminado()){
        throw new Error("El juego ha terminado")
    }
    this.tablero[posicion]=this.turno;
    this.turno=this.turno==="X" ? "O" : "X";
  }

  ganador() {
        for (const [a, b, c] of COMBINACIONES) {
            if (
                this.tablero[a] !== "" &&
                this.tablero[a] === this.tablero[b] &&
                this.tablero[b] === this.tablero[c]
            ) {
                return this.tablero[a];
            }
        }
        return null;
    }
}
