import {Component,Input} from "@angular/core"
import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({selector:"s1",templateUrl:"views/view1.html"})
class cls1{
sno=100;
uname="scott"
}

@Component({selector:"s2",templateUrl:"views/view2.html"})
class cls2{
@Input() x;
@Input() y;
}

@NgModule({
declarations:[cls1,cls2],
imports:[BrowserModule],
bootstrap:[cls1]
})
class clsmod{
}

platformBrowserDynamic().bootstrapModule(clsmod)


