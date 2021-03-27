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
var forms_1 = require("@angular/forms");
var clsnor1 = /** @class */ (function () {
    function clsnor1() {
        this.sno = 100;
    }
    return clsnor1;
}());
var clsnor2 = /** @class */ (function () {
    function clsnor2() {
        this.uname = "scott";
    }
    return clsnor2;
}());
var clsinj1 = /** @class */ (function () {
    function clsinj1() {
        this.objcls1 = new clsnor1();
    }
    clsinj1 = __decorate([
        Core_1.Injectable()
    ], clsinj1);
    return clsinj1;
}());
var clsinj2 = /** @class */ (function () {
    function clsinj2() {
        this.objcls2 = new clsnor2();
    }
    clsinj2 = __decorate([
        Core_1.Injectable()
    ], clsinj2);
    return clsinj2;
}());
var cls1 = /** @class */ (function () {
    function cls1(obj1, obj2) {
        this.obj1 = obj1;
        this.obj2 = obj2;
        this.t1 = obj1.objcls1.sno;
        this.t2 = obj2.objcls2.uname;
    }
    cls1.prototype.fun1 = function () {
        this.obj1.objcls1.sno = this.t1;
        this.obj2.objcls2.uname = this.t2;
    };
    cls1 = __decorate([
        Core_1.Component({ selector: "app",
            templateUrl: "views/p1.html" }),
        __param(0, Core_1.Inject(clsinj1)), __param(1, Core_1.Inject(clsinj2))
    ], cls1);
    return cls1;
}());
var cls2 = /** @class */ (function () {
    function cls2(obj1, obj2) {
        this.obj1 = obj1;
        this.obj2 = obj2;
        this.t2 = obj2.objcls2.uname;
        this.t1 = obj1.objcls1.sno;
    }
    cls2.prototype.fun2 = function () {
        this.t2 = this.obj2.objcls2.uname;
        this.t1 = this.obj1.objcls1.sno;
    };
    cls2 = __decorate([
        Core_1.Component({ selector: "s2",
            templateUrl: "views/p2.html"
        }),
        __param(0, Core_1.Inject(clsinj1)), __param(1, Core_1.Inject(clsinj2))
    ], cls2);
    return cls2;
}());
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        Core_1.NgModule({
            declarations: [cls1, cls2], imports: [forms_1.FormsModule, platform_browser_1.BrowserModule],
            bootstrap: [cls1, cls2], providers: [clsinj1, clsinj2]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
