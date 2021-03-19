import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  //Variable
  tipo:string = 'ingresoOperacion';
  descipcionInput:string;
  valorInput:number;

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === 'ingresoOperacion'){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descipcionInput, this.valorInput));
    }else if(this.tipo === 'egresoOperacion'){
      this.egresoServicio.egreso.push(new Egreso(this.descipcionInput, this.valorInput));
    }else{
      alert('Error!');
    }
  }

}
