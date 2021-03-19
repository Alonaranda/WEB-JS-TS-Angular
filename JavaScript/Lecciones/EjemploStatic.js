class Auto{
    //Atributo estatico
    static contadorAutos = 0;

    //Metodo estatico, para variable que no se modifica
    static get MAX_OBJETOS(){
        return 5;
    }

    constructor(marca, modelo){
        this._marca = marca;
        this._modelo = modelo;
        if(Auto.contadorAutos < Auto.MAX_OBJETOS){
            this.idAuto = ++Auto.contadorAutos;
        }else{
            console.log('Haz superado el limite');
        }
        
    }


    //Get y Set de marca
    get marca() {
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    //Get y Set de modelo
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }

    especificacionesAuto(){
        return this.idAuto + ' ' + this._marca + ' ' + this._modelo;
    }

    toString(){
        return this.especificacionesAuto();
    }
}

//Hacemos una clase que herede lo de auto
class Motocicleta extends Auto{
    constructor(marca, modelo, color){
        super(marca, modelo);//Heredamos estos atributos
        this._color = color;
    }

    //Get y Set de Color
    get color(){
        return this._color;
    }
    set color(color){
        this._color = color;
    }

    especificacionesAuto(){
        return super.especificacionesAuto() + ' ' + this.color;
    }
}

let auto1 = new Auto('BMW','2005');
console.log(auto1.toString());

let moto1 = new Motocicleta('Vento', '2020', 'Roja');
console.log(moto1.toString());

console.log(Auto.contadorAutos);

let auto2 = new Auto('Volvo', '2003');
console.log(auto2.toString());

console.log(Auto.MAX_OBJETOS);

/*
let auto3 = new Auto('Volvo', '2004');
let auto4 = new Auto('Volvo', '2005');
let auto5 = new Auto('Volvo', '2006');
let auto6 = new Auto('Volvo', '2007');
console.log(auto6.toString());
*/