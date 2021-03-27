import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";

//create component
@Component({ selector: "app", templateUrl: "AppComponentTemplate.html" })
class AppComponent
{
	firstname : string = "";
	lastname : string = "";
	email : string = "";
	amount : string = "";
	gender: string = "";
	country: string = "";
	msg : string = "";
	
	RegisterClick(f)
	{
	alert(f.valid)
		if (f.valid)
		{
			this.msg = "Valid";
		}
		else
		{
			this.msg = "Invalid";
		}
	}
}


//create module
@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, FormsModule ], bootstrap: [ AppComponent ] })
class AppModule
{
}


//bootstrap module
platformBrowserDynamic().bootstrapModule(AppModule);






