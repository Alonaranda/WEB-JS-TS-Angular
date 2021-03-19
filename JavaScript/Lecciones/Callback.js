function miFuncion1(){
    console.log('Funcion1');
}

function miFuncion2(){
    console.log('Funcion2');
}
//Secuencial la ejecución de las funciones
miFuncion1();
miFuncion2();

//Funcion de tipo Callback --> Se ejecutan de manera asincrona 
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imprimir);

//Llamadas asincronas con el uso setTiemout
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallback, 3000);// Despues de 3 segundos

setTimeout(function(){console.log('Saludo asincrono 2')}, 4000);

setTimeout(() => console.log('Saludo asincrono 3'), 1000);



//setInterval
//llama una finción cada cierto tiempo
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
//setInterval(reloj, 1000); //Cada segundo se ejecuta