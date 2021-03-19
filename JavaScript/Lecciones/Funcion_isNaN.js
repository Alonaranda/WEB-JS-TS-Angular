let miNumero = "10x";

//Not a number 

let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad);

if(isNaN(edad)){
    console.log("No es un numero");
}else{
    console.log("Es un numero, puedo trabajar")
}