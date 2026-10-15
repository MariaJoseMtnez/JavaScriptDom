const calculadora = {
  a: 0,
  b: 0,
  sumar() {
    return this.a + this.b;
  },
  restar() {
    return this.a - this.b;
  },
  multiplicar() {
    return this.a * this.b;
  },
  dividir() {
    if (this.b === 0) return "Error: división por cero";
    return this.a / this.b;
  },
};

function asignarNumeros(calc, numero1, numero2) {
  calc.a = numero1;
  calc.b = numero2;
}

asignarNumeros(calculadora, 2, 4);

console.log(calculadora.sumar());
asignarNumeros(calculadora, 10, 3);
console.log(calculadora.restar());
console.log(calculadora.multiplicar());
asignarNumeros(calculadora, 10, 0);
console.log(calculadora.dividir());
