import {Component,NgModule,Inject} from "@angular/Core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {RouterModule,Router} from "@angular/router"
import {FormsModule} from "@angular/forms"

@Component({selector:"app",templateUrl:"views/app.html"})
class cls1{
   
}

@Component({selector:"home",templateUrl:"views/home.html"})
class clshome{
    t1;t2
    constructor(@Inject (Router) public rt){
    }
    funlogin(){
        if(this.t1=='scott' && this.t2=="scott123")
        {
            this.rt.navigateByUrl("cn")
        }
        else
        {
            alert("Invalid")
        }
        
    }
}

@Component({selector:"about",templateUrl:"views/about.html"})
class clsabout{
}

@Component({selector:"contact",templateUrl:"views/contact.html"})
class clscontact{
    constructor(@Inject(Router) private obj ){

    }
    fungo(){
       this.obj.navigateByUrl("ab")
    }

}

var rout=[{
path:"",component:clshome
},{
path:"hm",component:clshome
},{
path:"ab",component:clsabout
},{
path:"cn",component:clscontact
}]

@NgModule({
declarations:[clsabout,cls1,clshome,clscontact,],
imports:[BrowserModule,FormsModule,RouterModule.forRoot(rout)],
bootstrap:[cls1]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)

