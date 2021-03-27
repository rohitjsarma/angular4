import {Component,NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@Component({templateUrl:"abcd.html",selector:"app"})
class cls1{
arr=[10,20,30,40,10] 
fun1(){
for(var i=0;i<this.arr.length;i++)
{
alert(this.arr[i])
}
}
}

@NgModule({
declarations:[cls1],imports:[BrowserModule,FormsModule],bootstrap:[cls1]
})
class clsmod{
}
platformBrowserDynamic().bootstrapModule(clsmod)



