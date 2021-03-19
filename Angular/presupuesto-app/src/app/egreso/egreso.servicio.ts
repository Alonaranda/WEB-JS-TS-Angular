import { Egreso } from './egreso.model';

export class EgresoServicio{
    egreso: Egreso[] = [
        new Egreso("Renta", 3000),
        new Egreso("Comida", 1200)
    ];

    eliminar(egreso:Egreso){
        const indice:number = this.egreso.indexOf(egreso);
        this.egreso.splice(indice,1); 
    }
}