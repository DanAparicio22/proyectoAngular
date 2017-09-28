import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private bloque:any = [];
  constructor(private http: Http) { 

  }

  ngOnInit() {
    let url="http://localhost:3000/bloque";
    this.http.get(url).subscribe((response:any) => {
      this.bloque=JSON.parse(response._body);
    });
  }

}
