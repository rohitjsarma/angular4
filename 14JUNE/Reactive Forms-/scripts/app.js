"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var forms_1 = require("@angular/forms");
//create component
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.msg = "";
        this.myform = new forms_1.FormGroup({
            firstname: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(20), forms_1.Validators.pattern("^[a-zA-Z ]*$")]),
            lastname: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(20), forms_1.Validators.pattern("^[a-zA-Z ]*$")]),
            email: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")]),
            amount: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]*$")]),
            gender: new forms_1.FormControl("", [forms_1.Validators.required]),
            country: new forms_1.FormControl("", [forms_1.Validators.required])
        });
    }
    AppComponent.prototype.RegisterClick = function () {
        if (this.myform.valid) {
            this.msg = "First Name: " + this.myform.controls.firstname.value + "<br>Last Name: " + this.myform.controls.lastname.value + "<br>Email: " + this.myform.controls.email.value + "<br>Amount: " + this.myform.controls.amount.value + "<br>Gender: " + this.myform.controls.gender.value + "<br>Country: " + this.myform.controls.country.value;
        }
        else {
            this.msg = "Invalid";
        }
    };
    AppComponent = __decorate([
        core_1.Component({ selector: "app", templateUrl: "AppComponentTemplate.html" })
    ], AppComponent);
    return AppComponent;
}());
//create module
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({ declarations: [AppComponent], imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule], bootstrap: [AppComponent] })
    ], AppModule);
    return AppModule;
}());
//bootstrap module
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
