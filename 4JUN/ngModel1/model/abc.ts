import {Component,NgModule} from "@angular/Core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"

@Component({selector:"app",templateUrl:"views/p1.html"})

class cls1{
t1;

}

@NgModule({
declarations:[cls1],
imports:[FormsModule,BrowserModule],
bootstrap:[cls1]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)

