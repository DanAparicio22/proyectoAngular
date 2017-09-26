import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  private educacionC: any[];
  private educacionU: any[];
  constructor() { 
    this.educacionC=[];
    this.educacionC.push("Colegio Americano");
    this.educacionC.push("2001 - 2014");
    this.educacionC.push("Oruro, Bolivia");
    this.educacionU=[];
    this.educacionU.push("Universidad Católica Boliviana \"San Pablo\"");
    this.educacionU.push("2015 - Actualidad");
    this.educacionU.push("Cochabamba, Bolivia");
  }

  ngOnInit() {
  }

}
