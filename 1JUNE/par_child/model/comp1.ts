import {Component} from "@angular/core"
import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({selector:"s1",templateUrl:"views/view1.html"})
class cls1{
}

@Component({selector:"s2",templateUrl:"views/view2.html"})
class cls2{
}

@NgModule({
declarations:[cls1,cls2],
imports:[BrowserModule],
bootstrap:[cls1]
})
class clsmod{
}

platformBrowserDynamic().bootstrapModule(clsmod)


