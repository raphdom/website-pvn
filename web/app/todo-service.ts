import {Injectable} from "@angular/core";
import {TodoModel} from "./todo-model";

@Injectable()
export class TodoService{
  todos:Array<TodoModel>=[
    new TodoModel("eat"),
    new TodoModel("sleep"),
    new TodoModel("code")
  ];

  addTodo(todo:TodoModel){
    this.todos = [...this.todos, todo];
  }
}
