import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private perfilInfo: any= [];
  constructor() {
    this.perfilInfo.push("Soy una persona responsable, autodidacta y adaptable. Participo en distintas actividades y siempre estoy abierto a mejoras y posibilidades. \n Constante en el trabajo que realizo y tambien para resolver un problema que resulte dificil");
    this.perfilInfo.push("Nombre completo: Daniel Aparicio Quintanilla");
    this.perfilInfo.push("Edad: 20 años");
    this.perfilInfo.push("Locación: Cochabamba, Bolivia ");
   }

  ngOnInit() {
  }

}
