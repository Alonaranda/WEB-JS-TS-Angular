import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  

  @Input() presupuestoTotal:number;
  @Input() ingresoTotal:number;
  @Input() egresototal:number;
  @Input() porcentajetotal:number;

  constructor() { }

  ngOnInit(): void {
  }

}
