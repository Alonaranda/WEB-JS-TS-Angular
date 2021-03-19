class Egreso extends Dato{
    static contadorEgreso = 0;

    constructor(descipcion, valor){
        super(descipcion, valor);
        this._id = ++Egreso.contadorEgreso;
    }

    get id(){
        return this._id;
    }
}