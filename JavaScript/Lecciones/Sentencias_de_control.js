// IF/ELSE

let condicion = true;

if( condicion ){
    console.log("La condicion es verdadera");
    //Si solo hay una linea de respuesta se pueden quitar las llaves
}else{
    console.log("La condición es falsa");
}



let numero = 3;

if(numero == 1){
    console.log("Es el numero uno");
}else if(numero == 2){
    console.log("Es el numero dos");
}else{
    console.log("Es un numero distinto a uno y dos");
}



let miHora = 7;
let dia = 6;
let tarde = 12;
let noche = 19;
let madrugada = 0;

if( miHora >= madrugada && miHora <= dia){
    console.log("Estoy durmiendo");
}else if(miHora >= dia && miHora <= tarde){
    console.log("Buenos días");
}else if(miHora >= tarde && miHora <= noche){
    console.log("Buenas tardes");
}else if(miHora >= noche && (miHora <= 24 ) ){
    console.log("Buenas noches");
}else{
    console.log("Tu hora es incorrecta");
}



// SWITCH

let expresion = 1;

switch(expresion){

    case(1):
        console.log("Estas en el caso 1");
        break;
    case(2):
        console.log("Estas en el caso 2");
        break;
    case(3):
        console.log("Estas en el caso 3");
        break;
    default:
        console.log("No estas en ningun caso");
        break;
}


let miMes = 3;

switch(miMes){//Podemos usar cadenas, dentro de switch hace comparacion estricta
    case 1: case 2: case 12:
        console.log("Invierno");
        break;
    case 3: case 4: case 5:
        console.log("Primavera");
        break;
    case 6: case 7: case 8:
        console.log("Verano");
        break;
    case 9: case 10: case 11:
        console.log("Otoño");
        break;
    default:
        console.log("No existe tu mes");
        break;
}
