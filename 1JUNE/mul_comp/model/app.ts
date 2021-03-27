import {Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({selector:"right",templateUrl:"views/right.html"})
class clsright{}

@Component({selector:"app",templateUrl:"views/app.html"})
class clsapp{}

@Component({selector:"header",templateUrl:"views/header.html"})
class clsheader{}

@Component({selector:"content",templateUrl:"views/content.html"})
class clscontent{}

@Component({selector:"footer",templateUrl:"views/footer.html"})
class clsfooter{}

@Component({selector:"left",templateUrl:"views/left.html"})
class clsleft{}

@NgModule({
declarations:[clsheader,clsapp,clsfooter,clscontent,clsleft,clsright],
imports:[BrowserModule],
bootstrap:[clsapp]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)





