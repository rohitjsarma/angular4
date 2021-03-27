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
class clsinj1{
objcls1:clsnor1=new clsnor1()
}

@Injectable()
class clsinj2{
objcls2=new clsnor2()
}


@Component({selector:"app",
templateUrl:"views/p1.html"})
class cls1{
t1;t2
constructor(@Inject (clsinj1) public obj1,@Inject (clsinj2) public obj2 ){
this.t1=obj1.objcls1.sno
this.t2=obj2.objcls2.uname
}
fun1(){
this.obj1.objcls1.sno=this.t1
this.obj2.objcls2.uname=this.t2
}
}

@Component({selector:"s2",
templateUrl:"views/p2.html"
})
class cls2{
t1;t2;
constructor(@Inject (clsinj1) public obj1,@Inject (clsinj2) public obj2 ){
this.t2=obj2.objcls2.uname
this.t1=obj1.objcls1.sno
}
fun2(){
this.t2=this.obj2.objcls2.uname
this.t1=this.obj1.objcls1.sno
}
}


@NgModule({
declarations:[cls1,cls2],
imports:[FormsModule,BrowserModule],
bootstrap:[cls1,cls2],providers:[clsinj1,clsinj2]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)

