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
/**
 * Created by Raphael on 19/06/2016.
 */
var core_1 = require('@angular/core');
var todo_service_1 = require("./todo-service");
var todo_model_1 = require("./todo-model");
var TodoInput = (function () {
    function TodoInput(todoService) {
        this.todoService = todoService;
        this.todoModel = new todo_model_1.TodoModel();
    }
    TodoInput.prototype.onSubmit = function () {
        console.log(this.todoService);
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new todo_model_1.TodoModel();
    };
    TodoInput = __decorate([
        core_1.Component({
            selector: 'todo-input',
            template: "<div>\n    <form (submit)=\"onSubmit()\">\n        <input type=\"text\" [(ngModel)]=\"todoModel.title\">\n    </form>\n  </div>"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoInput);
    return TodoInput;
}());
exports.TodoInput = TodoInput;
//# sourceMappingURL=todo-input.js.map