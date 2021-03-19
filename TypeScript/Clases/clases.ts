class Persona {
    private nombre:string; //Si es private, solo se puede acceder desde la misma clase

    constructor(nombre:string){
        this.nombre = nombre;
    }

    //Acceder a atributo privado
    getNombre():string{
        return this.nombre;
    }

    static metodoEstatico():number{
        return 10;
    }
}

let persona1 = new Persona('Chris');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());


class Perro{
    public raza:string;
    public tamaño:number;

    constructor(raza:string,tamaño:number){
        this.raza = raza;
        this.tamaño = tamaño;
    }


}

let perro1 = new Perro('Bulldog', 20);
console.log(perro1);

