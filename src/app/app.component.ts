import { Component } from '@angular/core';
import { Empleado } from './empleado.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[]=[

    new Empleado("Juan","Díaz","Presidente",7500),
    new Empleado("Ana","Martín","Directora",5500),
    new Empleado("María","Fdez","Jefa sección",3500),
    new Empleado("Laura","López","Administrativo",2500),


  ];


}
