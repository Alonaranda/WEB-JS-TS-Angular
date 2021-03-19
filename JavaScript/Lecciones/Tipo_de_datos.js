        //Tipos de datos

/*Las variables son dinamicas, entonces se pueden reutilizar */
/* Para saber el tipo de dato se usa typeof */

//Tipo de dato String
var nombre = "Christian";
console.log(nombre);
console.log(typeof nombre);
nombre = 10;
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato numerico 
var numero = 1_000;
console.log(numero);

//Tipo de dato Object
var objeto = {
    nombre: "Christian",
    apellido: "Alonso",
    telefono: "5522334455"
}
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato Boolean(true y false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato Function
function miFuncion(){

}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una función
class Persona{
        constructor(nombre, apellido){
                this.nombre = nombre;
                this.apellido = apellido;
        }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined
var x;
console.log(typeof x);
x = undefined;
console.log(x);
console.log(typeof x);

//Null = ausencia de valor 
var y = null;
console.log(y);
console.log(typeof y);

//Los arreglos son tipo Objeto
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//Tipo vacío
var z = '';
console.log(z);
console.log(typeof z);


