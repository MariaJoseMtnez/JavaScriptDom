class Cuenta{
    constructor(titular){
        this.titular=titular;
        this.saldo=0;
    }
    ingresar(cantidad){
        if (cantidad>0){
        this.saldo+=cantidad};
    }
    retirar(cantidad){
        if (this.saldo>=cantidad){ 
            this.saldo-=cantidad;
        }else 
            console.log("Saldo inferior")
    }
    consultarSaldo(){
        return this.saldo
    }
}

const cuenta = new Cuenta("Ana");

cuenta.ingresar(100);
console.log(cuenta.consultarSaldo());   // 100

cuenta.retirar(30);
console.log(cuenta.consultarSaldo());   // 70

cuenta.retirar(100);   // ❌ no hay suficiente
console.log(cuenta.consultarSaldo());   // 70 (no cambia)

console.log("===========================")
//herencia
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        return `${this.nombre} hace un sonido`;
    }
}

class Perro extends Animal {
    hablar() {
        return  `${this.nombre} ladra`
    }
}

class Gato extends Animal {
    hablar() {
       return  `${this.nombre} maulla`
    }
}

const animal = new Animal("Bicho");
const perro = new Perro("Toby");
const gato = new Gato("Michi");

console.log(animal.hablar());   // "Bicho hace un sonido"
console.log(perro.hablar());    // "Toby ladra"
console.log(gato.hablar());     // "Michi maúlla"