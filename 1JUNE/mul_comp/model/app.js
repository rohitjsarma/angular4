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
var clsright = /** @class */ (function () {
    function clsright() {
    }
    clsright = __decorate([
        core_1.Component({ selector: "right", templateUrl: "views/right.html" })
    ], clsright);
    return clsright;
}());
var clsapp = /** @class */ (function () {
    function clsapp() {
    }
    clsapp = __decorate([
        core_1.Component({ selector: "app", templateUrl: "views/app.html" })
    ], clsapp);
    return clsapp;
}());
var clsheader = /** @class */ (function () {
    function clsheader() {
    }
    clsheader = __decorate([
        core_1.Component({ selector: "header", templateUrl: "views/header.html" })
    ], clsheader);
    return clsheader;
}());
var clscontent = /** @class */ (function () {
    function clscontent() {
    }
    clscontent = __decorate([
        core_1.Component({ selector: "content", templateUrl: "views/content.html" })
    ], clscontent);
    return clscontent;
}());
var clsfooter = /** @class */ (function () {
    function clsfooter() {
    }
    clsfooter = __decorate([
        core_1.Component({ selector: "footer", templateUrl: "views/footer.html" })
    ], clsfooter);
    return clsfooter;
}());
var clsleft = /** @class */ (function () {
    function clsleft() {
    }
    clsleft = __decorate([
        core_1.Component({ selector: "left", templateUrl: "views/left.html" })
    ], clsleft);
    return clsleft;
}());
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        core_1.NgModule({
            declarations: [clsheader, clsapp, clsfooter, clscontent, clsleft, clsright],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [clsapp]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
