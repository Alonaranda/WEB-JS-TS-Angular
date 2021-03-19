/*
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;
    if(expresion){
        resolver('Resolvio correcto');
    }else{
        rechazar('Se produjo un error');
    }
});
*/


/*
miPromesa
.then(valor => console.log(valor),error => console.log(error));

miPromesa
.then(valor => console.log(valor))
.catch(error=>console.log(error));
*/



let promesa = new Promise((resolver) => {
    //console.log('Inicio promesa');
    setTimeout( () => resolver('Saludos con Promesa y Timeout'), 3000);
    //console.log('Fin promesa');
});

//promesa.then(valor => console.log(valor));




//Async significa que va a regresar una promesa 
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async'
}

//miFuncionConPromesa().then(valor => console.log(valor));


//Await espera la respuesta de una promesa
//Solo se puede usar dentro de una funcion async
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();


//Promesa con Async, await y setTimeout
async function funcionConpromesaAwaitTimeout(){
    console.log('Inicio de función')
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });

    console.log(await miPromesa);
    console.log('Fuera de la función');
}

funcionConpromesaAwaitTimeout();