// OBJETOS
//Crean un objeto en memoria con sus propiedades
//los objetos tienen propiedades y metodos

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    mail: "jperez@mail.com",
    edad: 28,
    //Agregar metodo
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.mail);
console.log(persona);
console.log(persona.nombreCompleto());


//Otra forma de declarar un Objeto
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.color = "Verde";
persona2.direccion = "Saturno15";
persona2.telefono = '55443322';
console.log(persona2);
console.log(persona2.direccion);


//Acceder a las propiedades
console.log(persona.nombre);
console.log(persona['nombre']);

//For in
for( nombrePropiedad in persona ){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Agregar nuevas propiedades
persona.telefono = "5544332211";
console.log(persona);

//Eliminar propiedades
delete persona.telefono;
console.log(persona);



//Como imprimir un objeto 
//Concatenar cada valor de cada propiedad
console.log( persona.nombre + ' ' + persona.apellido + ' ' + persona.mail);
//for in
for(iteradorPropiedad in persona){
    console.log(persona[iteradorPropiedad]);
}
//Object.values()
let personaArray = Object.values(persona);
console.log(personaArray);
//JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);


//GET y SET con objetos
let auto = {
    marca: "BMW",
    modelo: "2005",
    color: "Plateado",
    carroseria: "sedan",
    get colorGet(){
        return this.color.toUpperCase();
    },
    set colorSet(colorGet){
        this.color = colorGet.toUpperCase();
    },
    datosAuto: function(){
        return this.marca + ' ' + this.modelo;
    },
    get masDatos(){
        return this.marca + ' ' + this.modelo + ' ' + this.color;
    }
}

console.log(auto.datosAuto());
console.log(auto.masDatos);
console.log(auto.colorGet);
auto.colorSet = 'Naranja';
console.log(auto.color);




