import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  //Variable para tener referencia del ingreso
  ingresos:Ingreso[] =[];
  
  //Dependecia del servicio donde esta definido nuestro arreglo
  constructor(private ingresoServicio:IngresoServicio) { }
  ngOnInit(): void {
    //Inicializamos variable de referencia con lo que tiene nuestro arreglo
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso:Ingreso){
    this.ingresoServicio.eliminar(ingreso);
  }

}
