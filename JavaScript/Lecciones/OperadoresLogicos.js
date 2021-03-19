//AND (&&) cumple todas las condiciones
let a = 5;
let valMinimo = 0;
let valMaximo = 10;

if( a >= valMinimo && a <= valMaximo){
    console.log("Esta dentro de rango");
}else{
    console.log("Fuera de rango");
}


//OR (||) cumple una condición
let vacaciones = true, descanso = false;

if(vacaciones || descanso){
    console.log("Puedo dormir todo el día");
}else{
    console.log("Tienes que trabajar");
}
