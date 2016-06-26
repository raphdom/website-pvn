import {Component, Input, ViewEncapsulation} from "@angular/core";
import {TodoModel} from "./todo-model";

@Component({
  encapsulation:ViewEncapsulation.Native,
  selector: 'todo-item-renderer',
  template: `
    <style>
        .completed{
            text-decoration: line-through;
        }
    </style>
    <div>
        <span [ngClass]="todo.status">{{todo.title}}</span>
        <button (click)="todo.toggle()">Toggle</button>
    </div>`
})
export class TodoItemRenderer{
  @Input() todo:TodoModel;
}
