import {Component,NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@Component({templateUrl:"views/abcd.html",selector:"app"})
class cls1{
city:string=""
}

@NgModule({
declarations:[cls1],imports:[BrowserModule,FormsModule],bootstrap:[cls1]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)



