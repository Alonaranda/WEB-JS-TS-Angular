//Constructor --> Funcion especial 

//Funcion constructor de objetos de tipo persona
//this trabaja con la propiedad
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
//Agregar propiedad a constructor -> Prototype
Persona.prototype.edad = 23;

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);
console.log(padre.nombreCompleto());
console.log(padre);
console.log(padre.edad);

let madre = new Persona('May', 'Chavez', 'mchavez@mail.com');
console.log(madre);
console.log(madre.nombreCompleto());
madre.edad = 34;
console.log(madre);

let hijo = new Persona('Beto', 'Pico');
console.log(hijo);
console.log(hijo.nombreCompleto());


//Metodo Call
//Llamar un metodo definido dentro de otro Objeto
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(telefono, titulo){
        return this.nombre + ' ' + this.apellido + ' ' + titulo + ' ' + telefono;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}
//Uso de Call para usar el metodo nombrecompleto() de persona1
console.log(persona1.nombreCompleto.call(persona2));
//Pasar algumentos a call
console.log(persona1.nombreCompleto.call(persona2, '44332211', 'Ingeniero'));



//Metodo Apply
console.log(persona1.nombreCompleto.apply(persona2));
//Pasar paremetros, es con arreglo
let arreglo = ['Ingeniero', '55443322'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));




