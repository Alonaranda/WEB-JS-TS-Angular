//Revisar tabla de precedencia de operadores en JS

let a = 3, b = 2, c = 1, d = 4;

//Se evalua de izquierda a derecha
let z = a * b + c / d;
console.log(z);

z = c + a * b;
console.log(z);

z = (c + a) * b;
console.log(z);

z = a / b * c % d;
console.log(z);
