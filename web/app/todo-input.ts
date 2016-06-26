/**
 * Created by Raphael on 19/06/2016.
 */
import {Component} from '@angular/core';
import {TodoService} from "./todo-service";
import {TodoModel} from "./todo-model";

@Component({
  selector:'todo-input',
  template: `<div>
    <form (submit)="onSubmit()">
        <input type="text" [(ngModel)]="todoModel.title">
    </form>
  </div>`
})
export class TodoInput{
  todoModel:TodoModel = new TodoModel();
  constructor(public todoService: TodoService){
  }
  onSubmit(){
    console.log(this.todoService);
    this.todoService.addTodo(this.todoModel);
    this.todoModel = new TodoModel();
  }
}
