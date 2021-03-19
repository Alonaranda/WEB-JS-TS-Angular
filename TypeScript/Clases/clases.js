"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    //Acceder a atributo privado
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona('Chris');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
class Perro {
    constructor(raza, tamaño) {
        this.raza = raza;
        this.tamaño = tamaño;
    }
}
let perro1 = new Perro('Bulldog', 20);
console.log(perro1);
