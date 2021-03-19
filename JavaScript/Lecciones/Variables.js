//let para variables
//const para constantes
//var se ocupa en funciones

//Las variables van con minusculas, usar notaciòn camello
//JS es sencible a Mayusculas y minusculas

//Se puede declarar una variable sin poner var,let,const, se llama literal
//Es una mala practica
nombre = 'Juan';
console.log(nombre);

//Al usar let se puede usar al usar variables que pueden cambiar
let color;
color = "Rojo";
console.log(color);

//Al usar const no se puede cambiar su valor, es constante
const apellido = "Alonso";

//Se pueden declarar variables en una misma linea
let x, y;
x = 10;
y = 20;
let z = x + y;
console.log(z);

//No se puede declarar variables empezando con numeros
//let 1nombre = 'Hola' --> No esta permitido
let _nombre = 'Chris';
let $nombre = 'Chris';
let a1nombre = 'Chris';

//No se pueden usar palabras reservadas para definir variables 
