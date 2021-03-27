"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Core_1 = require("@angular/Core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var cls1 = /** @class */ (function () {
    function cls1(obj) {
        var _this = this;
        this.obj = obj;
        this.str = "hi";
        this.cbk1 = function (dt) {
            alert(dt._body);
            _this.str = dt._body;
        };
    }
    cls1.prototype.fun1 = function () {
        this.str = "ABCD";
        this.obj.get("met1").subscribe(this.cbk1);
    };
    cls1.prototype.funsend = function () {
        var obj = { uname: "scott", city: "hyd" };
        this.obj.post("met2", obj).subscribe(function (dt) {
            alert(dt._body);
        });
    };
    cls1 = __decorate([
        Core_1.Component({ selector: "app", templateUrl: "views/p1.html" }),
        __param(0, Core_1.Inject(http_1.Http))
    ], cls1);
    return cls1;
}());
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        Core_1.NgModule({
            declarations: [cls1], imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            bootstrap: [cls1]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
