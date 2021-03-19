//Funcionalidad sin modificaruna clase,metodos,atributos  con @
function Saludar(target: Function):void{
    target.prototype.saludos = function():void{
        console.log("Hola desde decorador");
    }
}

@Saludar
class Hola{
    constructor(){
    }
}


let hola1 = new Hola();
hola1.saludos();