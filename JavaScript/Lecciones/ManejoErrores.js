'use strict'

try{
    //x = 10;
    miFuncion();
    console.log('Estoy dentro del try');
}catch(error){
    console.log('Existe un error:' + ' ' + error);
}
finally{
    console.log('Termine la revisión de errores');
}

console.log('El programa no se detiene con el error');



//Throw --> Da el nombre al error, reporta tu tipo de error

let resultado = 'a';

try{
    //x = 10;
    if(isNaN(resultado))throw 'No es un número';
    else if(resultado === '') throw 'Es cadena vacia';
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado < 0) throw 'Valor negativo';
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Termine la revisión de errores')
}

