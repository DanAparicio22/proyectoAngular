import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  private educacionC: any = [];
  private educacionU: any= [];
  constructor(private http: Http) { 
  }

  ngOnInit() {
    let url="http://localhost:3000/educacionC";
    this.http.get(url).subscribe((response:any) => {
      this.educacionC=JSON.parse(response._body);
    });
    let url2="http://localhost:3000/educacionU";
    this.http.get(url2).subscribe((response:any) => {
      this.educacionU=JSON.parse(response._body);
    });
  }

}
