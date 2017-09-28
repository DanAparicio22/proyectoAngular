import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  private proyectos:any = [];
  constructor(private http: Http) {  
  }

  ngOnInit() {
    let url="http://localhost:3000/actividades";
    this.http.get(url).subscribe((response:any) => {
      this.proyectos=JSON.parse(response._body);
    });
  }

}
