//Una funciones un codigo reutilizable 
//Se agrega return para regresar el valor de mi funcion

//Hosting -> Se puede llamar antes o despues de declarar la función
//suma(5, 5);

//Declaracion de la funcion
function suma(a, b){
    console.log(arguments.length);
    return a + b;
}

function resta(a, b){
    return a - b;
}

//Lamar la función
let resultado = suma(2, 2);
console.log(resultado);

let res = resta(5, 2);
console.log(res);

//Funcion Self invoking, no es reutilizable
(function (a,b){
    console.log("Ejecutando la función self invoking "+ (a + b));
})(3,4);

//Funcion como Objetos, tienen propiedades y objetos
var miFuncionTexto = suma.toString();
console.log(miFuncionTexto);

//Funcion anonima o tipo expresión
//Como es ejecutable termina con ;
let multiplicacion = function(a, b){
    return a * b;
};
let mult = multi(5,2);
console.log(mult);

//Función Flecha

//Muy similar a la función tipo expresión
//Se recomienda const, no se cambia la referencia
//Se puede omitir la palabra function
//El return esta implicito 
const sumarTipoFlecha = (a, b) => a + b;
resultado = sumarTipoFlecha(5, 6);
console.log(resultado);

//Parametros y argumentos 
/*
Parametros -> La lista de variables que va a recibir una función
Argumentos -> Los valores que se le pasan a la función
*/

let division = function (a = 10, b = 2){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a / b + arguments[2];
};
resultado = division();
console.log(resultado);


//Ejemplo
let resultadoFinal = sumatoria(5, 3, 6, 7, 5, 3, 3, 2);
console.log(resultadoFinal);

function sumatoria(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];//Suma = suma + arguments[i]
    }
    return suma;
}


//Paso por valor
let x = 10; //Tipo primitivo, no se puede modificar, no tienen propiedades ni metodos
function cambiarValor(a){
    a = 20;
}
cambiarValor(x);
console.log(x);
//console.log(a);//Solo existe en el metodo

//Paso por referencia
const persona = {
    nombre: "Chris",
    apellido: "Alonso"
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Perez";
}
cambiarValorObjeto(persona);
console.log(persona);