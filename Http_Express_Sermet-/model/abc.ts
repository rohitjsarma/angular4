import {Component,NgModule,Inject} from "@angular/Core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {Http,HttpModule} from "@angular/http"
@Component({selector:"app",templateUrl:"views/p1.html"})

class cls1{
constructor(@Inject(Http) private obj){}
str="hi"
fun1(){
this.str="ABCD"
this.obj.get("met1").subscribe(this.cbk1)
}
cbk1=(dt)=>{
alert(dt._body)
this.str=dt._body
}

funsend(){
var obj={uname:"scott",city:"hyd"}
this.obj.post("met2",obj).subscribe(function(dt){
alert(dt._body)
})
}

}

@NgModule({
declarations:[cls1],imports:[BrowserModule,HttpModule],
bootstrap:[cls1]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)

