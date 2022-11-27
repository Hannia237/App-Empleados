import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.module';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  @Input()empleadoDeLista:Empleado;
  @Input()indice:number;



  empleados:Empleado[]=[

    new Empleado("Juan","Díaz","Presidente",7500),
    new Empleado("Ana","Martín","Directora",5500),
    new Empleado("María","Fdez","Jefa sección",3500),
    new Empleado("Laura","López","Administrativo",2500),



  ];
  empleadoAgregado(empleado:Empleado){
    this.empleados.push(empleado);
  }


  arrayCaracteristicas=[''];

  agregarCaracteristica(nuevaCarecteristica: string){
    this.arrayCaracteristicas.push(nuevaCarecteristica);
  }


  
}