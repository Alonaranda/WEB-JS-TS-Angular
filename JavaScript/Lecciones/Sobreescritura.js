class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Nombre: ${this._nombre} sueldo: $${this._sueldo} `;
    }

}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    //Sobreescritura
    obtenerDetalles(){
        return `Gerente ${super.obtenerDetalles()} departamento: ${this._departamento}`;
    }
}



let empleado1 = new Empleado('Juan', 3000);
console.log(empleado1.obtenerDetalles());
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log(gerente1.obtenerDetalles());

//Polimorfismo
//Su función varia dependiendo de la clase de donde venga el objeto 
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}
imprimir(empleado1);
imprimir(gerente1);

//instanceof 
//De que clase viene?
function cualClaseSoy(valor){
    if(valor instanceof Empleado){
        console.log('Soy Empleado');
    } 
    if(valor instanceof Gerente){
        console.log('Soy gerente');
        console.log(valor._departamento);
    }
    if(valor instanceof Object){
        console.log('Soy tipo Object')
    }
}

cualClaseSoy(empleado1);