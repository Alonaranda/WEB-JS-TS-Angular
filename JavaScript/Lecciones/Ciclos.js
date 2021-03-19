
// WHILE --> Siempre que sea cierto se cumplira, hasta un falso
let contador = 0;

while( contador < 3 ){
    console.log(contador);
    contador++;
}

// DO WHILE --> Ejecuta y pregunta si continua
let conta = 0;
do{
    console.log(conta);
    conta++;
}while(conta < 3);

// FOR
for(let i = 0; i < 3; i++){
    console.log(i);
}


//Palabra Break
for(let j = 0; j <= 10; j++){
    console.log(j);
    if(j % 2 == 0){
        console.log(j);
        if(j == 6){
            console.log("Encontre el 6 sin llegar al 10")
            break;
        }
    }
}

//Palabra Continue, ir a la siguiente iteración
for(let iterador = 0; iterador <= 10; iterador++){
    if(iterador % 2 !== 0){
        continue;//Si es impar, ire a la siguiente iteracion
    }else{
        console.log(iterador);
    }
}

//Etiquetas, no son recomendables 
inicio:
console.log("Empezare el for");
for(let x = 0; x <= 10; x++){
    console.log(x);
    if(x == 5){
        console.log(x);
        //continue inicio;
    }
    console.log(x);
}