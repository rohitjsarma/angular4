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
var animations_1 = require("@angular/animations");
var animations_2 = require("@angular/platform-browser/animations");
var myanimations = [
    animations_1.trigger("animation1", [
        animations_1.state("vis", animations_1.style({ transform: "scale(1)", color: "white", backgroundColor: "red" })),
        animations_1.state("invv", animations_1.style({ transform: "scale(0)", backgroundColor: "green", color: "blue" })),
        animations_1.transition("vis <=> invv", animations_1.animate("3000ms"))
    ]),
    animations_1.trigger("anm2", [
        animations_1.state("s1", animations_1.style({ backgroundColor: "red" })),
        animations_1.state("s2", animations_1.style({ backgroundColor: "green" })),
        animations_1.transition("s1<=>s2", animations_1.animate("1500ms"))
    ])
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.currentstate = "vis";
        this.tmp = "s2";
    }
    AppComponent.prototype.ShowData = function () {
        this.currentstate = "vis";
        this.tmp = "s1";
    };
    AppComponent.prototype.HideData = function () {
        this.currentstate = "invv";
        this.tmp = "s2";
    };
    AppComponent = __decorate([
        core_1.Component({ selector: "app",
            templateUrl: "AppComponentTemplate.html",
            animations: [myanimations] })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({ declarations: [AppComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
                animations_2.BrowserAnimationsModule], bootstrap: [AppComponent] })
    ], AppModule);
    return AppModule;
}());
//bootstrap module
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
