import { Component,Inject } from '@angular/core';
import {S1Service} from "./s1.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pno=1
  obj1=[{
    uname:"scott",city:"hyd"
  },{
    uname:"amith",city:"hyd"
  },{
    uname:"sumith",city:"hyd"
  },{
    uname:"sagar",city:"sec"
  },{
    uname:"john",city:"vzg"
  },{
    uname:"sam",city:"sec"
  }]
  constructor(@Inject (S1Service) public obj){}
  title = 'app';
  
  fun1(){
    alert(this.obj.t1)
    alert("Exec...")
  }
  ord=false;colname="uname"
  chngorder(cn){
    this.colname=cn
   this.ord=!this.ord
  }
}
