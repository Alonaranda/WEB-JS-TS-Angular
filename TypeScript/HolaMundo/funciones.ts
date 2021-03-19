
/*
Para que corra nuestro proyecto TypeScript primero lo debemos compilar en la terminal
tsc archivo.ts

Al compilar el proyecto TypeScript se crea el documento JS con lo mismo 

Indicar que estamoss trabajando con un proyecto ts con 
tsc -init
el cual nos crea el archivo tsconfig.json

Convertir en automatico nuestros archivos js a ts con: 
tsc -w */

function saludar(){
    console.log('Hola mundo desde TypeScript');
}
saludar();

//Variables:
//Inferencia de tipos, no es necesario declarar que tipo de esta forma => variable:String
//Los tipos de datos en TypeScript son mas rigurosos, si se inicio como String siempre será String, o Number

let variable:string = 'Soy una variable String';
//variable = 10; No se puede porque se definio como string
console.log(typeof(variable));

let numero = 10;
numero = 18;
console.log(numero);
console.log(typeof(numero));


let cualquiera:any;
console.log(typeof(cualquiera));//Undefined
//Any nos permite almacenar alquier tipo de dato
cualquiera = 'Hola';
cualquiera = 10;
console.log(typeof(cualquiera));


//Se puede declarar una constante sin poder cambiar su valor
const PI = 3.14;
console.log(PI);
