import {Inject,Injectable,Component,NgModule} from "@angular/Core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"

class clsnor{
sno=100
}

@Injectable()
class clsinj{
objcls:clsnor=new clsnor()
}


@Component({selector:"app",
templateUrl:"views/p1.html"})
class cls1{
t1;
constructor(@Inject (clsinj) public obj ){
this.t1=obj.objcls.sno
}
fun1(){
this.obj.objcls.sno=this.t1
alert(this.obj.objcls.sno)
}
}

@Component({selector:"s2",
templateUrl:"views/p2.html"
})
class cls2{
t2;
constructor(@Inject (clsinj) public obj1 ){
this.t2=obj1.objcls.sno
}
fun2(){
this.t2=this.obj1.objcls.sno
alert(this.t2)
}
}


@NgModule({
declarations:[cls1,cls2],imports:[FormsModule,BrowserModule],
bootstrap:[cls1,cls2],providers:[clsinj]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)

