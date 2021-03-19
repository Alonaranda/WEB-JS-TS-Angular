// CLASES
/*
Es una plantilla
Un objeto es una instancia de una clase
Posee atributos y metodos
Clase --> Objetos
Empezando con Mayuscula
No aplica el concepto de hoisting, es posible generar objetos antes de generar la clase
*/

class Persona{
    //Poner un constructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa contador" + ' ' + Persona.contadorObjetosPersona + ' ' + this._nombre);
    }

    //Atributos estaticos, se asocia a la clase
    static contadorObjetosPersona = 0;

    email = 'Valor default email';//Atributo que se asocia con el objeto 



    get nombre (){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }   
    get apellido (){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        //Polimorfismo
        return this.nombreCompleto();
    }

    //Metodo Static
    //Se va a asociar con nuestra clase y no con los objetos
    //Estos metodos se ejecutan desde la clase
    static saludar(){
        console.log('Solo me puedes invocar desde una clase, no desde un objeto de la clase');
    }
    static saludos(persona){
        console.log(`Puedes acceder a los atributos de la clase, Ejemplo de Persona1: ${persona.nombre}`);
    }

    
}


let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.nombre);//Llama el metodo get
console.log(persona1.apellido);
console.log(persona1);
console.log(persona1.email);
persona1.nombre = 'Beto';//Llama el metodo set
persona1.apellido = 'Juarez'
console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);


//Herencia 

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobre escritura 
    nombreCompleto(){
        //Polimorfismo(Multiples formas en tiempo de ejecución)
        return super.nombreCompleto() + ' ' + this._departamento;//llamar metodo de la clase padre
    }
}



let empleado1 = new Empleado('Roberto', 'Chavez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.departamento);
console.log(empleado1._apellido);
console.log(empleado1.email);
empleado1.nombre = 'May';
console.log(empleado1);
console.log(empleado1.nombreCompleto()); //Hereda los metodos de la clase padre

//Sobre escritura 
//Desde la clase hija modifica un metodo de la clase padre
console.log(empleado1.nombreCompleto());

//Polimorfismo --> Llamar metodo en la clase padre o hija, dependiendo con que objeto se este trabajando
console.log(empleado1.toString());//Objeto de la clase hija, se incluye departamento
console.log(persona1.toString());//Objeto de la clase padre, solo incluye nombre y apellido 


//Si intentamos llamar al metodo estatico de la clase persona, no funciona
//persona1.saludar();//No es posible hacer un llamado static desde un objeto 
//Pero a un metodo Static si le podemos pasar argumentos desde un objeto 
Persona.saludar();
Persona.saludos(persona1);

Empleado.saludar();//Se heredan los metodos estaticos
Empleado.saludos(empleado1);

console.log(Persona.email);//La detecta como una nueva variable


//Intentamos acceder a los atritubutos estaticos de la clase
//console.log(persona1.contadorObjetosPersona);//Solo se puede acceder por medio a nuestra clase
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona); //Se heredan los atributos estaticos
console.log(Empleado.email);//Asociado con el objeto 