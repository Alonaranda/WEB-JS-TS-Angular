var nombre = 'Christian';
var apellido = 'Alonso';
var edad = 25;
var nombreCompleto = nombre +  ' ' + apellido;

console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Perez';
console.log(nombreCompleto2);

//Se evalua de izquierda a derecha, como empieza con String, el que sigue seguira siendo String
var x = nombre + 213 + 8;
console.log(x);

//Si hay parentesis le da prioridad
x = nombre + (2 + 8);
console.log(x);

x = 2 + 5 + nombre;
console.log(x);

//Forma más sencilla de concatenar todo:
console.log(`Hola mi nombre es ${nombre}, y me apellido ${apellido} y tengo ${edad} años`);