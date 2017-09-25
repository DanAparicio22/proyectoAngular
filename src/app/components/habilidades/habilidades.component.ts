import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  private lenguajes: any[];
  private IDES:any[];
  constructor() { 
    this.lenguajes=[];
    this.lenguajes.push("C++");
    this.lenguajes.push("C#");
    this.lenguajes.push("Java SE");
    this.lenguajes.push("Ruby");
    this.lenguajes.push("PHP");
    this.lenguajes.push("Python");
    this.IDES=[];
    this.IDES.push("Visual Studio");
    this.IDES.push("IntellijIDEA");
    this.IDES.push("Netbeans");
    
  }

  ngOnInit() {

  }

}
