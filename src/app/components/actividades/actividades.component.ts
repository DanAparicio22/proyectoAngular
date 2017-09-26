import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  private proyectos:any[];
  private enlaces:any[];
  constructor() { 
    this.proyectos=[];
    this.enlaces=[];
    this.proyectos.push({titulo: "Proyecto hecho en C#, sistema de boletas de pago para empleados de una empresa.",enlace:"https://gitlab.com/Samuel_UCB/SisInfo"});
    this.proyectos.push({titulo: "Proyecto pagina web de la carrera de ingeneria de sistemas, UCB.",enlace:"https://github.com/jorgechavezrnd/SisWeb117"});
    this.proyectos.push({titulo: "Proyecto aplicacion web para fitness tracker, UCB.",enlace:"https://gitlab.com/DanAparicio22/BalanceFitnessTracker"});
  }

  ngOnInit() {
  }

}
