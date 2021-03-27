import {Inject,Injectable,Component,NgModule} from "@angular/Core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"

class clsnor1{
sno=100
}
class clsnor2{
uname="scott"
}

@Injectable()
class clsinj{
objcls1:clsnor1=new clsnor1()
objcls2=new clsnor2()
}


@Component({selector:"app",
templateUrl:"views/p1.html"})
class cls1{
t1;t2
constructor(@Inject (clsinj) public obj ){
this.t1=obj.objcls1.sno
this.t2=obj.objcls2.uname
}
fun1(){
this.obj.objcls1.sno=this.t1
this.obj.objcls2.uname=this.t2
}
}

@Component({selector:"s2",
templateUrl:"views/p2.html"
})
class cls2{
t1;t2;
constructor(@Inject (clsinj) public obj1 ){
this.t2=obj1.objcls2.uname
this.t1=obj1.objcls1.sno
}
fun2(){
this.t2=this.obj1.objcls2.uname
this.t1=this.obj1.objcls1.sno
}
}


@NgModule({
declarations:[cls1,cls2],imports:[FormsModule,BrowserModule],
bootstrap:[cls1,cls2],providers:[clsinj]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)

