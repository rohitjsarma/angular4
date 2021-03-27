import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";
import { trigger, state,style,transition, animate } from "@angular/animations";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

var myanimations = [
trigger("animation1", [
state("vis" , style({top:"100px"})),
state("invv", style({top:"-550px"})),
transition("vis <=> invv", animate("1000ms"))
])
];

@Component({ selector: "app",
templateUrl: "AppComponentTemplate.html", 
animations: [myanimations] })
class AppComponent
{
	currentstate : string = "invv";
	tmp:string="s2"
	ShowData()
	{
	this.currentstate = "vis";
	}
	HideData()
	{
	this.currentstate = "invv";
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






