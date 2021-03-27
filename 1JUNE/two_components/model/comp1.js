"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var cls1 = /** @class */ (function () {
    function cls1() {
    }
    cls1 = __decorate([
        core_1.Component({ selector: "s1", template: "<h1>Hi</h1>" })
    ], cls1);
    return cls1;
}());
var cls2 = /** @class */ (function () {
    function cls2() {
    }
    cls2 = __decorate([
        core_1.Component({ selector: "s2", templateUrl: "views/view1.html" })
    ], cls2);
    return cls2;
}());
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        core_2.NgModule({
            declarations: [cls1, cls2],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [cls1, cls2]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
