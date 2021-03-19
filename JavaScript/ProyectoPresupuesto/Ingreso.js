class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descipcion, valor){
        super(descipcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    get id(){
        return this._id;
    }
}