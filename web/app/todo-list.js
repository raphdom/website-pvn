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
var todo_service_1 = require("./todo-service");
var todo_item_renderer_1 = require("./todo-item-renderer");
var started_pipe_1 = require("./started-pipe");
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
        console.log(todoService);
    }
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            pipes: [started_pipe_1.StartedPipe],
            directives: [todo_item_renderer_1.TodoItemRenderer],
            template: "<div>\n    <ul>\n        <li *ngFor='#todo of todoService.todos | started'>\n            <todo-item-renderer [todo]=\"todo\"></todo-item-renderer>\n        </li>\n    </ul>\n  </div>"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=todo-list.js.map