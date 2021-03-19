class Persona{
    //Atributo estatico
    static contadorPersonas = 0;

    //Constructor
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this.apellido = apellido;
        this._edad = edad;
        ++Persona.contadorPersonas;
        this._idPersona = Persona.contadorPersonas;
    }

    //Get idPersona
    get idPersona(){
        return this._idPersona;
    }

    //Get y Set de Nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    //Get y Set de apellido
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    //Get y Set de Edad
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    //Metodo de nombre completo
    nombreCompleto(){
        return `idPersona:${Persona.contadorPersonas},` + ' ' + this._nombre + ' ' + this._apellido + ' ' + ` Años:${this._edad}, `;
    }

    toString(){
        return this.nombreCompleto();
    }
}

let persona1 = new Persona('Christian', 'Alonso', 3);
console.log(persona1.toString());
let persona2 = new Persona('Juan', 'Temich', 5);
console.log(persona2.toString());


class Empleado extends Persona{
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        ++Empleado.contadorEmpleado;
        super(nombre, apellido, edad);
        this._idEmpleado = Empleado.contadorEmpleado;
        this._sueldo = sueldo;
        
    }

    //Get de idEmpleado
    get idEmpleado(){
        return this._idEmpleado;
    }

    //Get y Set de sueldo 
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    nombreCompleto(){
        return super.nombreCompleto() + this._sueldo + ` idEmpleado:${this._idEmpleado}`;
    }
}

let empleado1 = new Empleado('May', 'Chavez', 20, 20000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Beto', 'Pico', 30, 12000);
console.log(empleado2.toString());


class Cliente extends Persona{
    static idCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        ++Cliente.idCliente;
        this._idCliente = Cliente.idCliente;
        this._fechaRegistro = new Date();
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    nombreCompleto(){
        return super.nombreCompleto() +` idCliente:${this._idCliente} ` + `fecha registro: ${this.fechaRegistro} `;
    }

}

let cliente1 = new Cliente('Aldo', 'Perez', 20, 2);
console.log(cliente1.toString());