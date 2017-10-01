import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  private lenguajes: any= [];
  private IDES:any= [];
  constructor(private http: Http) { 
    this.IDES.push("Visual Studio");
    this.IDES.push("IntellijIDEA");
    this.IDES.push("Netbeans");
    
  }

  ngOnInit() {
    let url="http://localhost:3000/lenguajes";
    this.http.get(url).subscribe((response:any) => {
      this.lenguajes=JSON.parse(response._body);
    });
  }

}
