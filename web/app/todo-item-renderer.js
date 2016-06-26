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
var core_1 = require("@angular/core");
var todo_model_1 = require("./todo-model");
var TodoItemRenderer = (function () {
    function TodoItemRenderer() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_model_1.TodoModel)
    ], TodoItemRenderer.prototype, "todo", void 0);
    TodoItemRenderer = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Native,
            selector: 'todo-item-renderer',
            template: "\n    <style>\n        .completed{\n            text-decoration: line-through;\n        }\n    </style>\n    <div>\n        <span [ngClass]=\"todo.status\">{{todo.title}}</span>\n        <button (click)=\"todo.toggle()\">Toggle</button>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemRenderer);
    return TodoItemRenderer;
}());
exports.TodoItemRenderer = TodoItemRenderer;
//# sourceMappingURL=todo-item-renderer.js.map