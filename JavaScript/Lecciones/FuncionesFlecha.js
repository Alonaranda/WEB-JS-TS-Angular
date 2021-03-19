function miFuncion(){
    console.log('Función normal');
}
miFuncion();

//Función flecha es anonima
let funcionAnonima = function (){
    console.log('Función anonima');
};
funcionAnonima();

//Función flecha
const funcionFlecha = () => {
    console.log('Función flecha');
}

const mifuncionFlecha = () => console.log('Funcion Flecha');

funcionFlecha();
mifuncionFlecha();

const saludar = () => {
    return 'Saludos desde funcion flecha';
}

const miSaludo = () => 'Saludos con una linea en flecha';

console.log(saludar());
console.log(miSaludo());




const regresarObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresarObjeto());




//Con parametros
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con parametros');

const funcionConParametros2 = saludo => console.log(saludo);
funcionConParametros2('Hi');




//Con varios parametros
const suma = (a,b) => {
    let resultado =  a + b;
    return resultado;
};
console.log(suma(5, 3));