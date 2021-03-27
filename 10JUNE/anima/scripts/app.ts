import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";
import { trigger, state,style,transition, animate } from "@angular/animations";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

var myanimations = [
trigger("animation1", [
state("vis" , style({ transform: "scale(1)",color:"white",backgroundColor:"red"})),
state("invv", style({ transform: "scale(0)",backgroundColor:"green",color:"blue"})),
transition("vis <=> invv", animate("3000ms"))
]),
trigger("anm2",[
state("s1",style({backgroundColor:"red"})),
state("s2",style({backgroundColor:"green"})),
transition("s1<=>s2",animate("1500ms"))
])

];

@Component({ selector: "app",
templateUrl: "AppComponentTemplate.html", 
animations: [myanimations] })
class AppComponent
{
	currentstate : string = "vis";
	tmp:string="s2"
	ShowData()
	{
	this.currentstate = "vis";
	this.tmp="s1"
	}
	HideData()
	{
	this.currentstate = "invv";
	this.tmp="s2"
	}
}
@NgModule({ declarations: [ AppComponent ],
imports: [ BrowserModule, FormsModule,
BrowserAnimationsModule ], bootstrap: [ AppComponent ] })
class AppModule
{
}


//bootstrap module
platformBrowserDynamic().bootstrapModule(AppModule);






