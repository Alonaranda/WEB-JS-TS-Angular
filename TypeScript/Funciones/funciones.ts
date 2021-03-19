let suma = function(a:number, b:number){
    return a + b;
}

console.log(suma(5,3));

let sumaFlecha = (a:number, b:number) =>{
    return a + b;
}

console.log(sumaFlecha(3,1));

let obtenerNombre = function(){
    return "Chris Alonso";
}

let obtenerNombreFlecha = () => "Chris Alonso";
console.log(obtenerNombreFlecha());