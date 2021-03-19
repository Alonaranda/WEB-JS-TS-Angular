class DispositivosEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}


class Raton extends DispositivosEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `idRaton: ${this._idRaton}, tipo de entrada: ${this._tipoEntrada}, marca: ${this.marca}`;
    }
}



class Teclado extends DispositivosEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++ Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `idTeclado: ${this._idTeclado}, tipo de entrada: ${this._tipoEntrada}, marca: ${this.marca}`;
    }
}

 

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this.tamaño}`;
    }
}



class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++ Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `\t\tidComputadora: ${this._idComputadora}, nombre: ${this.nombre}, 
        Monitor--> ${this.monitor},
        Teclado--> ${this.teclado},
        Raton--> ${this.raton}`;
    }
}


class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += '\n ' + computadora.toString() ;
        }
        console.log(`Orden: ${this._idOrden}, Computadora: ${computadorasOrden}`);
    }
}

let dispostivo1 = new DispositivosEntrada('Bluetooth', 'Dell');
let raton1 = new Raton('Bluetooth', 'Asus');
let raton2 = new Raton('Cable', 'Dell');
let teclado1 = new Teclado('Cable', 'Acteck');
let teclado2 = new Teclado('C', 'Logitech');
let monitor1 = new Monitor('Samsung', '13"');
let monitor2 = new Monitor('Sony', '20"');
let computadora1 = new Computadora('Inspiron', monitor1, teclado1, raton1);
let computadora2 = new Computadora('XSD', monitor2, teclado2, raton2);

let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();

orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();