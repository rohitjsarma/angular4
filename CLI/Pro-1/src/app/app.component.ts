import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  firstname:string="";
  lastname:string="";
  gender:string="";
  email:string="";
  mobile:string="";
  country:string="";
  age:number;

}
