"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "Tutorials from joatmon.";
        this.imageLink = "http://lorempixel.com/400/200/";
        this.applyclass = true;
        this.applyblue = true;
    }
    TutorialsComponent.prototype.onClick = function (value) {
        console.log(value);
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>{{title}}</h2>\n              <img [src]=imageLink>\n              <br><br>\n              <div [class.myClass]=\"applyclass\">Applying class binding</div>\n              <div [style.color]=\"applyblue? 'blue':'orange' \">applying style binding</div>\n              <button (click)=\"onClick(demoInput.value)\">Click me</button>\n              <input type=\"text\" #demoInput [(ngModel)]=\"demoIn1\">\n              <input type=\"text\" [(ngModel)]=\"demoIn2\">\n              FullOut: {{demoIn1}} {{demoIn2}}\n\n              ",
            styles: [
                ".myClass{\n    color:red;\n  }"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map