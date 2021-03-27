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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var cls1 = /** @class */ (function () {
    function cls1() {
    }
    cls1 = __decorate([
        Core_1.Component({ selector: "app", templateUrl: "views/app.html" })
    ], cls1);
    return cls1;
}());
var clshome = /** @class */ (function () {
    function clshome(rt) {
        this.rt = rt;
    }
    clshome.prototype.funlogin = function () {
        if (this.t1 == 'scott' && this.t2 == "scott123") {
            this.rt.navigateByUrl("cn");
        }
        else {
            alert("Invalid");
        }
    };
    clshome = __decorate([
        Core_1.Component({ selector: "home", templateUrl: "views/home.html" }),
        __param(0, Core_1.Inject(router_1.Router))
    ], clshome);
    return clshome;
}());
var clsabout = /** @class */ (function () {
    function clsabout() {
    }
    clsabout = __decorate([
        Core_1.Component({ selector: "about", templateUrl: "views/about.html" })
    ], clsabout);
    return clsabout;
}());
var clscontact = /** @class */ (function () {
    function clscontact(obj) {
        this.obj = obj;
    }
    clscontact.prototype.fungo = function () {
        this.obj.navigateByUrl("ab");
    };
    clscontact = __decorate([
        Core_1.Component({ selector: "contact", templateUrl: "views/contact.html" }),
        __param(0, Core_1.Inject(router_1.Router))
    ], clscontact);
    return clscontact;
}());
var rout = [{
        path: "", component: clshome
    }, {
        path: "hm", component: clshome
    }, {
        path: "ab", component: clsabout
    }, {
        path: "cn", component: clscontact
    }];
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        Core_1.NgModule({
            declarations: [clsabout, cls1, clshome, clscontact,],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(rout)],
            bootstrap: [cls1]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
