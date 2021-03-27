import {Inject,Injectable,Component,NgModule} from "@angular/Core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"

@Injectable()
class clsnew
{
sno=100

}

@Component({selector:"app",templateUrl:"views/p1.html"})
class cls1{
t1;
constructor(@Inject(clsnew) public obj){
this.t1=obj.sno
}
fun1(){
this.obj.sno=this.t1
}
}
@Component({
selector:"s2",templateUrl:"views/p2.html"
})
class cls2{
t2
 constructor(@Inject(clsnew) public obj){
 this.t2=obj.sno
 }
 funget(){
 this.t2=this.obj.sno
 }
}


@NgModule({
declarations:[cls1,cls2],imports:[FormsModule,BrowserModule],
bootstrap:[cls1,cls2],providers:[clsnew]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)

