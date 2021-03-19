// ARREGLOS

//Forma antigua
let autos = new Array('BMW', 'Audi', 'Volvo');
console.log(autos);

//Se usa const porque es espacio almacenado serà el mismo, aunque cambie el arreglo
const carros = ['BMW', 'Audi', 'Volvo'];
console.log(carros);

//Acceder a los valores
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);

//Recorrer un arreglo 
for(let i = 0; i < carros.length; i++){
    console.log(carros[i] + ` : ${i}`);
}

//Modificar los elementos del arreglo
carros[2] = 'Nissan';
console.log(carros[2]);

//Agregar elementos al final 
carros.push('Volvo');
console.log(carros);

//Agregar elementos con cuidado
console.log(carros.length);
carros[carros.length] = "Tesla";
console.log(carros);

//Eliminar elemento
carros.pop(4);
console.log(carros);

//Es un arreglo ?
console.log(Array.isArray(carros));
console.log(carros instanceof Array);