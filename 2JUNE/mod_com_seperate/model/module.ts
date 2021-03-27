import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {cls1} from "./comp1"
import {cls2} from "./comp2"

@NgModule({
declarations:[cls1,cls2],
imports:[BrowserModule],
bootstrap:[cls1,cls2]
})
export class clsmod{}